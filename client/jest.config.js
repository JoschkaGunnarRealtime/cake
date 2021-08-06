module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
    "moduleFileExtensions": [ "js", "ts", "json", "vue" ],
    transform: {
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    },  
    transformIgnorePatterns: ["node_modules/(?!vue-youtube-embed|vuetify)"],
    setupFiles: ["./tests/setup.js"]
  }