import { NextResponse } from 'next/server';

export async function POST() {
  try {
    console.log('Creating ElevenLabs session...');

    const apiKey = process.env.ELEVENLABS_API_KEY;
    const agentId = process.env.ELEVENLABS_AGENT_ID;

    if (!apiKey || !agentId) {
      console.error('Missing ElevenLabs credentials');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API credentials' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
      {
        method: 'GET',
        headers: {
          'xi-api-key': apiKey,
        },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('ElevenLabs API error:', response.status, error);
      return NextResponse.json(
        { error: `ElevenLabs API error: ${response.status} - ${error}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('Session created successfully:', data);

    return NextResponse.json({ signedUrl: data.signed_url });
  } catch (error) {
    console.error('Error creating session:', error);
    return NextResponse.json(
      { error: `Failed to create conversation session: ${error}` },
      { status: 500 }
    );
  }
}
