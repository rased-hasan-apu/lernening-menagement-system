import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Navigation from '../Sheared/Navegation/Navigation';

const Courses = () => {
  const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch(`https://mighty-anchorage-74891.herokuapp.com/addCourse`)
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
  
    return (
        <div>
           <Navigation></Navigation> 
           <Box sx={{ flexGrow: 1, mt: 5 }} style={{ paddingTop: "30px", paddingBottom: '100px' }}>
      <Container>
        <Typography sx={{ fontFamily: 'Raleway', fontWeight: "700", pb: 0, float: "left" }} variant="h3" gutterBottom component="div">
          <span style={{ borderBottom: '3px solid red', fontStyle: 'italic' }}>To</span>p Courses
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: "30px" }}>
        {courses.map(course =>
            <Course
              key={course._id}
              course={course}
            ></Course>
          )}

        </Grid>
      </Container>
    </Box>
        </div>
    );
};

export default Courses;