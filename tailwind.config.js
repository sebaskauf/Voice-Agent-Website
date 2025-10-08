/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Healthcare-optimized color scheme
        bgDark: "#FFFFFF",        // Light background for trust
        bgDark2: "#F8F9FA",       // Subtle gray for sections
        fg: "#1A2332",            // Dark text for readability
        primary: "#2196F3",       // Medical blue (trustworthy)
        accent: "#4CAF50",        // Health green (positive)
        // Legacy support (gradually phase out)
        textSecondary: "#546E7A", // Muted text
        borderLight: "#E0E0E0"    // Subtle borders
      },
      fontFamily: {
        sans: ['var(--font-garamond)', 'Georgia', 'serif'],
        display: ['var(--font-garamond)', 'Georgia', 'serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
      }
    }
  },
  plugins: []
}
