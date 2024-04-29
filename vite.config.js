import tailwindcss from 'tailwindcss';

export default {
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        // Other PostCSS plugins...
      ],
    },
  },
};