/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      // Configure your color palette here
      myBlue: '#1b2149',
      myWhite: '#FFFFFF',
      myGreen: '#5DC983',
      myYellow: '#F2AF4C',
      myRed: '#EB5769',
      myPurple: '#7B57DF',
      myLightPurple: '#e9e5f8',
      myVeryLightPurple: '#f9f9fc',
      myQuiteLightPurple: '#f0eefa',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
