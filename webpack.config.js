// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  target: ["web", "es5"],
  stats: { children: true },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
      {
        // la regla para procesar archivos
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};

// // webpack.config.js
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
//   devtool: "inline-source-map",
//   entry: {
//     main: "./src/index.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "main.js",
//     publicPath: "",
//   },
//   target: ["web", "es5"], // asegúrate de que el código glue de Webpack sea también compatible con ES5
//   mode: "development",
//   devServer: {
//     static: path.resolve(__dirname, "./dist"),
//     compress: true,
//     port: 8080,
//     open: true,
//     stats: "errors-only",
//     stats: { children: true },
//     devtool: "inline-source-map",
//     entry: {
//       main: "./src/index.js",
//     },
//   },
//   module: {
//     rules: [
//       // esto es un array de reglas
//       // añádele un objeto que contenga reglas para Babel
//       {
//         // una expresión regular que busca todos los archivos js
//         test: /\.js$/,
//         loader: "babel-loader",
//         // excluye la carpeta node_modules, no necesitamos procesar archivos en ella
//         exclude: "/node_modules/",
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html", // ruta a nuestro archivo index.html
//     }),
//     new CleanWebpackPlugin(),
//   ],
// };
