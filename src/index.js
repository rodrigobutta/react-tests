import React from "react";
import { render } from "react-dom";

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppContainer from "./MainApp";

import { Provider } from 'react-redux';
import store from './Store';

import axios from 'axios';
import join from 'url-join';


// TMP
import * as actions from './Actions';
import { TEXT_CHANGED } from './Actions/types';


axios.interceptors.request.use(function (config) {

    var isAbsoluteURLRegex = /^(?:\w+:)\/\//;
    if ( !isAbsoluteURLRegex.test(config.url) ) {
        config.url = join('http://cowork.localhost.com/api/', config.url);
    }

    // TMP
    const action = {
        type: TEXT_CHANGED,
        payload: 'DESDE INTERCEPTORS'
      }
    store.dispatch(action)
    // TMP

    var token = store.getState().auth_reducer;
    if (token) {
        config.headers['authorization'] = 'Bearer ' + token;
    }

  // config.headers['X-Requested-With'] = 'XMLHttpRequest';
  // config.headers['Expires'] = '-1';
  // config.headers['Cache-Control'] = "no-cache,no-store,must-revalidate,max-age=-1,private";

    return config;

}, function (err) {

  return Promise.reject(err);
});



function App() {
  return (

    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
        <AppContainer />
    </div>
    </MuiThemeProvider>

  )
}

render(
    <Provider store={store}>
        <App />
      </Provider>, document.querySelector("#app")
);
