const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        hero: './src/hero.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
