import React, {Component} from 'react';
import axios from 'axios';
import { blue, blueGrey, lightBlue } from '@material-ui/core/colors';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';




class editpost extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 

            _id: '',
            applicants: '',
            positions: '',
            Doe: ''
        };
        
       
        this.onChangeapplicants=this.onChangeapplicants.bind(this);
        this.onChangepositions=this.onChangepositions.bind(this);
        this.onChangeDoe=this.onChangeDoe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeapplicants(event) {
        this.setState({ applicants: event.target.value });
    }
     onChangepositions(event) {
        this.setState({positions :event.target.value });
    }

    onChangeDoe(event) {
        this.setState({Doe: event.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        alert("Edit job done:)");

        const Job = {

            _id: this.state._id,
            applicants: this.state.applicants,
            positions:this.state.positions,
            Doe: this.state.Doe,
            data:{}
        }

        console.log(Job);

        axios.post('http://localhost:4000/job/update',Job).then(response=> {
            this.setState({data: response.data});

        this.setState({applicants: this.state.data.applicants});
        this.setState({positions: this.state.data.positions});
        this.setState({Doe: this.state.data.Doe});
        
       
        })



    }

    componentDidMount() {

        const profuser={ _id:localStorage.getItem('_id'), };

        this.setState({_id: profuser._id});
        console.log(profuser._id);
      
        axios.post('http://localhost:4000/job/alljobs',profuser)
             .then(response => {
                 this.setState({data: response.data});
                 console.log("data",response.data);
                 this.setState({
                        applicants: this.state.data.applicants,
                        positions:this.state.data.positions,
                        Doe: this.state.data.Doe,                
                    })
                 // const email=localStorage.getItem("email-id");
                 // const name=localStorage.getItem("username");
                 console.log(this.state.positions);
                 console.log(this.state.Doe);
             })
             .catch(function(error) {
                 console.log(error);
             })
             
    }

      componentDidUpdate() {
        axios.get('http://localhost:4000/job')
             .then(response => {
                 this.setState({jobs: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })        
    }

    render() {
        return (
            <div style={{color:blue,fontSize:16}}>              
                
            <div>
            <form onSubmit={this.onSubmit}>
                     
                  

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
                        <label>Date of ending </label>
                        
                             <input type="Date" class="form-control"
                            value={this.state.Doe}
                            onChange={this.onChangeDoe} placeholder="Date of ending"/>
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

export default editpost;
