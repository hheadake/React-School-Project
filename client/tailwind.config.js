/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Strawberry Cheesecuit',],
      
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['30px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [],
}

