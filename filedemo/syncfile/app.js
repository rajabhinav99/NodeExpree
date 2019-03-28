const fs=require('fs');
fs.writeFileSync('input.txt',"Hello Data",function(err){
if(err)
console.log(err);
else
console.log('write operation is completed');
});
//sync operation
var data = fs.readFileSync('input.txt');
console.log("synchronous reading.." +data.toString());
console.log('program end');
