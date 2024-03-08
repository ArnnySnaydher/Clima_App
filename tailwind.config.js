/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image':"url(public/img/bg_clima.jpg)"
      },
    },
   
  },
  plugins: [],
}

