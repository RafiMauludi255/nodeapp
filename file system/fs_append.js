var fs = require('fs')

// membuat file dengan fungsi fs.appendFile()
var isiData = 'Hai Rafi Mauludi'
fs.appendFile('./file_append/datauser.txt', isiData, function(error){
    if (error) throw error;
    console.log('Tersimpan!')
})

var isiData2 = 'Belajar Nodejs'
fs.appendFile('./file_append/datauser2.txt', isiData2, function(error){
    if (error) throw error;
    console.log('Tersimpan!')
})