/**
 * Created by Administrator on 2016/11/12.
 */
var str = require('./app');
// require('style!css!./style/index1.css');
//需要css模块加载器style!css!就是在npm下载对应的加载器后 加载器的应用
require('./style/index1');
//这是在添加webpack.config.js 后就是给webpack添加了配置，就不用在写加载器了
document.body.innerHTML="<div>"+str+"</div>";
//ADM写法

/*
define(['./app.js'],function(str){
    document.body.innerHTML="<div>"+str+"</div>";
})*/
//CMD写法