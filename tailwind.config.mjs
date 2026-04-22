/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        charcoal: '#111111',
        brand: {
          50:  '#f1faea',
          100: '#e1f3d3',
          200: '#c4e7a7',
          300: '#9fd772',
          400: '#7cc649',
          500: '#5fb02e',
          600: '#4a9422',
          700: '#3a761e',
          800: '#305e1c',
          900: '#294e1a',
        },
        teal: {
          900: '#1e4d44',
          800: '#245b51',
          700: '#2a6a5f',
        },
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(15, 23, 42, 0.15)',
        'card-hover': '0 20px 45px -15px rgba(15, 23, 42, 0.25)',
        'brand': '0 10px 30px -10px rgba(74, 148, 34, 0.45)',
      },
    },
  },
  plugins: [],
};
