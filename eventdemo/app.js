const eve =require('events');
//declaration
    const emitter = new eve.EventEmitter();
//register an listener
emitter.on('message',function(msg)
{
    console.log('in event lister',msg);
})
//rising the event
emitter.emit('message',{id:1,name:'abhinav'})
