import React, {Component} from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login'


export default class Login extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            type: '',
            date:null
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        const User = {

            email: this.state.email,
            password: this.state.password,
            type: this.state.type,
            date: Date.now()
        }
        axios.post('http://localhost:4000/user/login', User)
             .then(res => {alert("successfully login completed:) \t" + res.data);
             console.log(res.data);
             localStorage.setItem("email-id", User.email);
             localStorage.setItem("login-type",User.type);
            //  this.props.history.push("../Profile");
            console.log(User.type);
             if(User.type=="Applicant")
             this.props.history.push("../Profile");

             else if(User.type =="Recruiter")
             this.props.history.push("/Recruiter");

            })

            .catch(function(error) {
                console.log(error);
            }) 

            

        this.setState({
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
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                    <a href="Register/" class="breadcrumb-item active" aria-pressed="true">not registered?click here</a> 
                </form>
     
            </div>
            
        )
    
    }
}


