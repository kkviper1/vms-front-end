const path = require('path');
const { WebpackWarPlugin } = require('webpack-war-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    module: {
       rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(html|css)$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackWarPlugin({
            archiveName: 'archive',
            webInf: './web-inf',
            archiverOptions: {
                zlib: {
                  level: 9
                }
              }
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};