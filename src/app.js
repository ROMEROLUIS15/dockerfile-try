const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3700

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT)
console.log('Welcome to Docker')

app.get('/', (req,res) => {
    res.json('My first repository in Docker')
})