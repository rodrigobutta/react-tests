import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import CircularProgress from 'material-ui/CircularProgress';


import axios from 'axios';

class Item extends Component {

    state = {
        loading: true,
        user: null
    };


    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.number,
        onClick: PropTypes.func
      }


    constructor(props) {
        super(props);

        this.getUser(this.props.id);

    }



    getUser = (id) => {

        axios
        .post('http://cowork.localhost.com/api/user/' + id)
        .then(res => {

            // this.setState({loading: false})

            this.setState({ loading: false,
                            user: res.data
                        });

        }
        )
        .catch(err => console.log(err));

    }


    onClickHandler = (e) => {
        if (typeof this.props.onClick === 'function') {
            e.preventDefault();
            this.props.onClick(this);
        }
    }


    render() {

        if(this.state.loading){
            return (
            <div className="user-item" data-id={this.props.id} onClick={this.onClickHandler}>
            <CircularProgress mode="indeterminate" thickness={4} color="#ccc" />
            </div>
            );
        }
        else{
            return (
            <div className="user-item" data-id={this.props.id} onClick={this.onClickHandler}>
                    <p>TEMP NAME: {this.props.name}</p>
                    <h2>{this.state.user.name || 'SIN NOMBRE'}</h2>
                    <p>{this.state.user.profession.id || 'SIN PROFESSION'}</p>

            </div>
            );
        }

    }


}

export default Item;