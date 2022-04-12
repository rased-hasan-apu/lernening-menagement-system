import { Alert, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Sheared/Footer/Footer';


const MyCourses = () => {
    const {user}=useAuth();
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://mighty-anchorage-74891.herokuapp.com/orderData`)
          .then(res => res.json())
          .then(data => setmyOrders(data))
      }, []);
      const same = myOrders.filter(order => order.email === user.email);
    return (
        <Box>
        <Typography variant="h2" sx={{ mb: 10, }}> My orders (User Order)</Typography>
        <Box className="manage-products">
          <TableContainer component={Paper} className="manageOrder">
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell >Name</TableCell>
                  <TableCell>Course Name</TableCell>
                  <TableCell>Course Duration Year</TableCell>
                  <TableCell>Time</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
               {
                   same.map((row,index)=>  
                   <TableRow
                   key={row?._id}
                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                 >
                   <TableCell className="table-img" component="th" scope="row" >
                       {index}
                    </TableCell>
                   <TableCell >{row?.email}</TableCell>
                   <TableCell >{row?.name}</TableCell>
                   <TableCell >{row?.course}</TableCell>
                   <TableCell >{row?.date}</TableCell>
                   <TableCell >{row?.time}</TableCell>
                  
                 </TableRow>
                 )}
                 
                  
                
              </TableBody>
            </Table>
          </TableContainer>
         
        </Box>
        <Footer></Footer>
      </Box>
    );
};

export default MyCourses;