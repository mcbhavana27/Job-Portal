import React, {Component} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { blue, blueGrey, lightBlue } from '@material-ui/core/colors';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';




class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {users: [],
            sortName:true,
            email:'',
            name: '',
            Iname: '',
            startyear: '',
            Rating: '',
            skills:''
        };
        this.sortClicked = this.sortClicked.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangeIname = this.onChangeIname.bind(this);
        this.onChangestartyear = this.onChangestartyear.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeskills = this.onChangeskills.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


     onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangename(event) {
        this.setState({ name: event.target.value });
    }

    onChangeIname(event) {
        this.setState({ Iname: event.target.value });
    }

    onChangestartyear(event) {
        this.setState({ startyear: event.target.value });
    }
    onChangeRating(event) {
        this.setState({Rating :event.target.value });
    }

     onChangeskills(event) {
        this.setState({skills :event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        alert("updated data in profile:)");

        const User = {

            email: this.state.email,
            name: this.state.name,
            Iname: this.state.Iname,
            startyear: this.state.startyear,
            Rating: this.state.Rating,
            skills:this.state.skills,
            date: Date.now(),
            data:{}
        }

        console.log(User.Iname);

        console.log(User);

        axios.post('http://localhost:4000/user/update',User).then(response=> {
            this.setState({data: response.data});
        })
    }


    componentDidMount() {

        const profuser={
            email:localStorage.getItem('email-id'),
        };
        this.setState({email: profuser.email});
        console.log(profuser.email);
        axios.post('http://localhost:4000/user/profile',profuser)
             .then(response => {
                 this.setState({data: response.data});
                 this.setState({
                    name: this.state.data.name,
                    Iname: this.state.data.Iname,
                    startyear: this.state.data.startyear,
                    Rating:this.state.data.Rating,
                    skills:this.state.data.skills,
                 })
                 // const email=localStorage.getItem("email-id");
                 // const name=localStorage.getItem("username");
                 console.log(this.state.name);
                 console.log(this.state.Iname);
             })
             .catch(function(error) {
                 console.log(error);
             })
             
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/user')
             .then(response => {
                 this.setState({users: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })        
    }

    sortClicked(){
        console.log(this.state);
    }

    sortChange(){
        var array = this.state.users;
        var flag = this.state.sortName;
        array.sort(function(a, b) {
            if(a.date != undefined && b.date != undefined){
                return (1 - flag*2) * (new Date(a.date) - new Date(b.date));
            }
            else{
                return 1;
            }
          }); // Sort youngest first
        this.setState({
            users:array,
            sortName:!this.state.sortName,
        })
    }

    renderIcon(){
        if(this.state.sortName){
            return(
                <ArrowDownwardIcon/>
            )
        }
        else{
            return(
                <ArrowUpwardIcon/>
            )            
        }
    }

    render() {
        return (
            <div style={{color:blue,fontSize:16}}>              
                <Link to="../Applydash" style={{fontsize:14}}> My dashboard</Link>
                <br></br>
            <div>
            <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label>Email: </label>
                        
                             <div class="form-control"> 
                               {this.state.email}

                               </div>
                    </div>

                    <div class="form-group">
                        <label>Full Name: </label>
                        
                             <input type="text" class="form-control"
                            value={this.state.name}
                            onChange={this.onChangename}/>
                    </div>

                     
                  

                  <label> Educational details </label>
                  <div className="form-group">
                        <label>Instution name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Iname}
                               onChange={this.onChangeIname}
                               placeholder="Institute name"
                               /> 
                        <input type="date" className="form-control" 
                               value={this.state.startyear}
                               onChange={this.onChangestartyear}
                               placeholder="startyear"
                               />  
                    </div>


                      <div class="form-group">
                        <label>Skills: </label>
                        
                             <input type="text" class="form-control"
                            value={this.state.skills}
                            onChange={this.onChangeskills}/>
                    </div>



                      <div class="form-group">
                    <label for="exampleFormControlFile1">Upload resume</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
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
                    </div>

        )
    }
}

export default Profile;