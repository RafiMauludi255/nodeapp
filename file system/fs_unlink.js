var fs = require('fs')


// menghapus file
fs.unlink('./file_unlink/data.txt', function(error){
    if (error) {
        throw error
    }else{
        console.log('Data terhapus!')
    }
})