const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res)=>{
    
    
    if(req.url == "/store"){
        res.writeHead(200, {'Content-type': 'application/json'})
        return res.end(JSON.stringify({qwe:'Qwe'}))
    }else if(req.url == "/"){
        res.writeHead(200, {'Content-type': 'application/json'})
        return res.end(JSON.stringify({aaa:'aaa'}))
    }else{
        res.writeHead(404, {'Content-type': 'text/plain'})
        return res.end('Something went wrong')
    }
    

})

server.listen(port, (error)=>{
    if(error){
        console.log('Something went wrong', error);
    } else{
        console.log('Server is listening on port ' + port);
    }
})