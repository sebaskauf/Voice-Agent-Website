/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#0B1020",
        bgDark2: "#0E1530",
        fg: "#FFFFFF",
        primary: "#38FAFF",
        accent: "#0EA5E9"
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
