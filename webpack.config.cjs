// Generated using webpack-cli https://github.com/webpack/webpack-cli
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { VueRouterAutoImports } = require("unplugin-vue-router");
const { unheadVueComposablesImports } = require("@unhead/vue");
const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "/public/index.html",
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: "true",
      __VUE_PROD_DEVTOOLS__: "false",
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
    }),
    require("unplugin-vue-components/webpack").default({}),
    require("unplugin-vue-router/webpack")({}),
    require("unplugin-auto-import/webpack").default({
      imports: [
        "vue",
        VueRouterAutoImports,
        "pinia",
        unheadVueComposablesImports,
      ],
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
