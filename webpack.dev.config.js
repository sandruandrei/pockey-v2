const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

const devOptions = {
    mode: 'development',
    devtool: 'inline-source-map'
};

module.exports = merge.multiple(common, [devOptions, devOptions]);