var express=require('express');
var obj=express();
var logged=function log(req,res,next){
    console.log("Logged");
    next()
}
var ported=function log1(req,res,next){
    console.log("ported");
    //predefined methods
    console.log(req.method)
    console.log(req.originalUrl)
    console.log(Date.now());
    next()
}
obj.use('/admin',ported,function(req,res,next){
    // res.send("hello")
    res.send(req.method)
    // res.send(req.originalUrl)
    // res.send(Date.now());
})
obj.use(logged);
obj.listen(3001);