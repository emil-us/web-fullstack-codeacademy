const express = require('express')
const app = express()

// midlleware for static HTML pages in folder "public"
app.use(express.static("public"))

// for the req.body to work in users.js
app.use(express.urlencoded({ extended: true }))

// which engine to use to render the html file
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);

// declare the middleware "logger"
app.use(logger)

// you can also declare middlewares in a specific router as many as you need
app.get('/', logger, (req, res, next) => {
    // console.log('Here')
    // res.send('Hi')
    // res.status(500).send('Hello')
    // res.status(500).json( {message: "Error"} )
    // res.download('server.js')
    res.render('index', { text: 'World!' })
} )


const userRouter = require('./routes/users')

app.use('/users', userRouter)

// middleware: everything that runs between the beginning of the request and its end
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
