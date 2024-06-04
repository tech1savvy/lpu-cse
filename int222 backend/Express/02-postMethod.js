var body=require('body-parser');
var exp1=require('express');
var obj1=new exp1();
var encoded = body.urlencoded({extended:false})
obj1.get("/form",(req,res)=>{
    res.sendFile(__dirname+'/formUsingPost.html')
})
obj1.post('/formprocessed',encoded,(req,res)=>{
    res.send({
        firstname:req.body.firstname
    })
})
obj1.listen(7000,()=>{
    console.log("Runnig");
});