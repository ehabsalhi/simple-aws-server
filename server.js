const express  = require('express')
const app = express()

app.get('/' , (req, res) =>{
  res.status(200).send('Home page')
})
app.get('/about' , (req, res) =>{
  res.status(200).send('about page')
})




app.listen(8080 , () =>{
  console.log('up and runnig on port 4001')
})