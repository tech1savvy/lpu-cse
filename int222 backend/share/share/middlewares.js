         // Application Level middlewares

// var exp=require('express')
// var app=new exp()
// var myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     timestamp=Date.now()
//     const date = new Date(timestamp);
//     console.log(date);
//     console.log(req.method)
//     console.log(req.originalUrl)  
//     next()
//     }
// app.use(myLogger)
// function logOriginalUrl (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }
  
//   function logMethod (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   }
  
//   const logStuff = [logOriginalUrl, logMethod]
//   app.get('/user/:id', logStuff, (req, res) => {
//     res.send('User Info')
//   })


// // Express route that requires authentication
// app.get('/profile', (req, res) => {
//     // This route handler will only execute if the user is authenticated
//     res.send('Welcome to your profile!');
// });


// app.get('/profile1', (req, res) => {
//     // This route handler will only execute if the user is authenticated
//     res.send('Welcome to your profile1!');
// });
// app.listen(3000)



                // Third-party middleware
// var connect=require('connect')
// var obj=connect()
// var logger=function log(req,res,next){
// console.log("logged")
// next()
// }
// obj.use('/profile',logger,(req,res,next)=>{
//     res.end("hiii")
// })
// obj.listen(3000)

// var connect = require('connect');
// var app = connect();

// // Logger middleware
// var logger = function log(req, res, next) {
//     console.log("logged");
//     next();
// }

// // Middleware for '/profile' route
// app.use('/profile', function(req, res, next) {
//     console.log("Handling /profile request");
//     res.end('Profile page\n');
// });
// app.use('/admin', function(req, res, next) {
//     console.log("Handling /admin request");
//     res.end('Admin page\n');
// });
// // Middleware for other routes
// app.use(logger);

// // Start the server
// app.listen(3000, function() {
//     console.log('Server is running on port 3000');
// });


// var con=require('connect')
// var obj=con()
// var log=function(req,res,next){
//     console.log("logged")
//     next()
// }
// obj.use('/profile',function(req,res,next){
// console.log("handlining profile page")
// res.end("Profile Page")
// })
// obj.use(log)
// obj.listen(3000);


// var express=require('express')
// var obj=express()
// var log=function logg(req,res,next){
//     console.log("logged")
// }
// obj.use('/profile',function(req,res,next){
//     res.end('profile page')
// })
// obj.use(log)

// // obj.get('/profile1', (req,res)=>{
// //     res.send("Profile1 page")
// // })
// obj.listen(3000)



// const express = require('express')
// const app = express()
// const router = express.Router()

// // a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

// app.use('/profile1', (req, res, next) => {
    
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, (req, res, next) => {
//   console.log('Request Type:', req.method)
//   next()
// })
// app.use('/profile', function(req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     res.end("profile")
//     next()
//   })

// app.use(router)
// app.listen(3000)

var express=require('express')
var obj=express()
var logged=function log(req,res,next){
    console.log("Logged")
    console.log(req.originalUrl)
    console.log(req.method)
    next()
}
obj.use('/admin',logged,function(req,res,next){
    console.log("runnning")
    res.sendStatus(401)

})
obj.use(logged)
obj.listen(3000)



//npm install connect
var connect=require('connect')
var obj=connect()
var logged=function log(req,res,next){
    console.log("Logged")
    console.log(req.originalUrl)
    console.log(req.method)
    next()
}
obj.use('/admin',function(req,res,next){
    console.log("runnning")
    res.end(req.originalUrl)

})
obj.use()
obj.listen(3000)

















var express=require('express')
var obj=express()
var logged=function log(req,res,next){
    console.log("Logged")
    console.log(req.method)
    console.log(Date.now)
    next()
}
obj.use('/admin',lodded,function(req,res,next){
    //res.send("hello")
    res.send(req.method)
})
obj.use(logged)



var express = require('express')
var app = express()
var myLogger = function (req, res, next) {
console.log('LOGGED')
next()
}
var logged = function (req, res, next) {
    console.log('Admin LOGGED')
    next()
    }
app.use(myLogger)
app.use('/admin', logged, function (req, res,next) {
res.send('Hello World!')
})
app.listen(3000)




