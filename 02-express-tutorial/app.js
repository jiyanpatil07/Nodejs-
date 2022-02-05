const http=require('http')
const {readFileSync}=require('fs')
const homePage=readFileSync('../02-express-tutorial/navbar-app/index.html')
const homestyles=readFileSync('../02-express-tutorial/navbar-app/styles.css')

const homeimage=readFileSync('../02-express-tutorial/navbar-app/logo.svg')

const homejs=readFileSync('../02-express-tutorial/navbar-app/browser-app.js')

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
else if (url==='/styles.css') {
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homestyles)
    res.end()
    
}
else if (url==='/logo.svg') {
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeimage)
    res.end()
    
}else if (url==='/browser-app.js') {
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homejs)
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