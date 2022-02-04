const EventEmitter=require('events')
const CustomEvent=new EventEmitter()
CustomEvent.on('response',(name,id)=>{
    console.log(`data received, ${name} , ${id}`);
})
CustomEvent.on('response',()=>{
    console.log("data received");
})
CustomEvent.emit('response','jihn',90)
CustomEvent.emit('response')