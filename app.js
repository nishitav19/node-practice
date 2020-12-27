const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const blogRoutes = require('./routes/blogRoutes')

// Express app
const app = express()

// Connect to Mongodb
const dbURI = 'mongodb+srv://netninja:test1234@node.qnefo.mongodb.net/node?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(8080))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')

// Middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about the new blog',
//         body: 'more about it'
//     })

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

// Blog routes
app.use(blogRoutes)

// 404 Page
app.use((req, res) => {
    res.status(400).render('404', { title: '404' })
})
