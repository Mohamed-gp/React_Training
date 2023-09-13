/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "headercolor": "#279EFF",
        "hovercolor": "#003B6B",
      },
      fontFamily:{
        fira:['Fira Code', 'monospace'],
      },
      container:{
        center: true,
      },
    },
  },
  plugins: [],
}