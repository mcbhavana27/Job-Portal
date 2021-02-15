import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";

export default class Register extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            type: '',
            date:null
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ name: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    onChangeType(event) {
        this.setState({ type: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type,
            date: Date.now()
        }
        axios.post('http://localhost:4000/user/register', newUser)
             .then(res => {alert("Registration done successfully for the user \t" + res.data.name);
             console.log(res.data);
            localStorage.setItem("username", newUser.name);
            //  localStorage.setItem("username", newUser.name);
            //  localStorage.setItem("login-type",newUser.type);
          // this.props.history.push("../Profile");
    }
      
             )
             .catch(function(error) {
                console.log(error);
            }) 

             ;
            
             

        this.setState({
            name: '',
            email: '',
            password: '',
            type: '',
            date:null
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                      <select class="form-control" id="type"
                               value={this.state.type}
                               onChange={this.onChangeType}
                              >
                               <option>Type</option>
                               <option>Applicant</option>
                               <option>Recruiter</option>
                               </select>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                    <a href="Login/" class="breadcrumb-item active" aria-pressed="true">Already registered? Login here</a> 
                </form>
            </div>
        )
    
    }
}


