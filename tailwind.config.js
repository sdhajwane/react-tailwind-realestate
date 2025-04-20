/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#ff4c1c',
      },
      keyframes: {
        keyframes: {
          "swipe-up": {
            '0%': { transform: 'translateY(100%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
   
          "swipe-down": {
            '0%': { opacity: 0, transform: 'translateY(-100%)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          swipeDown: {
            '0%': { opacity: 0, transform: 'translateY(-50%)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        animation: {
          "swipe-down": 'swipe-down 0.6s ease-out', // Adjust duration as needed
         "swipe-up": 'swipe-up 1.0s ease-out forwards',
         swipeDown: 'swipeDown 2.0s infinite ease-in-out',
        },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #8b5cf6, #ec4899, #ff4c1c)',
      },
    },
  },
  plugins: [],
}