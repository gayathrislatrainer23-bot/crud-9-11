 
 const errorHandler = (err,req,res,next) =>{
    if(err){
        res.status(500).json({message:err.message})
    }else{
        console.log("no error")
        next()
    }
}

module.exports = errorHandler;