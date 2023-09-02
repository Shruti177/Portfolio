module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#3A4D8F',
        accent: '#132666',
      },
      backgroundImage: {
        site: "url('./assets/2.png')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        // Add a new value for zooming out the image
        '25%': '25%',
      },
    },
  },
  plugins: [],
};
