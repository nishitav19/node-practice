const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

// Express app
const app = express()

// Connect to Mongodb
const dbURI = 'mongodb+srv://netninja:test1234@node.qnefo.mongodb.net/node?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(3000))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')

// Middleware and static files
app.use(express.static('public'))

app.use(morgan('dev'))

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
     const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ]
    res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' })
})

// 404 Page
app.use((req, res) => {
    res.status(400).render('404', { title: '404' })
})
