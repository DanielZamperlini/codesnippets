/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f0ff',
        'cyber-purple': '#8a00fc',
        'cyber-pink': '#ff00a0',
        'cyber-yellow': '#ffbb00',
        'cyber-dark': '#0a0a16',
        'cyber-darker': '#050510',
      },
      boxShadow: {
        'neon-blue': '0 0 5px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 5px rgba(138, 0, 252, 0.5), 0 0 20px rgba(138, 0, 252, 0.3)',
        'neon-pink': '0 0 5px rgba(255, 0, 160, 0.5), 0 0 20px rgba(255, 0, 160, 0.3)',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '20px 20px',
      },
    },
  },
  plugins: [],
};