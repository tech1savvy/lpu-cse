const exp=require('express');
var app=new exp();
app.get('/',function(req,res){
    var err=new Error("Something went wrong");
    next(err);
});
app.use(function(err,req,res,next){
    res.status(500);
    res.send("OOPS, Something went wrong")
});
app.listen(3008);