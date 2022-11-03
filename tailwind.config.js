/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise: 'url("/image/noise.png")'
      },
      colors: {
        'noise-bg': "#1c1c1c",
        'hover-purple': "#5135FF",
        "txt-light": "#cfcfcf",
        "txt-dark": "#525252",
        "hero-light": "#f6f6f6",
        "position-light": "#f9f9f9",
        "case-green": "#91F1C3",
        "case-purple": "#50227D",
        "case-yellow": "#FFCB47",
        "case-text": "#666666",
        "case-title": "#222222",
        "position-border": "#3f3f3f",
        "tertial": "#FFCB47"
      },
      fontFamily: {
        sans: "mont"
      },
      gridTemplateColumns: {
        "services": "1fr 1fr",
        "12-items": "repeat(12, 1fr)",
        "18": "repeat(18, minmax(0, 1fr))",
        "prof": "minmax(auto, max-content)"
      },
      maxWidth: {
        '6\.5xl': "1120px",
        '2\.5xl': "640px",
        "17\.5": "280px",
        "85": "340px",
        "75": "300px",
        "139": "556px"
      },
      maxHeight: {
        '100': '402px'
      },
      gridColumnEnd: {
        "14": "14"
      },
      width: {
        "83": "338px",
        "70": "280px"
      },
      gap: {
        "31": "120px",
        "23": "90px"
      },
      lineHeight: {
        "6\.5": "26px"
      },
      fontSize: {
        "base": ["16px", "26px"],
        "7\.5xl": ["5rem", '105px'],
        "2\.8xl": ["46px", "58px"],
        "3\.5xl": ["32px", "44px"],
        "4\.5xl": ["40px", "56px"],
        "5\.5xl": ["54px", "72px"]
      },
      padding: {
        "4\.5": "18px",
        "15": "60px",
        "62": "245px"
      },
      boxShadow: {
        'btn-shadow': "inset 0 0 0 24px #5135FF",
        "link-shadow": "inset 0 0 0 355px #5135FF",
        "link-shadow-0": "inset 0 0 0 0 #5135FF"
      },
      transitionTimingFunction: {
        "in-hover": "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      margin: {
        "11": "44px"
      }
    },
  },
  plugins: [],
}
