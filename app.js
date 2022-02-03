const http=require('http')
const server=http.createServer((req,res)=>{
    if (req.url==='/') {
        res.end('welcome to home page')
    }
    if (req.url==='/about') {
        res.end('welcome to about page')

    }else{
        res.end('wrong end point please go with the right time')
    }
})
server.listen(8000)