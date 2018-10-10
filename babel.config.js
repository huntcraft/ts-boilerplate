module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];
  const plugins = [
    [
      'react-css-modules',
      {
        filetypes: { '.scss': { syntax: 'postcss-scss' } },
        generateScopedName: '[folder]-[name]-[local]-[hash:base64:5]'
      }
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import'
  ];

  return {
    presets,
    plugins
  };
}