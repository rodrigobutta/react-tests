import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import { connect } from 'react-redux';

class PrivateRoute extends Component {
    // state = {
    //     isLoggedIn: false
    // };



    // fakeAuth = () => {
    //   // return this.props.userState.name ? true : false;

    //   return true;
    // };



    render () {

        // const isLoggedIn = this.state.isLoggedIn;
        const isLoggedIn = this.props.userState.name ? true : false;

        return (
            <div>
                {isLoggedIn ? (
                    <Route path={this.props.path} component={this.props.component} />
                ) : (
                    <h1>Estas deslogueado</h1>
                )}
            </div>
        );

    }

}



const mapStateToProps = (state, ownProps) => ({
  userState: state.userReducer,
});


const AppContainer = connect(
  mapStateToProps
)(PrivateRoute);

export default AppContainer;

// export default PrivateRoute;