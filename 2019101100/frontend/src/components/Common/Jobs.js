import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { blue, blueGrey, lightBlue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


export default class Jobs extends Component  {
    
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            name: '',
            title:'',
            applicants:'',
            positions:'',
            rskills:'',
            Dop:'',
            Doe:'',
            type:'',
            Duration:'',
            salary:'',
            Rating:'',
            date:null

        }

        //  this.sortClicked = this.sortClicked.bind(this);
        // this.renderIcon = this.renderIcon.bind(this);
        // this.sortChange = this.sortChange.bind(this);
        // this.renderIcon1 = this.renderIcon1.bind(this);
        // this.sortChange1 = this.sortChange1.bind(this);
        // this.renderIcon2= this.renderIcon2.bind(this);
        // this.sortChange2 = this.sortChange2.bind(this);

        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeapplicants = this.onChangeapplicants.bind(this);
        this.onChangepositions = this.onChangepositions.bind(this);
        this.onChangerskills=this.onChangerskills.bind(this);
        this.onChangeDop = this.onChangeDop.bind(this);
        this.onChangeDoe = this.onChangeDoe.bind(this);
        this.onChangetype = this.onChangetype.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangesalary = this.onChangesalary.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


     onChangeemail(event) {
        this.setState({ email: event.target.value });
    }

    onChangename(event) {
        this.setState({ name: event.target.value });
    }

    onChangetitle(event) {
        this.setState({ title: event.target.value });
    }

      onChangeapplicants(event) {
        this.setState({ applicants: event.target.value });
    }

      onChangepositions(event) {
        this.setState({ positions: event.target.value });
    }

    onChangerskills(event) {
        this.setState({ rskills: event.target.value });
    }

      onChangeDop(event) {
        this.setState({ Dop: event.target.value });
    }
      onChangeDoe(event) {
        this.setState({ Doe: event.target.value });
    }

      onChangetype(event) {
        this.setState({ type: event.target.value });
    }
      onChangeDuration(event) {
        this.setState({ Duration: event.target.value });
    }

      onChangesalary(event) {
        this.setState({ salary: event.target.value });
    }
      onChangeRating(event) {
        this.setState({ Rating: event.target.value });
    }



    onSubmit(e) {
        e.preventDefault();

        alert("updated data in posted job");

        const newJob = {

            email: this.state.email,
            name: this.state.name,
            title: this.state.title,
            applicants:this.state.applicants,
            positions: this.state.positions,
            rskills: this.state.rskills,
            Dop:this.state.Dop,
            Doe: this.state.Doe,
            type:this.state.type,
            Duration: this.state.Duration,
            salary:this.state.salary,
            Rating:this.state.Rating,
            data: {}
        }
// console.log("data in frontend");
         console.log(newJob);

          axios.post('http://localhost:4000/job/add', newJob)
             .then(res => {alert("job post done \t" + res.data.name);
             console.log(res.data);
            // localStorage.setItem("username", newJob.name);
            //  // localStorage.setItem("username", newUser.name);
             // localStorage.setItem("login-type",newUser.type);
          // this.props.history.push("../Profile");
          console.log(newJob);
    }
      
             )
             .catch(function(error) {
                console.log(error);
            }) 

             ;

    axios.post('http://localhost:4000/job/update',newJob).then(response=> {
            this.setState({data: response.data});
        })


        // this.setState({

        // 	email:'',
        //     name: '',
        //     title:'',
        //     applicants:'',
        //     positions:'',
        //     Dop:'',
        //     Doe:'',
        //     type:'',
        //     Duration:'',
        //     salary:'',
        //     Rating:'',
        //     date:''
            
        // });
            
        	
       }


    // componentDidMount() {

    //     const profuser={
    //         email:localStorage.getItem('email-id'),
    //     };
    //     this.setState({email: profuser.email});
    //     console.log(profuser.email);
    //     axios.post('http://localhost:4000/job/add',profuser)
    //          .then(response => {
    //              this.setState({data: response.data});
    //              this.setState({
    //                 name: this.state.data.name,
    //                 // mobileno: this.state.data.mobileno,
    //                 title:this.state.data.title,
    //                 applicants: this.state.data.applicants,
    //                 positions:this.state.data.positions,
    //                 Dop: this.state.data.Dop,
    //                 Doe:this.state.data.Doe,
    //                 type: this.state.data.type,
    //                 Duration:this.state.data.Duration,
    //                 salary: this.state.data.salary,
    //                 Rating:this.state.data.Rating,
    //              })
    //              // const email=localStorage.getItem("email-id");
    //              // const name=localStorage.getItem("username");
    //              console.log(this.state.name);
    //              // console.log(this.state.mobileno);
    //              // console.log(this.state.bio);
    //          })
    //          .catch(function(error) {
    //              console.log(error);
    //          })
             
    // }

    // componentDidUpdate() {
    //     axios.get('http://localhost:4000/job')
    //          .then(response => {
    //              this.setState({users: response.data});
    //          })
    //          .catch(function(error) {
    //              console.log(error);
    //          })        
    // }



    render() {
        return (

        	<div style={{color:blue,fontSize:16}}>              
                <Link to="Dashboard" style={{fontsize:14}}> My dashboard</Link>
                <br></br>

                <h3> Hey..post the job!</h3>

            <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label>Email: </label>
                        
                             <input type="text" class="form-control" 
                               value={this.state.email}
                                onChange={this.onChangeemail}/>

                    </div>

                    <div class="form-group">
                        <label>Full Name: </label>
                        
                             <input type="text" class="form-control"
                            value={this.state.name}
                            onChange={this.onChangename}/>
                    </div>

                     <div class="form-group">
                        <label>Title: </label>
                        
                             <input type="text" class="form-control"
                            value={this.state.title}
                            onChange={this.onChangetitle}/>
                    </div>


                  <div class="form-group">
                        <label>No of Applicants </label>
                        
                             <input type="number" class="form-control"
                            value={this.state.applicants}
                            onChange={this.onChangeapplicants} placeholder="applicants"/>
                    </div>

                    <div class="form-group">
                        <label>No of positions </label>
                        
                             <input type="number" class="form-control"
                            value={this.state.positions}
                            onChange={this.onChangepositions} placeholder="positions"/>
                    </div>


                      <div class="form-group">
                        <label>Required skills </label>
                        
                             <input type="text" class="form-control"
                            value={this.state.rskills}
                            onChange={this.onChangerskills} placeholder="req skills"/>
                    </div>


                    <div class="form-group">
                        <label>Date of posting </label>
                        
                             <input type="date" class="form-control"
                            value={this.state.Dop}
                            onChange={this.onChangeDop} placeholder="Date of posted"/>
                    </div>


                    <div class="form-group">
                        <label>Date of ending </label>
                        
                             <input type="date" class="form-control"
                            value={this.state.Doe}
                            onChange={this.onChangeDoe} placeholder="Date of ending"/>
                    </div>


                     <div className="form-group">
                        <label>Type </label>
                      <select class="form-control" id="type"
                               value={this.state.type}
                               onChange={this.onChangetype}
                              >
                               <option>Type</option>
                               <option>Fulltime</option>
                               <option>Parttime</option>
                               <option>WFH</option>
                               </select>
                    </div>

                     <div class="form-group">
                        <label>Duration </label>
                        
                             <input type="number" class="form-control"
                            value={this.state.Duration}
                            onChange={this.onChangeDuration
                            }/>
                    </div>

                     <div class="form-group">
                        <label>Salary </label>
                        
                             <input type="number" class="form-control"
                            value={this.state.salary}
                            onChange={this.onChangesalary
                          	}/>
                    </div>

                     <div className="form-group">
                        <label>Rating </label>
                      <select class="form-control" id="Rating"
                               value={this.state.Rating}
                               onChange={this.onChangeRating}
                              >
                               <option>Rating</option>
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                               <option>4</option>
                               <option>5</option>
                               </select>
                    </div>


                  <div className="form-group">
                        <input type="submit" value="save" className="btn btn-primary"/>
                    </div>

                    </form>


                    
                <br></br>
                    </div>

        )
    }
}


