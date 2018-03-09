import React from "react";
import { render } from "react-dom";

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppContainer from "./MainApp";

import { Provider } from 'react-redux';
import { store } from './redux';


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
