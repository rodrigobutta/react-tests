import React, { Component } from 'react'

import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

import axios from 'axios';


// import _ from 'lodash';
import debounce from 'lodash/debounce';

import Item from './Item';


class Search extends Component {
    state = {
        users: [],
        userlist: [],
        usersAdded: []
    }

    constructor(props) {
       super(props);

       this.items = [
         'Apple', 'Apricot', 'Avocado',
         'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
         'Boysenberry', 'Blood Orange',
         'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
         'Coconut', 'Cranberry', 'Clementine',
         'Damson', 'Date', 'Dragonfruit', 'Durian',
         'Elderberry',
         'Feijoa', 'Fig',
         'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
         'Honeydew', 'Huckleberry',
         'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
         'Kiwi fruit', 'Kumquat',
         'Lemon', 'Lime', 'Loquat', 'Lychee',
         'Nectarine',
         'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
         'Olive', 'Orange',
         'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
         'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
         'Quince',
         'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
         'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
         'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
         'Ugli fruit',
         'Watermelon',
       ];




       this.complexItems = [
         {
             text: 'text-value1',
             value: (
               <MenuItem
                 primaryText="text-value1"
                 secondaryText="&#9786;"
               />
             ),
           },
           {
             text: 'text-value2',
             value: (
               <MenuItem
                 primaryText="text-value2"
                 secondaryText="&#9786;"
               />
             ),
           },
       ];


       this.populateUsers();




   }




   populateUsers = () => {

       axios
       .post('http://cowork.localhost.com/api/user/all')
       .then(res => {

           this.setState({userlist: res.data});

       }
       )
       .catch(err => console.log(err));

   }



    searchUsers = (query) => {
        console.log('searchUsers')

        axios
        .post('http://cowork.localhost.com/api/user/search',{
             q: query
         })
        .then(res => {

            this.setState({users: res.data});

        }
        )
        .catch(err => console.log(err));

    }


    handleNewRequest = (chosenRequest,idx) => {

        console.log('handleNewRequest')


        if (idx>-1)  //only allow selected items to be added
        {


            console.log(chosenRequest)


            this.setState({
                usersAdded: this.state.usersAdded.concat([
                        {
                            id: chosenRequest.id,
                            name: chosenRequest.name
                        }
                ])
            })



            // console.log(idx)

            // this.setState( { searchText: '' })

            // do something with the chosenRequest, eg rest request
             setTimeout(()=>{
                    this.refs[`autocomplete`].setState({searchText:''});
                    this.refs[`autocomplete`].focus();
                }, 400);
        }
    }



  render () {

    const dataSourceConfig = {
      text: 'name',
      value: 'id'
    };



    return(
        <div>
            <h2>Modulo Search</h2>



            <AutoComplete
                floatingLabelText=" Array Local Tipear 'peah' (fuzzy search)"
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.items}
                maxSearchResults={5}
                fullWidth={true}
            />

            <AutoComplete
                 floatingLabelText="Array local con OBJETO como rsultado"
                 filter={AutoComplete.noFilter}
                 dataSource={this.complexItems}
                 openOnFocus={true}
                 fullWidth={true}
            />



            <AutoComplete
                floatingLabelText="AJAX search con Debounce al tipear"
                filter={AutoComplete.fuzzyFilter}
                dataSourceConfig={dataSourceConfig}
                dataSource={this.state.users}
                maxSearchResults={5}
                fullWidth={true}
                onUpdateInput={debounce((value) => this.searchUsers(value), 500)}
                filter={(searchText: string, key: string) => true}
            />



            <AutoComplete
                floatingLabelText="Precarga desde AJAX"
                filter={AutoComplete.fuzzyFilter}
                dataSourceConfig={dataSourceConfig}
                dataSource={this.state.userlist}
                maxSearchResults={5}
                fullWidth={true}
                ref={`autocomplete`}
                onNewRequest={this.handleNewRequest}
            />



            {
                this.state.usersAdded.map((item) => (
                    <Item key={item.id} id={item.id} name={item.name}/>
                ))
            }

               <Item
                   id={1}
               />

        </div>
    )

  }

}

export default Search;