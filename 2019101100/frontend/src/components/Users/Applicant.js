import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { blue, blueGrey, lightBlue } from '@material-ui/core/colors';
// import React, { useEffect, useState } from "react";



function Applicant() {



const [inputList,setInputList] = React.useState([
  { Addskill: "python"},
  { Addskill: "python"}

]);

const handleChange = (e,index) => {
  const {name,value} = e.target;

  const list=[...inputList];
  list[index][name]=value;
  setInputList(list);


}

const handleAddInput=()=> {
  setInputList([...inputList,{Addskill: " "}]);
}
const handleRemoveInput = index => {
  const list=[...inputList];
  list.splice(index,1);
  setInputList(list);
}

   return (

    <div>

    

               {inputList.map((item,i) => {
                  return(
                   <div key={i} className="box">
                    <input type="text"  
                    name= "Addskill" 
                    placeholder="Add skill" 
                    clasName="mr10" 
                    value={item.Addskill}
                    onChange={e => handleChange(e,i)}
                    />
                   { inputList.length !==1 && <input type="button" value="Remove" clasName="mr10" onClick={ () => handleRemoveInput(i)} />}
                    {inputList.length -1 ===i && <input type="button"  value="Add" clasName="mr10" onClick={handleAddInput}/>}
                    </div>
                    )


                })}

                   


                     <pre>
            {JSON.stringify(inputList,null,2)}
            </pre>

            </div>
                   
           
                  
        );

}

export default Applicant;

