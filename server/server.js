const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const itemRoutes = require('./routes/items')

const Product = require('./models/Product')
const productData = require('./data/products')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/basic_data_project')
    .then(async () => {
        console.log('MongoDB connected')
        
        const count = await Product.countDocuments()
        if (count === 0) {
            await Product.insertMany(productData)
            console.log('Products seeded');
        }
    })
    .catch(err => console.error(err))

app.use('/api/items', itemRoutes)

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})