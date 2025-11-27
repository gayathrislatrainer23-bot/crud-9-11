const User  = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const register =  async (req,res,next)=>{

  console.log(req.body)
    const {name,email,password} = req.body
    try{
  const existingUser=  await User.findOne({email:email})
  console.log(existingUser)
  if(existingUser){
         res.status(400).json({
          message:"you are already exist as user"
         })
  }
const hashed = await bcrypt.hash(password,10)
console.log(hashed)
const  user = await User.create({name,email,password:hashed});
const token = await jwt.sign({email:email},process.env.jwtsecretcode,{
  expiresIn: "2h"
})
res.status(201).json({
  sucess:true,
  message:"Registration sucess",
  token
})
}catch(err){
  console.log(err)
// next(err)
}


}

const login = async (req,res, next)=>{
  const {email,password} =req.body;

  try{
     const user =  await User.findOne({email:email})
  if(!user){
         res.status(400).json({
          message:"you are not a user, pls register"
         })
  }
  console.log(user)
  console.log(user.password, "p")
  const match  = await bcrypt.compare(password,user.password)
  if(!match) res.status(400).json({message: " password invalid"})
    const token = await jwt.sign({email:email},process.env.jwtsecretcode,{
  expiresIn: "2h"
})
    res.status(201).json(
  {
    sucess: true,
    message:"Login sucess",
    user,
    token
  }
  )
  }catch(err){
  console.log(err)
  }
}


module.exports ={
    register,
    login
}