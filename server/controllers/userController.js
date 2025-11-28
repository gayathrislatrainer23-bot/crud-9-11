const User  = require('../models/userModel')


const getProfile  = async (req,res)=>{
try{
   let user= await User.findById(req.params.id)
   console.log(user)

  res.status(200).json({user})
}catch(err){
console.log(err)
}

}

module.exports ={
getProfile
}