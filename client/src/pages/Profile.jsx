import { useEffect, useState } from "react"
import api from  '../api/axiosInstance'
import { useParams } from "react-router-dom"
const Profile = ()=>{
    const [user, setUser]= useState(null)
        const{id} = useParams()
useEffect(
    ()=>{
 api.get(`/user/profile/${id}`)
 .then(
(response)=>{
    setUser(response.data.user)
    console.log(response, 'res')
    console.log(response.data, 'user')
    console.log(response.data.user, 'user')
}
 )
// .catch(err)
    // console.log(err)
 console.log(user,'user')
//  console.log(user?.email)
//  console.log(user?.name, 'name')
    },[])
return(
    <div className="Profile">
        {/* {
            user &&  
            <>
              <p>{user?.name}</p>
              <p>{user?.email}</p>

              <p>{user?.password}</p>
            </>
        }
      */}
      {
        user && 
        <>
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