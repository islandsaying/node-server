

//第二例 
var http = require('http')
var server = http.createServer(function(request, response){
    setTimeout(function(){
      
      
      response.setHeader('Content-Type','text/html; charset=utf-8')
      response.writeHead(404, 'Not Found')
      response.write('<html><head><meta charset="gbk" /></head>')
      response.write('<body>')
      response.write('<h1>你好</h1>')
      response.write('</body>')
      response.write('</html>')
      
      response.end()
    },2000);
  })
  
  console.log('open http://localhost:8080')
  server.listen(8080)


//第一例 终端端输入node index.js启动
// var http = require('http')
// var server = http.createServer(function(req,res){
//     console.log('hello jirengu'); //显示在终端
//     res.setHeader('Content-Type','text/html; charset=gbk')
//     res.write('<h1>hello world</h1>') //按照html格式打印
//     res.end()
// })
// server.listen(9000)
