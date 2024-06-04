var exp = require('express');
var obj = new exp();
//127.0.0.1:8000/
obj.get('/',(req,res)=>{
    res.send("This is Home Page");
})
//127.0.0.1:8000/about
obj.get('/about',(req,res)=>{
    res.send("This is About page");
})
//127.0.0.1:8000/contact
obj.get('/contact',(req,res)=>{
    res.send("This is Contact page");
})
//127.0.0.1:8000/temp
obj.get('/temp',(req,res)=>{   //Using Html element(tags);
    res.send("<h1>Hii I am Using H1 Tag</h1>");
})
//passing json data 
//127.0.0.1:8000/json
obj.get('/json',(req,res)=>{ 
    res.send({
        fname:'Aakash',
        lname:'Kumar'
    });
})
//Passing array of objects
//127.0.0.1:8000/objectsArray
obj.get('/objectsArray',(req,res)=>{  
    res.send(
        [{name:'Aakash',section:'K22ND',roll:10},{name:"Aditya",section:"K22ND",roll:11,mob:null}]
    );
})
//Passing Form USING GET
//This is the thing which will be used in project
//127.0.0.1:8000/form
obj.get('/form',(req,res)=>
    {
        res.sendFile(__dirname+'/'+'formUsingGet.html')
    }
)
// obj.get('/formprocessed',(req,res)=>{
//     res.send({
//         first_name:req.query.first_name,
//         last_name:req.query.last_name,
//         age:req.query.age,
//         select:req.query.select
//     })
// })

//Another method
obj.get('/formprocessed',(req,res)=>{
    res.send(
        '<p>Firstname: '+req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>'
        
    )
})

obj.listen(8000,()=>{
    console.log("Runnig");
});