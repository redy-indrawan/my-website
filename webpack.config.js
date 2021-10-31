const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = "development";
let target = "web";

// if (process.env.NODE_ENV === "production") {
//     mode = "production";
//     target = "browserslist";
// }

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: mode,
    // mode: isDevelopment ? 'development' : 'production',
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
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options:  {publicPath: ""},
                    // },
                    // "css-loader"
                    // {
                    //     loader: "style-loader"
                    // },
                    "style-loader", "css-loader"
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                // use: {
                //     loader: require.resolve('babel-loader'),
                //     options: {
                //      plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                //     },
                // }
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
            favicon: "./src/assets/images/logo.png"
        }),
        new ReactRefreshWebpackPlugin(),
        // [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean)
    ],

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true,
    }
}