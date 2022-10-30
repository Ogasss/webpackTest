const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    devtool:  'inline-source-map',
    devServer:{
      contentBase: './dist',
    },
    mode: 'development',
    module: {
      rules: [
        ...base.module.rules,
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],//引入css
        },
      ],
    },
};

