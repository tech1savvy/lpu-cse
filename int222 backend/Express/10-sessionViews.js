const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
app.use(cookieSession({
    name: 'session',
    keys: ['key1','key2'],
    maxAge: 24*60*60*1000, // 24 HOURS 
    resave:true,

}));
app.get('/',(req,res)=>{
    req.session.cookieName = 'cookieValue';
    res.send('Cookie set!');
})
app.get('/get-cookie',(req,res)=>{
    const cookieValue = req.session.cookieName;
    res.send(`Cookie Value: ${cookieValue}`)
})
app.get('/views',function(req,res,next){
    req.session.views=(req.session.views || 0) +1;
    // res.end('Max Age of session: '+req.sessionOptions.maxAge);
    res.send(req.session.views + ' views');
})
app.listen(5500);

