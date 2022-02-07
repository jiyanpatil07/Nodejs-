const express=require('express')
const app=express()

app.get('/',(req,res)=>{
res.json([{name:"jiyan"},{sur:"patil"}])
})

app.listen(5000,()=>{
     console.log('server lsieting');
})