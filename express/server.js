var express = require('express')
var handle = express()
var fs = require('fs')

handle.get('/', function(request, respon){
    respon.writeHead(200, {'content-type': 'text/html'});
    fs.readFile('./index.html', function(error, data){
        if (error) {
            respon.writeHead(404);
            respon.write("Halaman tidak ada!");
        }else{
            respon.write(data)
        }
        respon.end();
    });
});

handle.get('/about', function(request,respon){
    respon.writeHead(200, {'content-type': 'text/html'});
    fs.readFile('./about.html', function(error, data){
        if (error) {
            respon.writeHead(404);
            respon.write("Halaman tidak ada!");
        }else{
            respon.write(data)
        }
        respon.end();
    });
});


handle.listen(8000);
console.log("Server http://localhost:8000")