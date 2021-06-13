const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development", // "production" | "development" | "none"

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        index: "./src/ts/index.ts",
        music: "./src/ts/music.ts",
        links: "./src/ts/links.ts"
    },

    output: {
        path: path.join(__dirname, "built/js"),
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.ttf|\.woff2?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.png/,
                use: "url-loader",
            }
        ],
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        modules: [
            "node_modules", // node_modules 内も対象とする
        ],
        extensions: [
            ".ts",
            ".js", // node_modulesのライブラリ読み込みに必要
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/static", to: ".." }, //パス起点は`built/js` ・・・何で？
            ],
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'built'),
        writeToDisk: true
    }
};
