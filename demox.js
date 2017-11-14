#!/usr/bin/env node                                     //需要配置~/.bashrc才可生效

console.log("----------in demox.js-----------");
let fs = require('fs');
let dirName = process.argv[2] || '',
    pathStr = process.argv[3] || '';
    console.log(pathStr+'---------------');
let exit;
//-----------
let path = process.cwd();
console.log(`当前执行环境路径：${path}`);

if(dirName == ''){
  console.log('缺失文件夹名，请输入...');
  exit = 1;
}else{  
  if(pathStr == ''){
    let temp = process.cwd('~/Desktop');
    console.log(temp);
    // process.chdir(temp);
  }else{
    
    process.chdir(pathStr);
  }

  let path_1 = process.cwd();
  console.log(`${dirName}文件夹创建路径为:${path_1}`);

  exit = func(dirName);
}
console.log("---------out demox.js-----------");
process.exit(exit);

//demo.js 的改进函数式,主程序会引用到
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