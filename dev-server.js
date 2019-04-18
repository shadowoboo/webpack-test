//透過 webpack-dev-server 時
//利用 此檔案 調整 webpack-dev-server 設定
//從 node.js 的 api 呼叫 webpack-dev-server 的功能
//設定時不要在 webpack.config內設定
//另外包一包物件比較好
//格式像這樣： new WebpackDevServer(compiler, options)

const webpackDevServer=require("webpack-dev-server");
const webpack=require("webpack");

const config=require("./webpack.config");
const options={
    contentBase:"./dist", //目標資料夾
    hot:true, //啟動 HMR
    host:"localhost",
};

webpackDevServer.addDevServerEntrypoints(config,options); //增加進入點。執行完此行才吃到 webpack.config
const compiler = webpack(config); //設定編譯路徑
const server = new webpackDevServer(compiler,options); //new 一個 server

server.listen(5000,"localhost",()=>{
    console.log(`----- dev server listening on port 5000 ------`);
    
})
