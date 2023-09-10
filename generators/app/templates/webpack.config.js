/**
 * Minimum webpack Config for WordPress Block Plugin
 *
 * webpack basics — If you are new the webpack here's all you need to know:
 *     1. webpack is a module bundler. It bundles different JS modules together.
 *     2. webpack needs and entry point and an ouput to process file(s) and bundle them.
 *     3. By default webpack only understands JavaScript but Loaders enable webpack to
 *        process more than just JavaScript files.
 *     4. In the file below you will find an entry point, an ouput, and a babel-loader
 *        that tests all .js files excluding the ones in node_modules to process the
 *        modern JavaScript and make it compatible with older browsers i.e. it converts the
 *        code written witten with modern JavaScript (new standards of JavaScript) into old
 *        JavaScript through a Babel loader.
 *
 * Instructions: How to build or develop with this Webpack config:
 *     1. In the command line browse the folder `02-basic-esnext` where
 *        this `webpack.config.js` file is present.
 *     2. Run the `npm run dev` or `npm run build` for development or
 *        production respectively.
 *     3. To read what these NPM Scripts do, read the `package.json` file.
 *
 * @link webpack https://webpack.js.org/
 * @link webpack concepts https://webpack.js.org/concepts/
 * @author Ahmad Awais https://github.com/ahmadawais
 * @since 1.0.0
 */

module.exports = {
    entry: "./block.js", 
    output: {
    path: __dirname,     filename: "block.build.js"   },

              module: {
    rules: [
      {
        test: /\.(js|jsx)$/,         use: { loader: "babel-loader" },         exclude: /(node_modules|bower_components)/       }
    ]
  }
};
