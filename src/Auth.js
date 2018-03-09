import React from 'react'


import {
  Route,
  Redirect
} from "react-router-dom";


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


export const authService = {

  isAuthenticated: false,
  login() {
    this.isAuthenticated = true
  },
  logout() {
    this.isAuthenticated = false
  }

}
