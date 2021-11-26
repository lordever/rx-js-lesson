const express = require('express')
const app = express()
const port = 3000

app.get('/products', (req, res) => {
  const products = [
    {"id": 1, "name": "Apple Watch", "price": "3200"},
    {"id": 2, "name": "Apple Iphone 5", "price": "12000"},
    {"id": 3, "name": "Samsung S10", "price": "15000"},
    {"id": 4, "name": "Sony E20", "price": "14000"},
    {"id": 5, "name": "Pioner S20", "price": "5000"},
    {"id": 6, "name": "Poco X3", "price": "18000"},
    {"id": 7, "name": "Vivo V20", "price": "30200"},
    {"id": 8, "name": "Apple Iphone 6", "price": "31200"},
    {"id": 9, "name": "Sony T20", "price": "16000"},
    {"id": 10, "name": "Xiaomi Redmi 9A", "price": "17300"},
  ]
  res.send(products);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
