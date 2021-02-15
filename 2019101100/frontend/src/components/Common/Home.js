import React, {Component} from 'react';
import axios from 'axios';


export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password: ''
        }
    }

    componentDidMount() {

        localStorage.clear();
    }

    render() {
        return (
        //     <div class="center">
        //         <h3> Job portal </h3>
        //    </div>
        <div style={{backgroundColor:"black", padding:100, textAlign:"center"}}>
        <h3 style={{color: "white"}}>Job portal</h3>
        </div>
        )
    }
}