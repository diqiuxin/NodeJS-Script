#!/usr/bin/env node                               //需要配置~/.bashrc才可生效

console.log("----------in demox.js-----------");  
let fs = require('fs');                           //加载文件模块
let dirName = process.argv[2] || '',              //获取第一个参数 文件夹名称
    pathStr = process.argv[3] || '';              //获取第二个参数 文件夹指定的创建路径
let exit;                                         //demox.js脚本退出变量返回值

let path = process.cwd();                         //获取当前路径（当前执行环境路径），并打印
console.log(`当前执行环境路径：${path}`);

if(dirName == ''){
  console.log('缺失文件夹名，请输入...');           //文件夹名缺失报错
  exit = 1;
}else{                                             
  if(pathStr == ''){                              //打开文件夹指定的创建路径
    process.chdir(path);                          //路径不存在时，使用默认路径（demox.js执行环境路径）
  }else{
    
    process.chdir(pathStr);
  }

  let path_1 = process.cwd();                     //获取文件夹创建路径，并打印
  console.log(`${dirName}文件夹创建路径为:${path_1}`);  

  exit = func(dirName);                           //demo.js的代码 通过func()函数引入
}
console.log("---------out demox.js-----------");
process.exit(exit);                               //脚本退出传参

//demo.js 的改进函数式,主程序会引用到
//此函数功能的说明在 demo.js 中
function func(dirName){
  let exit;
  if(fs.existsSync('./' + dirName)){
    console.log(dirName + '已经存在');
    exit = 1;
  }else{  
    fs.mkdirSync('./' + dirName);
    process.chdir('./'+dirName);
    fs.mkdirSync('css');
    fs.mkdirSync('js');
  
    const html = "<!DOCTYPE><title>Hello</title><h1>Hi</h1>",
          css = "h1{color: red;}",
          js = "var string = 'Hello World';alert(string);";

    fs.writeFileSync('./index.html',html);
    fs.writeFileSync('./css/style.css',css);
    fs.writeFileSync('./js/main.js',js);

    console.log('create $1 dir success :)');
    exit = 0;
  }
  return exit;
}