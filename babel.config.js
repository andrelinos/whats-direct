module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'babel-preset-env',
      'babel-preset-react',
      '@lingui/babel-preset-react'
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
