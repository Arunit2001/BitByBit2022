require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors')

//Importing Controllers
const adminloginController = require('./src/Admin/Controller/LoginController')
const adminController = require('./src/Admin/Controller/AdminController')
const userloginController = require('./src/User/Controller/LoginController')
const userController = require('./src/User/Controller/UserController')
const otherloginController = require('./src/Other/Controller/LoginController')
const otherController = require('./src/Other/Controller/OtherController')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const mongoConnect = require('./util/database').mongoConnect;

process.on("uncaughtException", err => {
  console.log("Shutting Down Server" + err.stack)
  process.exit(1)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(cors())

app.use('/login/admin', adminloginController)
app.use('/admin', adminController)
app.use('/login/other', otherloginController)
app.use('/other', otherController)
app.use('/login/user', userloginController)
app.use('/user', userController)


app.get('/', function (req, res) {
    res.send("Home")
})

mongoose
  .connect(
    process.env.MONGO_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(result => {
    app.listen(5000, ()=>{
      console.log('Server started spinning at PORT 5000');
    })
  })
  .catch(err => {
    console.log(err);
  });