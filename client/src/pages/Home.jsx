import { Link } from "react-router-dom"

const Home = ()=>{
return(
    <div className="home">
        <h1>WELCOME</h1>
        <Link to={'/profile/id'}>profile</Link>
    </div>
)
}
export default Home