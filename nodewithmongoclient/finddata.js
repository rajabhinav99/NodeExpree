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

collection.findOne({},function(err,res){
if(err){
console.log(err);
}else{
console.log('Number of rows inserted ',res);
}
client.close();
});
}
});