import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Sheared/Navegation/Navigation';

const Booking = () => {
    const {serviceId}=useParams();
    const {user}=useAuth();
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch(`https://mighty-anchorage-74891.herokuapp.com/addCourse`)
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    const {register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post(`https://mighty-anchorage-74891.herokuapp.com/orderData`,data)
        .then(res=>{
              if(res.data.insertedId){
               alert('added successfully plasce check dashbord');
               reset();
              }
        })
   }
   const viewDeatils = courses.find(view=>view._id===serviceId)
    return (
        <>
        <Navigation></Navigation>
        <Box>
      <Typography>
        <Typography variant="h3"> Submmit Yor Order and Check the dashbor to see your order </Typography>
      </Typography>

      <form className="reviews" onSubmit={handleSubmit(onSubmit)}>
          
        <input
          {...register("name", { required: true })}
          value={user?.displayName}
          placeholder=""
        />
        
        <input
          {...register("email", { required: true })}
          value={user?.email}
          placeholder=""
          
        />
        {viewDeatils &&<input
          {...register("course", { required: true })}
          defaultValue={viewDeatils?.title}
          placeholder=""
          
        />}
       {viewDeatils &&<input
          {...register("date", { required: true })}
          defaultValue={viewDeatils?.date} 
          placeholder=""
        />}
         {viewDeatils &&<input
          {...register("time", { required: true })}
          defaultValue={viewDeatils?.time} 
          placeholder=""
        />}
        <input
          {...register("contract", { required: true })}
          placeholder="Please type your phone number"
        />

        <input type="submit" />
      </form>
    </Box>
        </>
    );
};

export default Booking;