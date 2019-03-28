const fs=require('fs');
let student =[{
    name:'abhi',
    age:22,
    gender:'male'
},
 {
     name:'abhi',
     age:22,
     gender:'male'
 },
  employee ={
     name:'shray',
     age:22,
    gender:'male'
}]
let data=JSON.stringify(student);
 // let data1=JSON.stringify(employee);
fs.appendFile('student.json',data ,(err)=>{
    if(err)
        throw err;
    else
        console.log('data written into file')
});
//  fs.writeFile('employee.json',data1,(err)=>{
//     if(err)
//          throw err;
//      else
//          console.log('data written into file')
//  });