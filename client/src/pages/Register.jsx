import { useState } from "react"
import axios from "axios";
const Register = ()=>{
   const [name,SetName] = useState('') 
   const [email,SetEmail] = useState('') 
   const [password,SetPassword] = useState('') 
const handleSubmit = async (e) =>{
 e.preventDefault()
//   const formData = new FormData();
// formData.append("name", name)
// formData.append("email", email)
// formData.append("password", password)
//or
const formData = {
        name :name,
        email:email,
        password: password
    }
    console.log(formData)
try{

   const response= await axios.post ("http://localhost:5000/auth/register",formData )
  
 if( response.data.sucess){
    alert(response.data.message)
}else{
     alert(response.data.message)
    
 }
}catch(err){
    alert("registration failed")
}
}
    return(
<div className="register">

<form action="" onSubmit={handleSubmit}>
    <input type="text"  value={name} onChange={(e)=>SetName(e.target.value)} placeholder="enter your name"/>
    <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder="enter your email"/>
    <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder="enter your password" />
    <button type="submit">submit</button>

</form>
</div>
    )
}
export default Register