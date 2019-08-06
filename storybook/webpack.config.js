module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    enforce: 'pre',
    exclude: '/node_modules/',
    loader: require.resolve('eslint-loader'),
    options: {
      eslintPath: require.resolve('eslint'),
      baseConfig: {
        extends: [require.resolve('../.eslintrc')],
      },
    },
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  config.module.rules.push({
    test: /\.stories\.tsx$/,
    exclude: '/node_modules/',
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript', config: '../tsconfig.json' },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
