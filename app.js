
const fs = require('fs');
var http = require('http');

// cara membuat server
// cara pertama

// var server = http.createServer(function (request, respon){
//     respon.end("Hello World!");
// });

// server.listen(8000);
// console.log("server berjalan di http://localhost:8000")

// cara kedua

// http.createServer(function(request,respon){
//     switch (request) {
//         case '/':
//             respon.writeHead(200, {'Content-Type': 'text/html'})
//             respon.write('Halaman Home')
//             break
//         case '/profile':
//             respon.writeHead(200, {'Content-Type': 'text/html'})
//             respon.write('Ini halaman profile')
//             break
//         case '404':
//             respon.writeHead(404, {'Content-Type': 'text/html'})
//             respon.end('404 Not Found ...')
//         default:
//             respon.writeHead(301, {'Content-Type': 'text/html', Location: '/404',})
//             respon.end('Redirect to 404')
//     }
//     respon.end();
// }).listen(8000)



// console.log("server berjalan di http://localhost:8000")


var server = http.createServer(handleRequest)

function handleRequest(request,respon){
    respon.writeHead(200,{'Content-Type': 'text/html'});

    fs.readFile('./index.html', function(error, data){
        if(error){
            respon.writeHead(404);
            respon.write("Halaman tidak ditemukan!")
        }else{
            respon.write(data)
        }
        respon.end();
    });
}

server.listen(8000, function(){
    console.log("Server running at http://localhost:8000")
})

