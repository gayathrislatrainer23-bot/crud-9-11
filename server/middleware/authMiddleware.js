const jwt = require("jsonwebtoken");


exports.varifyAuthToken = async (req ,res , next)=>{
    console.log('HAII')
    try{
            console.log('HAII1')
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token =  req.headers.authorization.split("")[1]
    }
    if(!token) {
console.log('no token')
        return req.status(401).json({
        sucess:false,
        message: "Not authorized"
    })
    }

    console.log('HAII2')
const decoded = jwt.verify(token,process.env.jwtsecretcode)
    console.log('HAII3')
console.log('token success')
req.user = decoded;
next();
    }catch(err){

    }

}