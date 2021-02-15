import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import GoogleLogin from 'react-google-login'


import UsersList from './components/Users/UsersList'
import Home from './components/Common/Home'
import Register from './components/Common/Register'
import Navbar from './components/templates/Navbar'
import Profile from './components/Users/Profile'
import Login from './components/Common/Login'
import Recruiter from './components/Common/Recruiter'
import Jobs from './components/Common/Jobs'
import singlejob from './components/Common/singlejob'
import Applicant from './components/Users/Applicant'
import JobsList from './components/Common/Dashboard'
import viewjob from './components/Common/viewjobs'
import applydash from './components/Common/Applydash'
import editpost from './components/Common/Editpost'






function App () {

  const responseSuccessGoogle = (response)=>
{
    console.log(response);
}
const responseErrorGoogle= (response) => {

}
  return (

    <GoogleLogin
clientId="153383748267-8jfioev50gjq7lkatvh1b7a98l6ffqc0.apps.googleusercontent.com"
buttonText="Login with google"
onSuccess={responseSuccessGoogle}
onFailure={responseErrorGoogle}
cookiePolicy={'single_host_origin'}
/>,
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={Login}/>
        <Route path="/recruiter" component={Recruiter}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/singlejob" component={singlejob}/>
        <Route path="/applicant" component={Applicant}/>
        <Route path="/dashboard" component={JobsList}/>
        <Route path="/viewjob" component={viewjob}/>
        <Route path="/applydash" component={applydash}/>
        <Route path="/editpost" component={editpost}/>
      </div>
    </Router>


    
  );
}

export default App;
