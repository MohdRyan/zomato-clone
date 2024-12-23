module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure your Tailwind scans all relevant files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    require('tailwind-scrollbar-hide'), // Add this line
  ],
};
