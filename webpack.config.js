const path=require("path");

module.exports={
    // entry:"./src/index.js", //進入點
    entry:{
        //多個進入點，用物件包裝
        app:"./src/index.js",
        print:"./src/print.js"
    },
    output:{
        // filename:"main.js",
        // filename:"bundle.js",
        filename:"[name].bundle.js", //輸出的名字會自行更動
        path:path.resolve(__dirname, "dist")
    },
    // module是需要安裝的，安裝在 node_module 才能讓自動化工具抓到來源成功引用
    // ex.各種 loader 就要安裝，才能針對檔案解析
    // module:{
    //     rules:[
    //         {
    //             //css解析並放進 index.html裡面
    //             //找到 .css檔
    //             //先使用 css-loader 載入 .css檔
    //             //再使用 style-loader 把檔案插入 html檔 的 header區域
    //             //注意: loader順序不可任意調動。 越先接觸檔案放越下面。
    //             test:/\.css$/,//正則表達，找出所以css檔
    //             use:[
    //                 "style-loader",
    //                 "css-loader",
    //             ]
    //         },
    //         {
    //             test: /\.scss$/,
    //             use:[
    //                 "style-loader",
    //                 "css-loader",
    //                 "sass-loader",
    //             ]
    //         },
    //         {
    //             //關於圖片的解析方式，整理如下：
    //             //1. 先壓縮。所以 image-webpack-loader 放在最下面
    //             //2. 如果小於指定大小，轉成 base64 字串塞到前端，讓網頁載入快一點。(url-loader。註:url-loader不只可以讀圖片，舉凡想轉換的 ex:字型 等 都可以轉換。)
    //             //3. 如果大於指定大小，image-webpack-loader 就會用 fallback函數 轉給 file-loader解析。不過 file-loader要記得安裝進 node-module 喔，有相依關係
    //             test: /\.(gif|png|jpe?g|svg)$/i,
    //             use:[
    //                 // "file-loader",//讀圖片喔 //有url-loader時，不需要再編寫 file-loader ，以免異常
    //                 {
    //                     loader: 'url-loader',
    //                     options: {
    //                         limit: 8192, //數字格式。檔案小於 此Byte則會轉換為 base64字串，其他則會call "file-loader"繼續執行
    //                         // limit: 1, //數字格式。檔案小於 此Byte則會轉換為 base64字串，其他則會call "file-loader"繼續執行
    //                         name: 'images/[name]-[hash:8].[ext]', //目的地資料夾。[name]-[hash:8]: 名字-hash前8碼，避免同名圖片打包時被覆蓋。不做此設定則不建立路徑
    //                     }
    //                 },
    //                 {
    //                     loader: 'image-webpack-loader', //這個loader會壓縮圖片
    //                     options: {
    //                         //bypassOnDebug:true, // webpack@1.x //啟用時表示圖片都不做處理(略過)，以利開發人員加快編譯速度。上線時要關掉
    //                         //disable: true, // webpack@2.x and newer //同bypassOnDebug，但是給 webpack@2.x 以上的新版本使用
    //                         mozjpeg: {
    //                             progressive: true,
    //                             quality: 65
    //                         },
    //                         // optipng.enabled: false will disable optipng
    //                         optipng: {
    //                             enabled: false,
    //                         },
    //                         pngquant: {
    //                             quality: '65-90',
    //                             speed: 4
    //                         },
    //                         gifsicle: {
    //                             interlaced: false,
    //                         },
    //                         // the webp option will enable WEBP
    //                         //優點: 真的可以壓成很小
    //                         //缺點: 稍微舊一點的瀏覽器打不開 webp格式，支援性不太好
    //                         webp: {
    //                             quality: 75
    //                         }
    //                     },
    //                 },
    //             ]
    //         },
    //         {
    //             test:/\.(woff|woff2|eot|ttf|otf)$/,
    //             use:[
    //                 {
    //                     loader: 'url-loader',
    //                     options: {
    //                         limit: 8192, //數字格式。檔案小於 此Byte則會轉換為 base64字串，其他則會call "file-loader"繼續執行
    //                         // limit: 1, //數字格式。檔案小於 此Byte則會轉換為 base64字串，其他則會call "file-loader"繼續執行
    //                         name: 'font/[name]-[hash:8].[ext]', //目的地資料夾。[name]-[hash:8]: 名字-hash前8碼，避免同名圖片打包時被覆蓋。不做此設定則不建立路徑
    //                     }
    //                 },
    //             ]
    //         },
    //         {
    //             test:/\.(csv|tsv)$/,
    //             use:[
    //                 "csv-loader"
    //             ]
    //         },
    //         {
    //             test:/\.xml$/, //把吃到的xml轉成物件
    //             use:[
    //                 "xml-loader"
    //             ]
    //         }
    //     ]
    // }
}