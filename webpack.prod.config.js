const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

const prodOptions = {
    mode: 'production'
};

module.exports = merge.multiple(common, [prodOptions, prodOptions]);