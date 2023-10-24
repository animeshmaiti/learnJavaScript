const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname ,'./about.html'))
    // res.send('About')
})
app.get('/contact', (req, res) => {
    res.send('Contact')
})
app.get('/map', (req, res) => {
    res.send('')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})