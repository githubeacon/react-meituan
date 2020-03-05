const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const srcRoot = path.resolve(__dirname,'src');
const devDir = path.resolve(__dirname,'dev');
const pageDir = path.resolve(srcRoot,'page');
const htmlWebpackPlugin = require('html-webpack-plugin');
const mainFileName = 'index.js';
function getEntry(){
    let entryMap = {};
    fs.readdirSync(pageDir).forEach((pathname)=>{
        let fullPathName = path.resolve(pageDir,pathname);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName,mainFileName);
        if(stat.isDirectory && fs.existsSync(fileName)){
            entryMap[pathname] = fileName
        }
    })
    return entryMap;
}
function getHtmlArray(entryMap){
    let htmlArray = [];
    Object.keys(entryMap).forEach((key)=>{
        let dir = path.resolve(pageDir,key);
        let fileName = path.resolve(dir,key + ".html");
        if(fs.existsSync(fileName)){
            htmlArray.push(new htmlWebpackPlugin({
                filename:key+".html",
                template:fileName,
                chunks:[key]
            }));
        }
    })
    return htmlArray;
}
const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);
module.exports = {
    mode : 'development',
    devServer : {
        contentBase : devDir,
        hot:true
    },
    entry : entryMap,
    output : {
        path : devDir,
        filename: '[name].min.js' 
    },
    module : {
        rules:[
            {test: /\.(js|jsx)$/,use:[{loader:'babel-loader'},{
                loader:'eslint-loader'
            }],include:srcRoot},
            {test:/\.css$/,use:['style-loader','css-loader'],include:srcRoot},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader',{
                loader:'sass-resources-loader',
                options:{
                    resources:srcRoot + '/component/common.scss'
                }
            }],include:srcRoot},
            {test:/\.(png|jpg|jpeg)$/,use:'url-loader?limit=8192',include:srcRoot}
        ]
    },
    plugins:[
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin()
    ].concat(htmlArray)
}