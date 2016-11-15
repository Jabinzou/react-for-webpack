/**
 * Created by Administrator on 2016/11/12.
 */
module.exports={
    entry:"./app/index.jsx",
    output:{
        path:"./build/",
        filename:"build.js"
    },
    module:{
        loaders:[
            {
                test:/.css$/,  //配置匹配以css结尾的文件
                loaders:["style","css"], //添加加载器
                exclude:"/node_modules/" //排除对应文件的加载

            }
        ]
    },
    resolve:{
        extensions:['','.js',".css","jsx"]  //自动补全识别后缀意味着模块文件就不需要写对应的文件名
}

}