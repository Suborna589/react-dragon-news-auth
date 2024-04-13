import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => { 
    const {users,loading}=useContext(AuthContext) 


    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }

    if(users){
        return children;
    }
    return <Navigate to="/login"></Navigate>
    
};

export default PrivateRoute;