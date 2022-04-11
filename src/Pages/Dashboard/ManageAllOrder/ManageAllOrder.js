import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Sheared/Footer/Footer';
import './ManageAllOrder.css'
const ManageAllOrder = () => {
    
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orderData`)
          .then(res => res.json())
          .then(data => setmyOrders(data))
      }, []);

    return (
        <Box>
        <Typography variant="h2" sx={{ mb: 10, }}> Manage Users Order list </Typography>
        <Box className="manage-products">
          <TableContainer component={Paper} className="manageOrder">
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell >Name</TableCell>
                  <TableCell>Course name</TableCell>
                  <TableCell>Class Time</TableCell>
                  <TableCell>Coustomer number</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
               {
                   myOrders.map((row,index)=>  
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
                   <TableCell >{row?.contract}</TableCell>
                 </TableRow>
                 )}
                 
                  
                
              </TableBody>
            </Table>
          </TableContainer>
          <Footer></Footer>
        </Box>
      </Box>
    );
};

export default ManageAllOrder;