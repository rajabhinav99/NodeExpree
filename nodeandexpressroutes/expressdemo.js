const express = require('express');
const app=express();
app.get('/',function(req,res){
    res.send('This is root path');
});
app.get('/home',function(req,res){
    res.send('homepage');
});
app.get('/home/1',function(req,res){
    res.send('setpage');
});

app.listen(1000,function()
{
    console.log('server is running on port 1000');
});