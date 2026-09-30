const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
mode: "production",


entry: "./src/src/scripts/script.js",

output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].bundle.js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true
},

module: {
    rules: [
        {
            test: /\.html$/i,
            loader: "html-loader"
        },
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
            generator: {
                filename: "assets/images/[name][ext]"
            }
        }
    ]
},

plugins: [
    new MiniCssExtractPlugin({
        filename: "styles/[name].bundle.css"
    }),

    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html"
    }),
],

optimization: {
    minimize: true,

    minimizer: [
        "...",

        new ImageMinimizerPlugin({
            generator: [
                {
                    preset: "webp",
                    implementation: ImageMinimizerPlugin.sharpGenerate,
                    options: {
                        encodeOptions: {
                            webp: {
                                quality: 80
                            }
                        }
                    }
                }
            ]
        })
    ]
}


};
