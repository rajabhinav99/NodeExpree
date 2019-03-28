var mongodb=require('mongodb');
var mongoclient1=mongodb.MongoClient;
var url='mongodb://localhost:27017/mobile';
mongoclient1.connect(url,function(err,client){
if(err){
console.log(err);
}else{
console.log('Connection establish....'+url);
var db=client.db('mobile');
var collection=db.collection('mobiledata');
// var mobone={mobid:1003,mobname:'Motolora',mobcost:44000};
// var mobtwo={mobid:1005,mobname:'Mi',mobcost:12000};
var mobthree={mobid:1011,mobname:'nokia',mobcost:23000};
var mobfour={mobid:1012,mobname:'samsung',mobcost:45000};
collection.insert([mobthree,mobfour],function(err,res){
if(err){
console.log(err);
}else{
console.log('Number of rows inserted ',res);
}
client.close();
});
}
});