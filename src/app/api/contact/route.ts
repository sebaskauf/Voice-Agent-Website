import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, praxis, ort, agentType, nachricht } = body;

    // Validation
    if (!name || !email || !ort || !agentType) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const timestamp = new Date().toLocaleString('de-DE', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    await resend.emails.send({
      from: 'OptimAIte Kontaktformular <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'sebaskauf.business@gmail.com',
      replyTo: email,
      subject: `🔔 Neue Kontaktanfrage von ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #38FAFF 0%, #0EA5E9 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #0EA5E9; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #38FAFF; }
              .footer { margin-top: 20px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
              .timestamp { color: #999; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 Neue Kontaktanfrage</h1>
                <p class="timestamp">${timestamp}</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 E-Mail</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${praxis ? `
                <div class="field">
                  <div class="label">🏥 Praxis / Unternehmen</div>
                  <div class="value">${praxis}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">📍 Ort</div>
                  <div class="value">${ort}</div>
                </div>
                <div class="field">
                  <div class="label">🤖 Art des KI-Agenten</div>
                  <div class="value">${agentType}</div>
                </div>
                ${nachricht ? `
                <div class="field">
                  <div class="label">💬 Nachricht</div>
                  <div class="value">${nachricht}</div>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>Diese E-Mail wurde automatisch vom OptimAIte Kontaktformular gesendet.</p>
                <p>Du kannst direkt auf diese E-Mail antworten, um ${name} zu erreichen.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('✅ Kontaktanfrage erfolgreich gesendet:', {
      name,
      email,
      ort,
      timestamp,
    });

    return NextResponse.json(
      { message: 'Anfrage erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
