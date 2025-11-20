const express =require  ("express");
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require("./config/db")

const authRouter  = require("./routes/authRouter")
dotenv.config()

app.use(express.json())

connectDB()

app.use(cors({
    origin :"http://localhost:3000",
    credentials: true,
}))

app.get("/", (req,res)=> {
    console.log('haii')
    res.send(" server is  ready to help you")
}
)

app.use('/auth',authRouter )
const PORT = process.env.PORT

app.listen(PORT, ()=>{console.log(`server is running the port ${PORT} `)})