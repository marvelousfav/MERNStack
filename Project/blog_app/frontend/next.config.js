const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([
  [withCSS, {
    cssModules: true,
  }],
], {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped'
          }
        },
        'css-loader',
        'postcss-loader',
      ],
    });

    return config;
  }
});

