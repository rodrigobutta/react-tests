import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux';

// import Rater from '../../components/rater'

import './module2.css';

import Loadable from 'react-loadable';


const LoadableRater = Loadable({
  loader: () => import('../../components/rater'),
  loading() {
    return <div>Loading...</div>
  }
});




class Module2App extends Component {

    render () {

            return(
                <div>
                    <h2>Modulo 2</h2>
                    <h3>{this.props.userState.name || 'Hola Sr. Anonimo en REACT REDUX'}</h3>

                    <LoadableRater total={3} className="face-rater">
                      <Face icon="bad" />
                      <Face icon="normal" />
                      <Face icon="good" />
                    </LoadableRater>

                </div>
            )

        }

    }

//export default Module2App;



class Face extends Component {
  render() {
    let icons = {
      bad: '🙁',
      normal: '😐',
      good: '😍'
    }
    let { isActive, willBeActive, icon, onMouseEnter, onClick } = this.props
    let faceicon = isActive || willBeActive ? icons[icon] : '😶'
    return <span onMouseEnter={onMouseEnter} onClick={onClick}>{faceicon}</span>
  }
}

Face.propTypes = {
  isActive: PropTypes.bool,
  willBeActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  icon: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func
}







const mapStateToProps = (state, ownProps) => ({
  userState: state.userReducer,
});


const AppContainer = connect(
  mapStateToProps
)(Module2App);

export default AppContainer;
