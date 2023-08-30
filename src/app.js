const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 4000

const basepath = path.join(__dirname, '../public')

app.use(express.static(basepath))

app.listen(port, () => {
    console.log('server started on port ' + port)
})
