var express = require('express')
var app = express()
var fs = require('fs')


app.get('/', function(request,respon){
    fs.readFile('./express/index.html', function(error, data){
        if (error) {
            respon.writeHead(404);
            respon.write("Halaman tidak ditemukan");
        }else{
            respon.writeHead(200, {'Content-Type': 'text/html'});
            respon.write(data);
        }
        respon.end();
    });
})

   
app.get('/about', function(require, respon){
    fs.readFile('./express/about.html', function(error,data){
        if (error) {
            respon.writeHead(404)
            respon.write("Halaman not found 404!")
        }else{
            respon.writeHead(200, {'Content-Type': 'text/html'})
            respon.write(data)
        }
        respon.end()
    })
})

app.get('/upload', function(request,respon){
    fs.readFile('./upload/form_upload.html', function(err,data){
        if (err) {
            respon.writeHead(404)
            respon.write('Halaman not found 404')
        }else{
            respon.writeHead(200, {'Content-Type': 'text/html'})
            respon.write(data)
        }
        respon.end()
    })
})
    

    


app.listen(8000, function(){
    console.log("Server jalan di http://localhost:8000")
})