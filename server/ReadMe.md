step-1
initailize project using  npm init
step-2
add      "dev": "nodemon server.js" in package.json
step-3
libraries
1.express
2. "mongoose"
3.  "nodemon"
4. dotenv
step-4
create file .env
eg: PORT=5000     // (never add gap in b/w)
step-5
app.(express.json())

step-6
config/db.js
connect Db in server.js

step:7
register api
test that api
hashpassword by hash()

step:7
login api
compare(req.body.password, password from db)
const user =  await User.findOne({email:email})

step:7
JWT - JSON WEB TOKEN
