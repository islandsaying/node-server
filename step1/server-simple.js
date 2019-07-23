var http = require('http')
var fs = require('fs')


var server = http.createServer(function(req, res){
  try{
    var fileContent = fs.readFileSync(__dirname + '/static' + req.url) //根据url读取对应路径文件资源
    res.write(fileContent) //读完不停,直到res.end()
  }catch(e){
    res.writeHead(404, 'not found')
  }
  console.log("_dirname:"+__dirname) //_dirname:C:\Users\Administrator\Desktop\node-server\step1 每请求一个资源便出现一次
  console.log("req.url:"+req.url) //req.url:/index.html 以及请求这个html中所需的资源文件
  res.end()
})

server.listen(8080)
console.log('visit http://localhost:8080' )

/*
- node server-simple.js 
- 用户打开http://localhost:8080
- 在网址末尾加上/index.html,此时req.url:/index.html
- 服务器根据路径寻找文件(__dirname + '/static' + req.url)
- 服务器开始获取对应路径的资源
- 服务器响应并且write
- 结束响应
*/
