import React, { Component } from 'react'

// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { connect } from 'react-redux';
import * as actions from '../../Actions';


class LoginApp extends Component {

    facebookLoggedIn = (response) => {
        console.log(response);
        this.props.userLogin(response);
        this.props.tokenLoad('NEWTOKEN1111');
    }

    logout = () => {
        this.props.userLogout();
        this.props.tokenRelease();
    }


    render () {

        return(
            <div>

                <h2>Login</h2>

                <div>
                    <h3>{this.props.auth.user.name || 'Sin loguear'}</h3>
                    {this.props.auth.user.id ?
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



const mapStateToProps = (state) => {
  return {
    auth: state.auth_reducer
  }
}

export default connect(mapStateToProps, actions)(LoginApp);