const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';
const indexPath = 'index.js';
const deleteIndex = () => {
    try {
        fs.unlinkSync(indexPath);
        console.log("--index.js erased");
    } catch (err) {
        console.log("--no index.js to erase");
    }
};

const mainPath = './dist/transpiled/main.js';
const deleteMain = () => {
    try {
        fs.unlinkSync(mainPath);
        console.log("--main.js erased");
    } catch (err) {
        console.log("--no main.js to erase");
    }
};


const serverConfig = {
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new EventHooksPlugin({
            'beforeRun': (compilation, done) => {
                deleteIndex();
            }
        }),
        new HardSourceWebpackPlugin()
    ],
    name: "server",
    entry: ["@babel/polyfill", path.resolve(__dirname, './src/server/pockey-server-index')],
    target: 'node',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, ''),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [{test: /\.(ts|js)x?$/, loader: 'babel-loader?cacheDirectory', exclude: /node_modules/}],
    },

    externals: [nodeExternals()]
};


let clientConfig = {

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new EventHooksPlugin({
            'beforeRun': (compilation, done) => {
                deleteMain();
            }
        }),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        new HardSourceWebpackPlugin()
    ],
    name: "client",
    entry: path.resolve(__dirname, './src/client/pockey-entry-point'),
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist/transpiled/'),
        publicPath: ASSET_PATH
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }],
    },
};

// const exports =


module.exports = [serverConfig, clientConfig];
