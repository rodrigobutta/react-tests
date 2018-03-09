import React, { Component } from 'react'

import { connect } from 'react-redux';

import {
  loginUser,
  logoutUser,
} from '../../redux';


import { fakeAuth } from '../../MainApp';


// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


class LoginApp extends Component {


    facebookLoggedIn = (response) => {
        console.log(response);

        this.props.loginUser(response)

        fakeAuth.authenticate();

        // this.props.loginUser({ name: 'Rodrigo Usuario' })

    }


    logout = () => {

        this.props.logoutUser();

        fakeAuth.signout();

    }



    render () {

        return(
            <div>

                <h2>Login</h2>

                <div>
                    <h3>{this.props.userState.name || 'Anonimo'}</h3>
                    {this.props.userState.name ?
                        <button onClick={this.logout}>Salir</button> :
                        <FacebookLogin
                            appId="276409852891457"
                            autoLoad={false}
                            fields="name,email,picture.type(large),first_name,last_name"
                            // onClick={componentClicked}
                            callback={this.facebookLoggedIn}
                            render={renderProps => (
                                <button onClick={renderProps.onClick}>Entrar</button>
                            )}
                        />

                    }
                </div>

            </div>
        )

    }

}




// REDUX

const mapStateToProps = (state, ownProps) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = {
  loginUser,
  logoutUser,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginApp);

export default AppContainer;

