import { Button,  makeStyles, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { height, padding } from '@mui/system';
import { useState } from 'react';
import "./index.css"
import axios from 'axios';




function App() {
  let[formData, setformData]= useState({})

  let fields=[
   {
     name: "name",
     title:"Name"
   },
   {
    name: "email",
    title:"Email"
  },
  {
    name: "phone",
    title:"Contact number"
  },
  {
    name: "address",
    title:"Address"
  },
  {
    name: "semester",
    title:"Semester"
  },

  ];

  let handleChange= function(event){
    console.log(event.target.name,event.target.value);

    let updated = {...formData};
    updated[event.target.name] = event.target.value;
    setformData(updated);
  };
  return (
    <Box style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width :"100vw",
      margin:"10px",
      background:"#F0F8FF",
      height:"100vh"
    }}>
     
     <Box style={{
       display:"flex",
       flexDirection:"column",
       alignItems:"center",
       width :"500px",
       margin:"20px",
       background:"#6a5acd",
       height:"100px",
       borderRadius:"5px"
     }}>  
     
     <Typography variant='h4' style={{
       color:"#ffffff",
       padding:"20px",

     }}>REGISTRATION FORM</Typography> </Box>

    <Box  style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width :"500px",
      
    }}>

      {
        fields.map(function(item,idx){
          return(
            <TextField className='outlined'style={{margin:"4px",background:"#FFFFFF"}} label={item.title} name = {item.name} value ={formData[item.name]} onChange={handleChange} variant="outlined" fullWidth/>
          )
        })
      }
    </Box>
    <Button className='btn'onClick={function(){
      axios.post("http://localhost:8000/submit",formData).then((response)=>{
        console.log("success",response);
      }).catch((error)=>{
        console.log("Error",error);
      })
      console.log(formData);
      
    }} style={{
      width:"500px",
      background:"#6a5acd",
      borderRadius:"20px",
      padding :"10px",
      margin :"10px"
      
    }} >
    <Typography style={{color:"#ffffff"}}>SUBMIT</Typography></Button>
    </Box>
  );
 }


export default App;
