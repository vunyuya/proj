module.exports = (ctx) => ({
    parser: false,
    map: false,
    plugins: {
        'postcss-plugin': ctx.env === 'production' ? {} : false
    }
  })