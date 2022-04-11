import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Course = (props) => {
    const {title,date,time,description,img,_id}=props.course;
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>

            <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                Book: {title}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
               Start date: {date}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
             Time:  {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {description}
            </Typography>
            <NavLink to={`/booking/${_id}`} style={{textDecoration:'none' }}><Button onClick='' variant="contained">Ernole Course NOW</Button></NavLink>
        </Paper>
    </Grid>
    
        </>
    );
};

export default Course;