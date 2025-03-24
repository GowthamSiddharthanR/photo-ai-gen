const config = {
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 3s ease infinite', // Defines the animation
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%', // Custom size for smooth animation
      },
    },
  },
    plugins: {
      "@tailwindcss/postcss": {},
    },
  };
  export default config;