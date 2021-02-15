var express = require("express");
var router = express.Router();

// Load Job model
const Job = require("../models/Jobs");

// GET request 
// Getting all the Jobs
router.get("/", function(req, res) {
    Job.find(function(err, jobs) {
		if (err) {
			console.log(err);
		} else {
			res.json(jobs);
		}
	})
});


// router.post("/delete",(req,res)=> {
//     console.log(req);
//     Job.findOne({ _id: req.body.id }, function(err, jobs) {

//         Job.remove({_id}),err=> {
//             console.log(err);
//         }
//     }
// })

router.post("/delete", (req, res) => {
  let _id = req.body._id;
  Job.findById(_id,function(err,job) {

      if(!err)
      {
        Job.deleteOne(job,function(err,obj)
        {
            if(err)
            console.log(err);
            else
            console.log("deleted");
        });
      }
  });

});



router.post("/alljobs",(req, res) => {
    const senddata={
        ma:'',
        mp:'',
        d:'',
    }
    console.log(req);
    Job.findOne({ _id: req.body._id }, function(err, jobs) 
    {
            if (jobs) 
            {
                //Not found
                console.log("Not filled");
                senddata.ma=jobs.applicants;
                senddata.mp=jobs.positions;
                senddata.d=jobs.Doe;
                res.json(jobs);
            } 
            else 
            {
                res.json(senddata);
            }
            
    })
    });



router.post("/add", (req, res) => {
    console.log(req);
    const newJob = new Job({
         email: req.body.email,
         name: req.body.name,
         title: req.body.title,
         applicants:req.body.applicants,
         positions: req.body.positions,
         Dop:req.body.Dop,
         Doe:req.body.Doe,
         type: req.body.type,
         Duration: req.body.Duration,
         salary: req.body.salary,
         Rating: req.body.Rating,
         date: req.body.date
    });

    newJob.save()
        .then(job => {
            res.status(200).json(job);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});



// router.post("/profile",(req, res) => {
//     User.findOne({ email: req.body.email }, function(err, users) {
//         if (err)
//             console.log(err);
//         else {
//             if (!users) {
//                 //Not found
//                 console.log("Not registered");
//                 res.send("1");
//             } else {
//                 res.json(users);
//             }
//         }
//     });
// });


router.post("/update",(req,res)=> {

        const id= req.body.id
        const applicants=req.body.applicants;
        const positions= req.body.positions;
        const Doe=req.body.Doe;



        Job.findOne({id}).then(job=>{
            console.log(job);
            if(job){
                var check={id:id};
                var u1={$set: {applicants:applicants}};
                var u2={$set: {positions: positions}};
                var u3={$set: {Doe: Doe}};
                Job.updateOne(check,u1,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
                 Job.updateOne(check,u2,function(err,res) {
                    if(err)
                    {
                        console.log(err);
                    }
                    // body...
                })
                   Job.updateOne(check,u3,function(err,res) {
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
                    error: "job not found"
                })

            }
        });
    })


module.exports = router;