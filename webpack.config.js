const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const electronConfiguration = {
  mode: 'development',
  entry: './src/main.ts',
  target: 'electron-main',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }],
    }],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
};

const reactConfiguration = {
  mode: 'development',
  entry: './src/index.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    mainFields: ['main', 'browser'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
  },
  module: {
    rules: [
      /**
       * TypeScript loaders
       */
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }],
      },
      /**
       * TODO
       * This following rule was added because we encountered a webpack error on
       * startup of the electron application. This was a fix identified by
       * Chance, but it is worth re-visiting what exactly this does and breakdown the regex
       * to git our specific use case.
       */
      {
        test: /node_modules[\/\\](iconv-lite)[\/\\].+/,
        resolve: {
          aliasFields: ['main'],
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      /**
       * CSS / Sass Loaders
       */
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = [
  electronConfiguration,
  reactConfiguration,
];
