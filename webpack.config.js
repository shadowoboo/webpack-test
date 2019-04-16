const path=require("path");

module.exports={
    entry:"./src/index.js", //進入點
    output:{
        // filename:"main.js",
        filename:"bundle.js",
        path:path.resolve(__dirname, "dist")
    },
    // module是需要安裝的，安裝在 node_module 才能讓自動化工具抓到來源成功引用
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
            }
        ]
    }
}