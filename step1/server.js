var http = require('http') //一个创建服务器的模块
var fs = require('fs')     //读写模块
var path = require('path') //可以处理url
var url = require('url')   //解析url得到一些信息

function staticRoot(staticPath, req, res){
  console.log(staticPath)
  
  console.log(req.url)
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)
  
  
  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }
  

  

  var filePath = path.join(staticPath, pathObj.pathname)
  
  // var fileContent = fs.readFileSync(filePath,'binary')
  // res.write(fileContent, 'binary')
  // res.end()
  
  
  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404')
      res.writeHead(404, 'not found')
      res.end('<h1>404 Not Found</h1>')
    }else{
      console.log('ok')
      res.writeHead(200, 'OK')
      res.write(fileContent, 'binary')
      res.end()      
    }
  })
  

}

console.log(path.join(__dirname, 'static'))

var server = http.createServer(function(req, res){
  staticRoot(path.join(__dirname, 'static'), req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080' )
