const { error } = require('console');
const fs = require ('fs');



try{
    fs.readFile('path/to/File_1.txt', 'utf8' , (err, data) => {
        if (err) throws = err;
    console.log(data);
    if (data == null)
    {
        throw ( )=>  error("Error"); /* */
    }

    });

    



    
}

catch (err){
    console.error('Day la', err);
    
}



console.log('End of File');
