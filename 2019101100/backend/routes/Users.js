var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});


router.post("/profile",(req, res) => {
    User.findOne({ email: req.body.email }, function(err, users) {
        if (err)
            console.log(err);
        else {
            if (!users) {
                //Not found
                console.log("Not registered");
                res.send("1");
            } else {
                res.json(users);
            }
        }
    });
});


router.post("/update",(req,res)=> {
        const email= req.body.email;
        const name= req.body.name;
        const Iname= req.body.Iname;
        const startyear=req.body.startyear;
        const Rating= req.body.Rating;
        const mobileno=req.body.mobileno;
        const bio=req.body.bio;
        const skills=req.body.skills;
        const rskills=req.body.rskills;
        const date= req.body.date;


        User.findOne({email}).then(user=>{
            console.log(user);
            if(user){
                var check={email:email};
                var u1={$set: {Iname:Iname,skills:skills}};
                var u2={$set: {startyear: startyear}};
                var u3={$set: {Rating: Rating}};
                var u4={$set: {name: name}};
                var u5={$set: {mobileno: mobileno}};
                var u6={$set: {bio: bio,rskills:rskills}};
                User.updateOne(check,u1,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
                 User.updateOne(check,u2,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
                   User.updateOne(check,u3,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
                      User.updateOne(check,u4,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
                    User.updateOne(check,u5,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
                    User.updateOne(check,u6,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
            }
            else
            {
                return res.status(404).json(
                {
                    error: "Email not found"
                })

            }
        });
    })

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type,
        date: req.body.date
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// POST request 
// Login
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password=req.body.password;
	// Find user by email
	User.findOne({ email,password }).then(user => {
		// Check if user email exists
		if (!user) {
			return res.status(404).json({
				error: "Email not found or incorrect password",
			});
        }
        else{
            res.send("Email Found");
            return user;
        }
	});
});

module.exports = router;

