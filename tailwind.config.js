export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
        accent: '#FBBF24',
        neutral: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};