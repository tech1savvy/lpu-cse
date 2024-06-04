//npm install cookie-session
const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
app.use(cookieSession({
    name: 'session',
    keys: ['key1','key2'],
    maxAge: 24*60*60*1000 // 24 HOURS 
}));
app.get('/',(req,res)=>{
    req.session.cookieName = 'cookieValue';
    res.send('Cookie set!');
})
app.get('/get-cookie',(req,res)=>{
    const cookieValue = req.session.cookieName;
    res.send(`cookie Value: ${cookieValue}`)
})
app.listen(5500);