
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = "development";
let target = "web";

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: mode,
    target: target,

    output: {
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true, 
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader", "css-loader"
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                    }
                }
                ]
            }
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/images/redy-2-color-circle.png"
        }),
        new ReactRefreshWebpackPlugin(),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest',
        //     minChunks: Infinity
        // })
    ],

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true,
    }
}