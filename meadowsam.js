// Author: Ehtane Brown P60

const express = require('express')
const expressHandlebars = require('express-handlebars')
const app=express()
const port = process.env.PORT || 3000

// HandleBar view Engine
app.engine('handlebars',expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=> {
    // res.type('text/plain')
    // res.send('Hello Meadowsam Travel')
    res.render('home')
})

app.get('/about',(req,res) =>res.render('about'))


// app.get('/about',(req,res)=>{
//     res.type('text/html')
//     res.send('<h1>About Meadowsam Travel</h1>')
// })

// custom 404 page
app.use((req,res)=>{
    // res.type('text/plain')
    // res.status(404)
    // res.send('404 Not found :(')

    res.status(404)
    res.render('404')
})

// custom 500 page 
app.use((err, req, res, next)=>{  // number of arguments matter!
    console.error(err.message)
    res.status(500)
    res.render('500!')
})

app.listen(port, () =>console.log(
    `Listening Port ${port}`
))