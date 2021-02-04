const path = require('path')

var config = {
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

var indexConfig = Object.assign({}, config, {
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'helperJS/bundle.js'
    },
});

module.exports = [
    indexConfig   
];





// module.exports = {
//     entry: {
//         index: ['babel-polyfill','./src/js/index.js'],
//         shop_details: ['babelpolyfill','./src/js/shop-details']
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'helperJS/bundle.js',
//     },
//     devServer: {
//         contentBase: './dist'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: '/node_modules/',
//                 use: {
//                     loader: 'babel-loader'
//                 }            
//             }
//         ]
//     }
// }