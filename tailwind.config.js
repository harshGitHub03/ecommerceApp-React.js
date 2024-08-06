/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "scrollEffect":{
          from:{transform:'translateX(100%)'},
          to:{transform:'translateX(-100%)'}
        }
      },
      animation:{
        "scrollEffect":'scrollEffect 8s linear infinite'
      }
    },
  },
  plugins: [],
}

