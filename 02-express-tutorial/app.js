const http=require('http')
const {readFileSync}=require('fs')
const homePage=readFileSync('./index.html')
console.log(homePage);
const server=http.createServer((req,res)=>{
    const url=req.url
    if (url==='/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        console.log(homePage);
        res.end()
        
    }
else if (url==='/about') {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hello welcome to about page</h1>')
    res.end()
    
}
else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
}
})


server.listen(8000,()=>{
    console.log('server starged succuesfully');
})