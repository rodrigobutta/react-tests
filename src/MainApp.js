import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import { connect } from 'react-redux';

import {
  loginUser,
  logoutUser,
} from './redux';

// import PrivateRoute from "./components/PrivateRoute";

import Module1App from "./modules/module1/module1";
import Module2App from "./modules/module2/module2";
import UserApp from "./modules/user/user";
import LoginApp from "./modules/user/login";


export class MainApp extends Component {

    render() {


        return (

            <Router>
            <div>
                <header style={{backgroundColor:'#ddd'}}>
                    <h1>REACT Test</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                        <li><Link to="/module1">Modulo 1</Link></li>
                        <li><Link to="/module2">Modulo 2</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/user">Usuario</Link></li>
                    </ul>



                    <hr />
                </header>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/module1" component={Module1App} />
                <Route path="/module2" component={Module2App} />

                <Route path="/login" component={LoginApp} />
                <PrivateRoute path="/user" component={UserApp} />


            </div>
            </Router>

        )
    }

};

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Ahora un topico.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
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


export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}




// REDUX

const mapStateToProps = (state, ownProps) => ({
  userState: state.userReducer,
});


const AppContainer = connect(
  mapStateToProps
)(MainApp);

export default AppContainer;
