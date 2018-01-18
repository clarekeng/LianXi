var fs = require('fs');
fs.readFile('./frames/01.txt','utf8',(error,data)=>{
    if(error) throw error;
    console.log(data);
})