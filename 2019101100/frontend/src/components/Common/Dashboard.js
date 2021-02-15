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
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


class JobsList extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            search:''
        }
        this.state = {jobs: [],sortedJobs: [], sorttitle:true};
        this.renderIcon = this.renderIcon.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.onChangesearch=this.onChangesearch.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    };

  
    componentDidMount() {
        axios.get('http://localhost:4000/job')
             .then(response => {
                 this.setState({jobs: response.data, sortedJobs:response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }


    onChangesearch(event) {
        this.setState({search: event.target.value});
    }

    onSubmit(event){
        console.log(this.state.search);
        var array1=this.state.jobs;
        var final=array1.filter(array1=> array1.title.includes(this.state.search));
        console.log(this.state.search);
        this.setState({
            jobs:final,
        })
    }


    sortChange(){
/**
 *      Note that this is sorting only at front-end.
 */
        var array = this.state.jobs;
        var flag = this.state.sorttitle;
        array.sort(function(a, b) {
            if(a.date != undefined && b.date != undefined){
                return (1 - flag*2) * (new Date(a.date) - new Date(b.date));
            }
            else{
                return 1;
            }
          });
        this.setState({
            jobs:array,
            sorttitle:!this.state.sorttitle,
        })
    }

    renderIcon(){
        if(this.state.sorttitle){
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
            <div>
                <Grid container>
                <Grid item xs={12} md={3} lg={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem text>
                                        <h3>Filters</h3>
                        </ListItem>
                    </List>
                </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                    <List component="nav" aria-label="mailbox folders">
                        <TextField 
                        id="standard-basic" 
                        label="Search" 
                        fullWidth={true}   
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={this.onSubmit}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )}}
                            value={this.state.search}
                            onChange={this.onChangesearch}
                        />
                    </List>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3} lg={3}>
                        <List component="nav" aria-label="mailbox folders">

                            <ListItem button>
                                <form noValidate autoComplete="off">
                                    <label>Salary</label>
                                    <TextField id="standard-basic" label="Enter Min" fullWidth={true} />
                                    <TextField id="standard-basic" label="Enter Max" fullWidth={true}/>
                                </form>                                                                
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={this.state.jobs}
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Select Names" variant="outlined" />}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                           
                                            <TableCell>title</TableCell>
                                            <TableCell>No of applicants</TableCell>
                                            <TableCell> No of positions</TableCell>
                                            <TableCell> date of Ending</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.jobs.map((job,ind) => (
                                        <TableRow key={ind}>
                                            <TableCell>{job.title}</TableCell>
                                            <TableCell>{job.applicants}</TableCell>
                                            <TableCell>{job.positions}</TableCell>
                                            <TableCell>{job.Doe}</TableCell>
                                             <TableCell><button className="btn btn-link" onClick={()=>{
                                            localStorage.removeItem("id");
                                            localStorage.setItem("id",job._id);
                                            this.props.history.push("Editpost");}
                                            }>Edit</button>
                                            </TableCell>

                                             <TableCell>
                                                <button className="btn btn-link" onClick={()=>{
                                                    const removejob={
                                                        _id:job._id,
                                                    };
                                                    this.setState({_id:removejob._id});
                                                    axios
                                                        .post("http://localhost:4000/job/delete", removejob)
                                                        .then(response => {
                                                            {alert("deleted")}
                                                            this.setState({ data: response.data });
                                                        })
                                                        .catch(function(error) {
                                                            console.log(error);
                                                          });
                                                        }   
                                                }>delete</button>
                                            </TableCell>
                                        </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </Paper>               
                    </Grid>    
                </Grid>            
            </div>
        )
    }
}


export default JobsList;