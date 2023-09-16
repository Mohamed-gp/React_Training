/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "headerc": "rgba(39,158,255,1)",
        "maincolor-100": "rgba(0,59,107,1)",
        "maincolor-85": "rgba(0,59,107,.85)",
        "maincolor-71": "rgba(0,59,107,.71)",
      },
      fontFamily:{
        fira:['Fira Code', 'monospace'],
        poppins:['Poppins', 'sans-serif'],
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '30': '30px',
      },
      borderRadius: {
        'hverylg': '50px',
        'verylg': '100px',

      },
      container:{
        center: true,
      },
      
    },
  },
  plugins: [],
}