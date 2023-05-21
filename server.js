const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.json({message: "Hello"})
})


app.listen(PORT)