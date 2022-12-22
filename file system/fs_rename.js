var fs = require('fs')


// mengganti nama file
fs.rename('./file_rename/user.txt', './file_rename/data.txt', function(error,data){
    if (error) {
        throw error
    }else{
        console.log('File ter-rename!')
    }
})