import { useState } from "react"
import api from  '../api/axiosInstance'
import { useNavigate, useParams } from "react-router-dom";

const Login = ()=>{

   const [email,SetEmail] = useState('') 
   const [password,SetPassword] = useState('') 
    const navigate = useNavigate()

let id ;
const handleSubmit = async (e) =>{
 e.preventDefault()

//or
const formData = {
    
        email:email,
        password: password
    }
    // console.log(formData)
try{
// console.log(api)
   const response= await api.post("/auth/login",formData )
  
 if( response.data.sucess){
    id = response.data.user._id
  navigate(`/profile/${id}`)
}else{
     alert(response.data.message)
    
 }
}catch(err){
    alert("Login failed")
}
}
    return(
<div className="Login">
<form action="" onSubmit={handleSubmit}>
    <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder="enter your email"/>
    <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder="enter your password" />
    <button type="submit">Login</button>
</form>
</div>
    )
}
export default Login