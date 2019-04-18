//利用 express 建立伺服器
//使用 webpack-dev-middleware 串接專案到 server

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware=require("webpack-dev-middleware");

const app=express();
const config=require("./webpack.config");
const compiler=webpack(config);

//告訴 express 使用 webpack-dev-middleware 跟 webpack.config 做基礎設定
app.use(webpackDevMiddleware(compiler, { //express 編譯設定使用webpack.config
    publicPath:config.output.publicPath //輸出點設定
}));

app.listen(3000,function(){
    console.log(`Example app listening on port 3000! \n`);
    
})