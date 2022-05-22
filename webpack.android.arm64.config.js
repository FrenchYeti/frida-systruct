const path = require('path');

module.exports = {
    entry: './dist/android-arm64.js',
    // devtool: 'inline-source-map',
    target: 'node',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'android-arm64-structs.min.js',
        library: {
            type: 'commonjs'
        }
    },
};