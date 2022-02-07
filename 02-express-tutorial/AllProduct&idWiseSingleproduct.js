const express=require('express')
const app=express()
const {products}=require('./data.js')

app.get('/',(req,res)=>{
res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    const NewProducts=products.map((product)=>{
        const {id,name,image}=product
        return       {id, name ,image}
    })
    res.send(NewProducts)
})
app.get('/api/products/:productId',(req,res)=>{
    // console.log(req.params);
    const {productId}=req.params
    console.log(productId);
    const SingelProduct=products.find((product)=>product.id==Number(productId))
    if (!SingelProduct) {
        res.status(404).send("NotFound")
        
    }
    console.log(SingelProduct);
    res.json(SingelProduct)
})

app.listen(5000,()=>{
     console.log('server lsieting');
})