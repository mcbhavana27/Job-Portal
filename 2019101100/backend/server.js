const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"
const fileUpload = require('express-fileupload')


app.use(fileUpload());

//upload endpoint
app.post('/upload',(req,res)=> {
    if(req.files == null)
    {
        return res.status(400).json({msg: 'No file uploaded'})
    }
    const file=req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`,err=>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.join({fileName: file.name,filePath: `/uploads/${file.name}`});
    });
});
// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var JobRouter = require("./routes/Jobs");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME,{useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/job",JobRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
