import React from 'react'
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute









//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in