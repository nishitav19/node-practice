const express = require('express')

// Express app
const app = express()

app.set('view engine', 'ejs')

// Listen for requests
app.listen(3000)

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.render('index', { title: 'Home' })
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
