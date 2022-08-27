// middleware is a function which is called whenever -login required routes- are requestion

var jwt=require('jsonwebtoken')
const JWT_SECRET = 'PrashantIsHappy'

const fetchUser=(req,res,next)=>{
// get the user form the JWT token and add it to req object
const token=req.header('auth-token');
if (!token) {
    // status code for access denied is 401
    res.status(401).send({error:"Please authenticate using a ValidToken"});
}

// if token not valid try catch will get executed
try {
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();
    
} catch (error) {
    res.status(401).send({error:"Please authenticate using a ValidToken"} );
    
}

}

module.exports=fetchUser;