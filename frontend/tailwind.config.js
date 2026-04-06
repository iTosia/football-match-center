/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          base: '#0F1117',
          surface: '#1A1D2E',
          elevated: '#242838',
          border: '#2D3148',
        },
        brand: {
          blue: '#468FEA',
          'blue-hover': '#66A3EE',
          green: '#4ADE80',
        },
        ink: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
