/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './Catalogo.js',
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
      },
    },
  },
  safelist: [
    // Colores dinámicos usados en Catalogo.js
    'bg-blue-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-teal-100',
    'bg-orange-100',
    'bg-indigo-100',
    'text-blue-400',
    'text-purple-400',
    'text-pink-400',
    'text-teal-400',
    'text-orange-400',
    'text-indigo-400',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-indigo-500',
    'text-blue-500',
    'text-purple-500',
    'text-pink-500',
    'text-teal-500',
    'text-orange-500',
    'text-indigo-500',
  ],
  plugins: [],
}

