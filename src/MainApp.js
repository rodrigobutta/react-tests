import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
// import { NavLink } from 'react-router-dom'

import './main.css';

import PrivateRoute from "./components/PrivateRoute";

import Module1App from "./modules/module1/module1";
import Module2App from "./modules/module2/module2";
import UserApp from "./modules/user/user";
import LoginApp from "./modules/user/login";
import MainMap from "./modules/map/MainMap";
import AxiosModule from "./modules/axios/Axios";
import Meta from "./modules/meta/Meta";
import Assets from "./modules/assets/Assets";
import Animation from "./modules/animation/Animation";
import Search from "./modules/material/Search";

import { connect } from 'react-redux';
import * as actions from './Actions';

import DocumentMeta from 'react-document-meta';



export class MainApp extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }


    onClick = () => {
      this.props.textChanged('22222')
    }


    render() {

        const { loading } = this.state;

        if(loading) { // if your component doesn't have to wait for an async action, remove this block
          return null; // render null when app is not ready
        }


        const meta = {
             title: 'REACT Test',
             description: 'I am a description, and I can create multiple tags',
             canonical: 'http://example.com/path/to/page',
             meta: {
               charset: 'utf-8',
               name: {
                 keywords: 'react,meta,document,html,tags'
               }
             }
           };



        return (
            <DocumentMeta {...meta}>

                <Router>
                <div>
                    <header style={{backgroundColor:'#ddd'}}>
                        <h1>REACT Test</h1>
                        <ul className="main-menu">
                            <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                            <li><NavLink activeClassName="active" to="/topics">Topics</NavLink></li>
                            <li><NavLink activeClassName="active" to="/module1">Modulo 1</NavLink></li>
                            <li><NavLink activeClassName="active" to="/module2">Modulo 2</NavLink></li>
                            <li><NavLink activeClassName="active" to="/axios">Axios</NavLink></li>
                            <li><NavLink activeClassName="active" to="/map">Mapa</NavLink></li>
                            <li><NavLink activeClassName="active" to="/meta">Meta</NavLink></li>
                            <li><NavLink activeClassName="active" to="/assets">Assets</NavLink></li>
                            <li><NavLink activeClassName="active" to="/animation">Animation</NavLink></li>
                            <li><NavLink activeClassName="active" to="/search">Search</NavLink></li>

                            <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                            <li><NavLink activeClassName="active" to="/user">* Usuario</NavLink></li>
                        </ul>

                        <h2>{this.props.text}</h2>
                        <button onClick={this.onClick} >Cambiar State</button>

                        <hr />
                    </header>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/module1" component={Module1App} />
                    <Route path="/module2" component={Module2App} />
                    <Route path="/axios" component={AxiosModule} />
                    <Route path="/map" component={MainMap} />
                    <Route path="/meta" component={Meta} />
                    <Route path="/assets" component={Assets} />
                    <Route path="/animation" component={Animation} />
                    <Route path="/search" component={Search} />

                    <Route path="/login" component={LoginApp} />

                    <PrivateRoute path="/user" component={UserApp} auth={this.props.auth.user.id} redirect={"/login"} />

                </div>
                </Router>

            </DocumentMeta>
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
    <ul className="sub-menu">
      <li>
        <NavLink to={`${match.url}/rendering`} activeClassName="active">Rendering with React</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/components`} activeClassName="active">Components</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/props-v-state`} activeClassName="active">Props v. State</NavLink>
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



const mapStateToProps = (state) => ({
    text: state.text_reducer.text,
    auth: state.auth_reducer
});

export default connect(mapStateToProps, actions)(MainApp);
