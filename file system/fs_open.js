
var fs = require('fs')

// membuat file dengan fungsi fs.open()
var isiData = 'Membuat file dengan fungsi fs.open()'
fs.open('./file_open/data.txt', 'w+', function(err,file){
    if (err) throw err;
    

    // data yang akan ditulis ke file
    var content = "Hello Rafi!"

    // tulis data ke file
    fs.writeFile(file, content, (error) => {
        if (error) {
            throw error
        }else{
            console.log('Tersimpan!')
        }
    })

    // baca data file 
    fs.readFile(file, (error,data) => {
        if (error) {
            throw error
        }else{
            console.log(data.toString('utf8'))
        }
    })
})