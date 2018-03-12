import React, { Component } from 'react'

import DocumentMeta from 'react-document-meta';


class Meta extends Component {

  render () {

    const meta = {
         title: 'REACT EXTEND'
       };


    return(
        <div>

            <DocumentMeta {...meta} extend />

            <h2>Modulo Meta</h2>
        </div>
    )

  }

}

export default Meta;