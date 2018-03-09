import React, { Component } from 'react'

import { connect } from 'react-redux';


class Module2App extends Component {

    render () {

            return(
                <div>
                    <h2>Modulo 2</h2>
                    <h3>{this.props.userState.name || 'Hola Sr. Anonimo en REACT REDUX'}</h3>
                </div>
            )

        }

    }

//export default Module2App;


const mapStateToProps = (state, ownProps) => ({
  userState: state.userReducer,
});


const AppContainer = connect(
  mapStateToProps
)(Module2App);

export default AppContainer;
