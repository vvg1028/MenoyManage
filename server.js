const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const app = express();

const db = require("./config/keys").mongoURI

//引入users
const users = require("./routes/api/users")
const profiles = require('./routes/api/profiles')
//使用body-parser中间件
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())


mongoose.connect(db).then(() => console.log("MongoDb Connected"))
  .catch(err => console.log(err))


//passport初始化
app.use(passport.initialize())
require("./config/passport")(passport)
// app.get("/", (req, res) => {
//   res.send("hello world")
// })

app.use("/api/users", users)
app.use("/api/profiles", profiles)

const prot = process.env.PROT || 5000;

app.listen(prot, () => {
  console.log(`Server running on port ${prot}`);
})