import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { blue, blueGrey, lightBlue } from '@material-ui/core/colors';





class Recruiter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {users: [],
            sortName:true,
            email:'',
            name: '',
            mobileno: '',
            bio: ''
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangemobileno = this.onChangemobileno.bind(this);
        this.onChangebio = this.onChangebio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


     onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangename(event) {
        this.setState({ name: event.target.value });
    }

    onChangemobileno(event) {
        this.setState({ mobileno: event.target.value });
    }

      onChangebio(event) {
        this.setState({ bio: event.target.value });
    }


    onSubmit(e) {
        e.preventDefault();

        alert("updated data for recruiters profile:)");

        const User = {

            email: this.state.email,
            name: this.state.name,
            mobileno: this.state.mobileno,
            bio:this.state.bio,
            date: Date.now(),
            data:{}
        }

        console.log(User.mobileno);

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
                    mobileno: this.state.data.mobileno,
                    bio:this.state.data.bio,
                 })
                 // const email=localStorage.getItem("email-id");
                 // const name=localStorage.getItem("username");
                 console.log(this.state.name);
                 console.log(this.state.mobileno);
                 console.log(this.state.bio);
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

    render() {
        return (
            <div style={{color:blue,fontSize:16}}>              
                <Link to="../Home" style={{fontsize:14}}> Posted Jobs</Link>
                <br></br>
            <div>
            <form onSubmit={this.onSubmit}>

                <div><h3> Hey </h3></div>
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

                  <div class="form-group">
                        <label>Mobileno: </label>
                        
                             <input type="tel" class="form-control"
                            value={this.state.mobileno}
                            onChange={this.onChangemobileno} placeholder="enter mobile no"/>
                    </div>


                  <div class="form-group">
                  <label for="exampleFormControlTextarea1">Bio</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.bio} onChange={this.onChangebio} placeholder="your bio"></textarea>
              </div>


                  <div className="form-group">
                        <input type="submit" value="save" className="btn btn-primary"/>
                    </div>

                    </form>


                    
                <br></br>

                  <a class="btn btn-primary" href="../Jobs" role="button">Post  jobs</a>
                    </div>
                    </div>

        )
    }
}

export default Recruiter;
