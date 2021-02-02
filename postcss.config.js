const autoprefixerPlugin = require('autoprefixer')({
  browsers: ['last 5 versions']
})
module.exports = {
  plugins: [autoprefixerPlugin]
}