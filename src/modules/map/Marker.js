import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Marker extends Component {
    static propTypes = {
        text: PropTypes.string
    };


    render () {

        return(

            <div>
                <div style={{
                  position: 'relative', color: 'white', background: 'red',
                  height: 40, width: 60, top: -20, left: -30,
                }}>
                  {this.props.text}
                </div>
            </div>

        )

    }

}

export default Marker;