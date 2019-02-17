const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
            { test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'), exclude: /node_modules/, use: [ 'babel-loader' ] },
            { test: /\.json$/, use: [ 'json-loader' ] },
            { test: /\.css$/,  use: ['style-loader', 'css-loader', 'resolve-url-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg)$/, use: [ 'url-loader?limit=8192' ] },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['url-loader'] },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['file-loader'] },
            {test: /\.(ogg|mp3|wav|mpe?g)$/i,use: ['file-loader']}
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
        host: 'localhost',
        port: 5000,
        hot: true,
        disableHostCheck: true,
        inline: true,
        historyApiFallback: true,
        contentBase: './',
    },
};
