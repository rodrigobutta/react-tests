import React, { Component } from 'react'

import { authService } from '../../Auth';

// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { connect } from 'react-redux';
import * as actions from '../../Actions';


class LoginApp extends Component {


    facebookLoggedIn = (response) => {
        console.log(response);

        this.props.userLogin(response)

        this.props.tokenLoad('NEWTOKEN1111')

        authService.login();

        // this.props.userLogin({ name: 'Rodrigo Usuario' })

    }


    logout = () => {

        this.props.userLogout();

        authService.logout();

    }



    render () {

        return(
            <div>

                <h2>Login</h2>

                <div>
                    <h3>{this.props.auth.user.name || 'Sin loguear'}</h3>
                    {this.props.auth.user.name ?
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

// const mapStateToProps = (state, ownProps) => ({
//   userState: state.userReducer,
// });

// const mapDispatchToProps = {
//   userLogin,
//   userLogout,
// };

// const AppContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginApp);

// export default AppContainer;




const mapStateToProps = (state) => {
  return {
    auth: state.auth_reducer
  }

}

export default connect(mapStateToProps, actions)(LoginApp);
