import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

// import Rater from '../../components/rater'

import './module2.css';

import Loadable from 'react-loadable';


const RaterZZ = Loadable({
  loader: () => import('../../components/rater'),
  loading() {
    return <div>Loading...</div>
  }
});



class Module2App extends Component {

    rateChangeHandler = (rating, type) => {

        console.log('rateChangeHandler')
        console.log(rating)
        console.log(type)

        // if (type === 'click') {
        //    this.setState({
        //    *   rating: rating
        //    * })
        //   console.log('You rated ' + rating)
        // }


    }

    // handleRate({ rating, type }) {
    //     if (type === 'click') {
    //        this.setState({
    //        *   rating: rating
    //        * })
    //       alert('You rated ' + rating)
    //     }
    //   }

    render () {

            return(
                <div>
                    <h2>Modulo 2</h2>
                    <h3>{this.props.userState.name || 'Hola Sr. Anonimo en REACT REDUX'}</h3>

                    <RaterZZ total={3} className="face-rater" onRate={this.rateChangeHandler}>
                      <Face icon="bad"  />
                      <Face icon="normal"  />
                      <Face icon="good"  />
                    </RaterZZ>

                </div>
            )

        }

    }



class Face extends Component {
    static propTypes = {
        isActive: PropTypes.bool,
        willBeActive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        icon: PropTypes.string,
        onMouseEnter: PropTypes.func,
        onClick: PropTypes.func
    }


  render() {

    let icons = {
      bad: '🙁',
      normal: '😐',
      good: '😍'
    }

    let { isActive, willBeActive, icon, onMouseEnter, onClick } = this.props

    let faceicon = isActive || willBeActive ? icons[icon] : '😶'

    return (
        <span onMouseEnter={onMouseEnter} onClick={onClick}>{faceicon}</span>
    )

  }

}







const mapStateToProps = (state, ownProps) => ({
  userState: state.userReducer,
});


const AppContainer = connect(
  mapStateToProps
)(Module2App);

export default AppContainer;
