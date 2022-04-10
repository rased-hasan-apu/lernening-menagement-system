import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <>
        <Box className="banner">
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ width: "50%", textAlign: "left" }}>
            <Typography  variant="subtitle1" gutterBottom component="div">
              We Provide Best Quality
            </Typography>
            <Typography  sx={{ fontFamily: 'Raleway', fontWeight: "700", pb: 0, }} variant="h2" gutterBottom component="div">
              <span style={{ borderBottom: '3px solid red' }}>Edu</span>cation  Plane 
            </Typography>
            <Typography  sx={{ fontSize: "12px", fontFamily: 'Raleway', lineHeight: "20px" }} variant="body2" gutterBottom>
            Education has always secured respect from society. In order to ensure a comfortable lifestyle, people should educate themselves and obtain a well-paid job to be successful and satisfied. It helps gain a better reputation and increases the chances of climbing the career ladder more easily and faster. In turn, it provides financial resources for stable lives – people can afford to buy their own house or apartment and thus secure their children’s happiness and success.
            </Typography>
            <Link to="/course"><div  className="box-2">
              <div className="custom-btn btn-three">
                <span>Shop Now</span>
              </div>
            </div></Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
        </>
    );
};

export default Banner;