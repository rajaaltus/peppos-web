/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'peppos': {
          50: '#F5FAF5',
          100: '#EBF6EB',
          200: '#CCE8CD',
          300: '#ADDAAF',
          400: '#70BF73',
          500: '#32A337',
          600: '#2D9332',
          700: '#1E6221',
          800: '#174919',
          900: '#0F3111',
          },
      },
    }
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: false,
    purgeLayersByDefault: false
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    layers: ['utilities'],
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
