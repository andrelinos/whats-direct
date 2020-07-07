module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],

    plugins: [
      'syntax-dynamic-import',
      'transform-class-properties'
    ],
    env: {
      'test': {
        'plugins': [
          'dynamic-import-node'
        ]
      }
    }
  }
}
