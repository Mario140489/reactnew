import React from 'react';
import {Route,Redirect,Router} from 'react-router';

const PrivateRoute = props =>{
    const isLogged = !!localStorage.getItem('token')
    return isLogged ? <Route {...props}/> : <Redirect to="/Login"/>
}

export default PrivateRoute