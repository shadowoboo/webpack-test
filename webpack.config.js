const path=require("path");

module.exports={
    entry:"./src/index.js", //進入點
    output:{
        // filename:"main.js",
        filename:"bundle.js",
        path:path.resolve(__dirname, "dist")
    },
    // module是需要安裝的，安裝在 node_module 才能讓自動化工具抓到來源成功引用
    // ex.各種 loader 就要安裝，才能針對檔案解析
    module:{
        rules:[
            //css解析並放進 index.html裡面
            //找到 .css檔
            //先使用 css-loader 載入 .css檔
            //再使用 style-loader 把檔案插入 html檔 的 header區域
            //注意: loader順序不可任意調動。 越先接觸檔案放越下面。
            {
                test:/\.css$/,//正則表達，找出所以css檔
                use:[
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use:[
                    "file-loader",//讀圖片喔
                    {
                        loader: 'image-webpack-loader', //這個loader會壓縮圖片
                        options: {
                            //bypassOnDebug:true, // webpack@1.x //啟用時表示圖片都不做處理(略過)，以利開發人員加快編譯速度。上線時要關掉
                            //disable: true, // webpack@2.x and newer //同bypassOnDebug，但是給 webpack@2.x 以上的新版本使用
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            //優點: 真的可以壓成很小
                            //缺點: firefox打不開 webp格式
                            //所以先不用這個
                            // webp: {
                            //     quality: 75
                            // }
                        },
                    },
                ]
            }
        ]
    }
}