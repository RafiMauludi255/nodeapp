var http = require('http')
var fs = require('fs')
var formidable = require('formidable')
var mv = require('mv')



http.createServer(function(request,respon){

    //kirim file upload
    if (request.url === "/" && request.method === "GET"){
        fs.readFile('form_upload.html', (err,data) => {
            respon.writeHead(200, {'Content-Type': 'text/html'})
            if (err) {
                throw err
            }else{
                respon.end(data)
            }
        })
    }

    //upload file
    if (request.url === "/" && request.method === "POST"){

        //membuat objek form dari formidable
        var form = new formidable.IncomingForm()

        //menangani upload file
        form.parse(request, function (err, fields, files) {
            let oldpath = files.filetoupload.path;
            var newpath = __dirname + "/uploads/" + files.filetoupload.name;
            //pindahkan file yang telah di upload
            mv(oldpath, newpath, function (err) {
                if (err) { throw err; }
                console.log('file uploaded successfully');
                return respon.end("file uploaded successfully");
              });
        })
    }
}).listen(8000)
console.log('akses http://localhost:8000')