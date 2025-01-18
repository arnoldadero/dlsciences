/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ef',
          200: '#b9c6d2',
          300: '#8096a9',
          400: '#5d7285',
          500: '#40566d', 
          600: '#3a4a5c',
          700: '#2f3e4c',
          800: '#253341',
          900: '#1a2633'
        },
        accent: {
          50: '#e6f3ff',
          100: '#b3dbff',
          200: '#80c3ff',
          300: '#4dabff',
          400: '#1a93ff', 
          500: '#0079cc',
          600: '#0060a3',
          700: '#004a7a',
          800: '#003351',
          900: '#001d29'
        },
        neutral: {
          50: '#f7f9fa',
          100: '#edf1f4',
          200: '#e1e7ec',
          300: '#c4d1dc',
          400: '#a6b7c5',
          500: '#8896a7', 
          600: '#6b7c8d',
          700: '#4e6373',
          800: '#314959',
          900: '#142f3f'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif']
      },
      boxShadow: {
        'elegant': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
      }
    }
  },
  variants: {},
  plugins: []
};
