import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoding}=useAuth();
    if(isLoding){
        return <CircularProgress />
    }
    return (
        <Route {...rest}
           
        render={({location})=> user.email?children:
        
        <Redirect
        to={{
            pathname:'/login',
            state:{from:location}
        }}
        
        ></Redirect>}
        >
    </Route>
    );
};

export default PrivateRoute;