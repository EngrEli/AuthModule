// craco.config.js
// Just to comply with fckin eslint =============
const tailwind = require('tailwindcss');
const autopre = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwind,
        autopre,
      ],
    },
  },
};
