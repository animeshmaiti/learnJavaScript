const express = require('express')
const path = require('path')
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
const { mergePdfs } = require('./merger')
const app = express()
const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
    const d=await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:3000/static/data/merged/${d}.pdf`)

    // console.log(req.files)
    // res.send({ data: req.files })
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})