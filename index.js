var express = require('express')
var app = express()
var port = app.listen(process.env.PORT || 5050);
const mongoose = require("mongoose")
const{ User } = require("./models/User")
const config = require("./config/key")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect(config.mongoURI,{
}).then(() => console.log("MongoDB Connected.."))
.catch(err => console.log(err))



app.post("/register",(req,res) => {

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false,err})
        return res.status(200).json({
            success:true 
        })
    })
})
// app.get('/', function(req, res) {
//     app.use(express.static('public'))
//     res.sendFile(__dirname + "/iksan/main.html")
// })
// app.get('/main', function(req, res) {
//     app.use(express.static('public'))
//     res.sendFile(__dirname + "/iksan/main.html")
// })
// app.get('/Communication', function(req, res) {
//     app.use(express.static('public'))
//     res.sendFile(__dirname + "/iksan/Communication.html")
// })
// app.get('/CCTV', function(req, res) {
//     app.use(express.static('public'))
//     res.sendFile(__dirname + "/iksan/CCTV.html")
// })
// app.get('/parking', function(req, res) {
//     app.use(express.static('public'))
//     res.sendFile(__dirname + "/iksan/parking.html")
// })
// app.get('/announcement-1', function(req, res) {
//     app.use(express.static('public'))
//     res.sendFile(__dirname + "/iksan/announcement-1.html")
// })


app.listen(port, function() {
    console.log('start! express server');
    })
