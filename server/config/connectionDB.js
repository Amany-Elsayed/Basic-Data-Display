const mongoose = require('mongoose')
const Product = require('../models/Product')
const productData = require('../data/products')

const connectionDb = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/basic_data_project')
        console.log('MongoDB connected');
        
        const count = await Product.countDocuments()
        if (count === 0) {
            await Product.insertMany(productData)
            console.log('Products seeded')
        }
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectionDb