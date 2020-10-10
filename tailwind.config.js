module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        'animate-pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.1 },
          }
        },
        fontFamily: {
          'josefin-sans' : ['Josefin Sans','sans'],
          'cabin': ['Cabin', 'sans'],
        },
    },
  },
  variants: {},
  plugins: [],
}
