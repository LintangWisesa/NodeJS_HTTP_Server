var http = require('http');
var fs = require('fs');
var os = require('os')
var welcome = fs.readFileSync('./welcomePage.html')
var error = fs.readFileSync('./errorPage.html');

var server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.end(welcome);
    } 
    
    else if (req.url === '/data'){
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        var orang = [
            {nama:'Andi', usia: 22},
            {nama:'Budi', usia: 23},
            {nama:'Caca', usia: 24},
            {nama:'Deni', usia: 25}
        ]
        res.end(JSON.stringify(orang))
    }
    
    else if (req.url === '/cpu'){
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        res.end(JSON.stringify(os.cpus()))
    }
    
    else if (req.url === '/ram'){
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        var dataRam = {
            totalRam: os.totalmem(),
            sisaRam: os.freemem()
        }
        res.end(JSON.stringify(dataRam))
    }
   
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.end(error)
    }
})

server.listen(3210, ()=>{
    console.log('Server run @port 3210');
})