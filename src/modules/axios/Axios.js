import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import axios from 'axios';



class AxiosModule extends Component {
    state : {
        token: ''
    }

    getToken = () => {

        axios
        .post('http://al-server.localhost.com/api/authenticate',{
            username: 'rbutta@gmail.com',
            password: 'rbutta',
        },{
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "test": "headertestrodrigobutta"
                },
        })
        .then(res => {

            console.log(res.data)

            var token = res.data.token;

            this.setState({token: token});

        })
        .catch(err => console.log(err));


    }


    testRequest = () => {

        // const AuthStr = 'Bearer '.concat(this.state.token);
        const URL = 'http://al-server.localhost.com/api/items';

        // axios.get(URL, { headers: { Authorization: AuthStr } }).then(response => {
        //     console.log(response.data);
        // })
        // .catch((error) => {
        //     console.log('error 3 ' + error);
        // });

        axios.get(URL).then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log('error 3 ' + error);
        });


        // axios
        // .post('http://al-server.localhost.com/api/items',{
        //     aaa: '1111',
        //     bbb: '222'
        // },{
        //     headers: {
        //         "Authorization": "Bearer " + this.state.token,
        //         "X-Requested-With": "XMLHttpRequest"
        //     }
        // })
        // .then(res => {

        //     console.log(res)


        // })
        // .catch(err => console.log(err));


    }



    render () {

            return(
                <div>
                    <h2>Modulo Axios</h2>


                    <button onClick={this.getToken} >Negociar AUTH TOKEN con User/Pass</button>
                    <br/><br/>
                    <button onClick={this.testRequest} >Probar request con TOKEN</button>

                </div>
            )

        }

    }



export default AxiosModule;
