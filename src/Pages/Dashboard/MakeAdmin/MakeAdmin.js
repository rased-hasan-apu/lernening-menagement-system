import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const handleAdminSubmit=e=>{
        const user={email};
        fetch('/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(user)
        })
          .then(res=>res.json())
          .then(data=>{
              if(data.modifiedCount){
                console.log(data);
                alert('admin add successfuly')
                setEmail('');
                
              }
              
          })
        e.preventDefault()
    }
    const handeleOnBlur=e=>{
        setEmail(e.target.value);
    }
    return (
        <div>
            <h1 className="text-center mt-1"> Make an Admin </h1>
            <form onSubmit={handleAdminSubmit}
            style={{alignItems:'center',justifyContent:'center',display:'grid'}}
            >
            <TextField 
              style={{marginTop:'10px'}}
              label="Email"
              type="email"
              onBlur={handeleOnBlur}
              variant="standard" />
             <Button style={{backgroundColor:'silver',padding:'5px',color:'white',marginTop:'10px'}} type="submit"variant="contained">Make Admin</Button>
            </form>
           
            
        </div>
    );
};

export default MakeAdmin;