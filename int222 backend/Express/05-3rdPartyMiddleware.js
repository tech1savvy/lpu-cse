//npm install connect
var connect = require('connect')
var obj = connect();
var logged=function log(req,res,next){
    console.log("Logged");
    console.log(req.method)
    console.log(req.originalUrl)
    console.log(Date.now());
    next()
}
obj.use('/admin',function(req,res,next){
    console.log('running')
    res.end('hello')
})
obj.use(logged)
obj.listen(3005);