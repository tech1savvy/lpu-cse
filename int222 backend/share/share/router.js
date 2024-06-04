const express = require('express')
const app = express()
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
router.use('/profile', function(req, res, next) {
    console.log('Request URL:', req.originalUrl)
    res.end("profile")
    next()
  })
app.use(router)
app.listen(3000)


// error-level middleware

const exp=require('express')
var app=new exp()
app.get('/', function(req, res){
   var err = new Error("Something went wrong");
   next(err);
 });
app.use(function(err, req, res, next) {
    res.status(500);
    res.send("Oops, something went wrong.")
 });
app.listen(3000)