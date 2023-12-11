// モジュールのインストールpathを使って次の設定をする
const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.ts',
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        // import文で.tsファイルを解決するため→拡張子を省略できる・
        extensions: ['.ts', '.js']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ→ローカルのサーバーが参照するフォルダ
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true
    },
    module: {
        // ローダーの設定(モジュールに適応するルール)
        rules: [
            {
                // ts-loaderを使ってコンパイルする
                loader: 'ts-loader',
                // 拡張子が.tsのファイルを対象にする
                test: /\.ts$/,
            }
        ]
    }
  };