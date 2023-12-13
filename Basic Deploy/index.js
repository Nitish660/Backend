require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello wolrd!')
})

app.get('/twitter',(req,res)=>{
    res.send('nitish660')
})

app.get('/login',(req,res) =>{
    res.send('please login')
})

app.listen(process.env.PORT,()=> {
    console.log(`Example app listening on port ${port}`)
})
