const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'application/json'})
    
    if(req.url == "/store"){
        return res.end(JSON.stringify({qwe:'Qwe'}))
    }
    

})

server.listen(port, (error)=>{
    if(error){
        console.log('Something went wrong', error);
    } else{
        console.log('Server is listening on port ' + port);
    }
})