module.exports = {
    entry: {
        main: './src/js/index.js',
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: './'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            ['@babel/preset-env', { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

};