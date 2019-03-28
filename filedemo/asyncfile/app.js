const fsobj = require('fs');
fsobj.readFile('input.txt',function (err,data) {
        if (err) {
            console.log("problem in reading the file");
        }
        else {
            console.log('reading');
        }
});
console.log('program ended');