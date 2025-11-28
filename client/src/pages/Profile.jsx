import { useEffect, useState } from "react"
import api from  '../api/axiosInstance'
import { useParams } from "react-router-dom"
import  avatar from '../assets/avatar-profile.avif'
const Profile = ()=>{
    const [user, setUser]= useState(null)
    const [error, setError]= useState('')
        const{id} = useParams()
useEffect(
    ()=>{
 api.get(`/user/profile/${id}`)
 .then(
(response)=>{
    setUser(response?.data?.user)
    console.log(response, 'res')
    // console.log(response.data, 'user')
    // console.log(response.data.user, 'user')
    // setError(response.data.message)
}
 )
.catch((err)=>{
console.log(err)

})
    // console.log(err)
//  console.log(user,'user')
//  console.log(user?.email)
//  console.log(user?.name, 'name')
    },[])
return(
    <div className="Profile">
      {
        user && 
        <>
     
        <img src={`${user.profilePic}` || avatar} alt="profile pic" />
      
         {/* onSubmit={handleSubmit} */}
      <form>
        <input type="text" value={user?.name}   />
        <input type="text" value={user?.email} />
        {/* <input type="password" value={} /> */}
      <button type="submit">UPDATE</button>
      </form>
        </>
      }
        <h1>WELCOME to profile page</h1>
    </div>
)
}
export default Profile