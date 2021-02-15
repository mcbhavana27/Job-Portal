import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { blue, blueGrey, lightBlue } from '@material-ui/core/colors';



export default class singlejob extends Component {

	constructor(props) {
        super(props);
        this.state = {
            sop:''
        };
        this.onChangesop = this.onChangesop.bind(this);
    }


     onChangesop(event) {
        this.setState({ sop: event.target.value });
    }

    

    onSubmit(e) {
        e.preventDefault();

        alert("sop send to recruiter:)");

        const User = {

            sop: this.state.sop
          
        }

        console.log(User);

        axios.post('http://localhost:4000/job',User).then(response=> {
            this.setState({data: response.data});
        })

         localStorage.setItem("Sop", User.sop);
            //  localStorage.setItem("username", newUser.name);
            //  localStorage.setItem("login-type",newUser.type);
          this.props.history.push("/Dashboard");
    }


  



render() {

   return (
            <div style={{color:blue,fontSize:16}}>              
                // <Link to="../Home" style={{fontsize:14}}> Posted Jobs</Link>
                <br></br>

                <h2> This is sop page..!</h2>
                <form onSubmit={this.onSubmit}>

                 <div class="form-group">
                  <label for="exampleFormControlTextarea1">Statement of purpose</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.sop} onChange={this.onChangesop} placeholder="sop"></textarea>
                        </div>

                   <div className="form-group">
                        <input type="submit" value="submit" className="btn btn-primary"/>
                    </div>

                    </form>
        


            </div>

           
                  
        );

    }
}

