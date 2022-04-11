import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Typography, Box, Alert } from '@mui/material';
import './AddACourse.css'
import axios from 'axios';
const AddACourse = () => {
const {register,handleSubmit,reset}=useForm();

const onSubmit=data=>{
  console.log(data);
  axios.post(`https://mighty-anchorage-74891.herokuapp.com/addCourse`,data)
  .then(res=>{
    if(res.data.insertedId){
      alert('course add successfully');
      reset();
    }
  })
} 
    return (
        <Box>
      <Typography>
        <Typography variant="h3"> Add Course</Typography>
      </Typography>

      <form className="reviews" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          placeholder="Course title"
        />
        <input
          {...register("date", { required: true })}
          placeholder="Course start date and end date"
          
        />
        <input
          {...register("time", { required: true })}
          placeholder="Corse start time"
          
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Course avelavle description"
        />
        <input
          {...register("img", { required: true })}
          placeholder="Course image link"
        />

        <input type="submit" />
      </form>
    </Box>
    );
};

export default AddACourse;