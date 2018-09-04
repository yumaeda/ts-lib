const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './ts/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new TSLintPlugin(
        {
            files: [ './ts/**/*.ts' ]
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

