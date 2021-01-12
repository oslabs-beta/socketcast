const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Electron Webpack Configuration
const electronConfiguration = {
  mode: 'development',

  // Electron entry point, first thing run as main process
  entry: './src/main.ts',
  target: 'electron-main',

  //allow us to use @ to refer to relative src folder
  //applied in ts.config

  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    //typescript loader
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }]
  },

  //output electron bundle to temp dist folder as main.js
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  }
}


const reactConfiguration = {
    mode: 'development',

    //react entry point where we apply it to html template 
    //(it's our one and only renderer process)
    entry: './src/index.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',

    //again we use @ to refer to relative src folder
    //applied in ts.config
    resolve: {
      alias: {
        ['@']: path.resolve(__dirname, 'src')
      },
      extensions: ['.tsx', '.ts', '.js'],
    },


    module: {
      rules: [
          //typescript loaders
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        },
        //css+sass loaders
        {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          }
      ]
    },
    
    //export react bundles to temp dist folder (index.js and index.js.map)
    output: {
      path: __dirname + '/dist',
      filename: 'index.js'
    },

    //exports index.html (to hang react app off) to temp dist folder
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }

  //export the webpack configs (could alternatively create config files)
module.exports = [
  electronConfiguration,
  reactConfiguration
];