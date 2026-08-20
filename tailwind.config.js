/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7f2',
          100: '#dcefe2',
          200: '#b9dfc6',
          300: '#8cc7a2',
          400: '#5aa87b',
          500: '#3a8a5e',
          600: '#2b6e4a',
          700: '#24583d',
          800: '#1f4733',
          900: '#1a3b2b',
          950: '#0d2118',
        },
        accent: {
          50: '#fdf8ef',
          100: '#f9edd3',
          200: '#f2d9a5',
          300: '#eac06d',
          400: '#e2a53f',
          500: '#d98e28',
          600: '#c0711f',
          700: '#a0551d',
          800: '#83451e',
          900: '#6c3a1c',
        },
        cream: {
          50: '#faf9f6',
          100: '#f5f3ee',
          200: '#e9e5dc',
          300: '#d8d2c4',
        },
        ink: {
          50: '#f6f7f8',
          100: '#e9ebed',
          200: '#d3d7db',
          300: '#aeb5bc',
          400: '#828c96',
          500: '#67717b',
          600: '#525a63',
          700: '#444b53',
          800: '#3b4147',
          900: '#34383d',
          950: '#1f2226',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 10px 30px -5px rgb(0 0 0 / 0.12), 0 4px 10px -4px rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [],
}