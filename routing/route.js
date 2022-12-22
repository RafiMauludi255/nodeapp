var fs = require('fs')
var url = require('url')


function renderFile(fileName,respon){
    respon.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile(fileName, function(error, data){
        if (error) {
            respon.writeHead(404);
            respon.write("Halaman tidak ditemukan");
        }else{
            respon.write(data);
        }
        respon.end();
    });

    
}

module.exports = {
    handleRequest : function(request,respon) {
        respon.writeHead(200, {'Content-Type': 'text/html'});
        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
                renderFile('./index.html', respon);
                break;
            case '/about':
                renderFile('./about.html', respon);
                break;
            default:
        }
    }
}