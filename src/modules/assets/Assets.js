import React, { Component } from 'react'

const img = require('../../assets/images/test.jpg');

class Assets extends Component {

  render () {

    return(
        <div>
            <h2>Modulo Assets</h2>
            <img src={img} />
        </div>
    )

  }

}

export default Assets;