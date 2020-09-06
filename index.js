var express = require("express")
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var userRoute = require('./routers/user.route')
var authRoute = require('./routers/auth.route')

var authMiddleware = require('./middlewares/auth.middleware')

var app = express()

app.set("view engine", "pug")
app.set("views", "./views")
app.use(express.static('public'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser("faoieurwe234234"))

app.get('/', function (req, res) {
  res.render("index", {
    name: "Chinh",
  } )
})

app.use('/users', authMiddleware.requireAuth,userRoute)
app.use('/auth', authRoute)

app.listen(3000)