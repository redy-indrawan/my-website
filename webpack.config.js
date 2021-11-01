
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { loader } = require("mini-css-extract-plugin");

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
                test: /\.(gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(png|jpe?g|)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                    {
                        loader: "webp-loader",
                        options: {
                            quality: 13
                        }
                    }
                ]
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