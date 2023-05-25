const express = require('express')
const app = express()
const cross = require('cross')
app.use(cross())
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get('/api/get',(req,res)=>{
    res.status(200).json({"response":true})
})
app.listen(process.env.PORT || 3000)