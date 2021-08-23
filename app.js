const express = require('express')
const app = express()
const port = 3000
const request = require('request') 
 const path = require('path')


 const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

app.set('view engine', 'hbs');


app.get('',(req,res)=>{
   const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=3d2219dbead446df9148519015aa48a2'
  request({ url, json: true}, (error, response) =>{
    if (error) {
      return res.send('Unable to connect to news server, undefind')
    
    }else if (response.body.message){
      return res.send('Unathorized', undefind)
    }else if (response.body.articales.length == 0){
      return res.send ('Unable to find category, try again, undefind')
    } else{
      data = response.body.articles
      res.render('index', { data: data})
    }
  })
})

app.listen(port, () => {
  console.log('Server is running')
})