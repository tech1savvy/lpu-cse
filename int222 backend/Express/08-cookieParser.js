//npm install cookie-parser
var express =require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/',function(req,res){
    //Cookies that have not been signed
    console.log('Cookies: ',req.cookies)
    //Cookies that have been signed
    console.log('Signed Cookies: ',req.signedCookies);
    res.send('Cookies received Check the console for details.')
})
app.listen(3016);