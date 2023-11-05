const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: { 
        popup: path.resolve('./src/popup/popup.tsx'),
        options: path.resolve('./src/options/options.tsx'),
        background: path.resolve('./src/background/background.ts'),
        contentScript: path.resolve('./src/contentScript/contentScript.ts'),
        newTab: path.resolve('./src/tabs/newTab.ts'),
        //newTab: path.resolve('./src/tabs/index.tsx')
     },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [ {
            test: /\.tsx/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }, ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [ new CopyPlugin({
        patterns:[ {
            from: path.resolve( 'src/assets' ),
            to: path.resolve('dist')
        }]
    }),
    ...getHtmlPlugins(['popup', 'options', 'newTab'])
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
    
}

function getHtmlPlugins(chunks){
    return chunks.map(chunk => {
        return new HtmlPlugin({
            title: 'React JS Boilerplate extension',
            filename: `${chunk}.html`,
            chunks: [ chunk ]
        }) 
    })
}