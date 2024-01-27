const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const products =require('./data/Products.json')


app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


//get products
app.get('/products', (req,res)=>{
    res.send(products)
})

//get single product
app.get('/product-details/:id', (req,res)=>{
    const product = products.find((p)=>p.id == req.params.id)
    res.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})