const express = require('express')
const cors = require('cors')
const itemRoutes = require('./routes/items')
const connectionDb = require('./config/connectionDB')

const app = express()
app.use(cors())
app.use(express.json())

connectionDb()

app.use('/api/items', itemRoutes)

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})