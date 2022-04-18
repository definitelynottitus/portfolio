module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { 
            transform: 'translateY(100px)',
            opacity:0 
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: 1
          },
        },
        text: {
          '0%, 100%': {
            'background-size':'200%',
            'background-position': 'right center',
          },
          '50%': {
            'background-size':'200%',
            'background-position': 'left center',
          }
        }
      },
      animation: {
        fadein: 'fadein 1s ease-in-out 1',
        text: 'text 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
