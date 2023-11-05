const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

function getSrcAndFoldersPath(folderName = "") {
	let srcPath = "./src";

	if (folderName.length > 0) {
		// Using path.join for preserving cross-platform
		// Please don't use normal string paths to avoid slash errors
		srcPath = path.join(srcPath, folderName);
	}

	return path.resolve(srcPath);
}

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[name]__[local]___[hash:base64:5]"
							}
						}
					},
					"postcss-loader"
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
							name: "images/[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "svgo-loader",
						options: {
							plugins: [
								{ removeTitle: true },
								{ convertColors: { shorthex: false } },
								{ convertPathData: false }
							]
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|ttf)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "fonts/"
					}
				}
			}
		]
	},
	plugins: [
		new ESLintPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
		})
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		port: 3000,
		open: true
	},
	resolve: {
		extensions: [".js"],
		alias: {
			"@components": getSrcAndFoldersPath("components")
		}
	},
	devtool: "source-map"
};
