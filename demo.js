#!/usr/bin/env node                                     //需要配置~/.bashrc才可生效

console.log("----------in demo.js-----------");
let fs = require('fs');
let dirName = process.argv[2];
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
console.log("---------out demo.js-----------");

process.exit(exit);