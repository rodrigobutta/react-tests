import React, { Component } from 'react'

import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

import axios from 'axios';


// import _ from 'lodash';
import debounce from 'lodash/debounce';



class Search extends Component {
    state = {
        users: []
    }

    constructor(props) {
       super(props);


       // this.users = [];



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




   }


   componentDidMount() {
       this.getList();
   }



    getList = () => {


        // this.setState({users: [
        //     {
        //       "id": 110,
        //       "name": "Pablo Crtt"
        //     },
        //     {
        //       "id": 143,
        //       "name": "Facundo Bettencourt"
        //     },
        //     {
        //       "id": 208,
        //       "name": "Martin Bussetti"
        //     },
        //     {
        //       "id": 249,
        //       "name": "Manu Peruzzotti"
        //     },
        //     {
        //       "id": 287,
        //       "name": "Giuli Gabetta"
        //     },
        //     {
        //       "id": 326,
        //       "name": "Alejandro Simonetti"
        //     },
        //     {
        //       "id": 414,
        //       "name": "Alex Gottfried Bonder"
        //     },
        //     {
        //       "id": 473,
        //       "name": "Mariela Pasotti"
        //     },
        //     {
        //       "id": 519,
        //       "name": "Laura Van Micheletto"
        //     },
        //     {
        //       "id": 550,
        //       "name": "Little Melita Tenderly"
        //     },
        //     {
        //       "id": 665,
        //       "name": "Sofi Padelletti"
        //     },
        //     {
        //       "id": 790,
        //       "name": "Natty Llanes"
        //     },
        //     {
        //       "id": 792,
        //       "name": "Yamila Ailén Getter"
        //     },
        //     {
        //       "id": 855,
        //       "name": "Day Giotti"
        //     },
        //     {
        //       "id": 879,
        //       "name": "Stan Catti"
        //     },
        //     {
        //       "id": 892,
        //       "name": "Petter Minogue"
        //     },
        //     {
        //       "id": 893,
        //       "name": "Mel Battaglini"
        //     },
        //     {
        //       "id": 905,
        //       "name": "Natty Morillas"
        //     },
        //     {
        //       "id": 909,
        //       "name": "Rochi Dittus"
        //     },
        //     {
        //       "id": 920,
        //       "name": "Maria Pilar Pittoni Nuñez"
        //     },
        //     {
        //       "id": 943,
        //       "name": "Natt Campanile"
        //     },
        //     {
        //       "id": 971,
        //       "name": "Daniel Scotte"
        //     },
        //     {
        //       "id": 1027,
        //       "name": "Alicia Feregotto Garayo"
        //     },
        //     {
        //       "id": 1045,
        //       "name": "Giuu Galetti"
        //     },
        //     {
        //       "id": 1051,
        //       "name": "Fernando Brischetto"
        //     },
        //     {
        //       "id": 1119,
        //       "name": "Francisco Culotta"
        //     },
        //     {
        //       "id": 1191,
        //       "name": "Lett Bertoncello"
        //     },
        //     {
        //       "id": 1234,
        //       "name": "Ricardo Daniel Pretta"
        //     },
        //     {
        //       "id": 1341,
        //       "name": "Melisa Filippetti"
        //     },
        //     {
        //       "id": 1574,
        //       "name": "Guada Scarpatti"
        //     },
        //     {
        //       "id": 1609,
        //       "name": "Milagros Betti"
        //     },
        //     {
        //       "id": 1694,
        //       "name": "Ghiretti Agustin"
        //     },
        //     {
        //       "id": 1728,
        //       "name": "Humberto Lanzillotta"
        //     },
        //     {
        //       "id": 1747,
        //       "name": "Juana Pernigotti"
        //     },
        //     {
        //       "id": 1763,
        //       "name": "Katty Acosta"
        //     }
        // ] });



    }


    searchUsers = (query,b) => {

        console.log(b)

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



  render () {

    const dataSourceConfig = {
      text: 'name',
      value: 'id'
    };



    return(
        <div>
            <h2>Modulo Search</h2>



            <AutoComplete
                floatingLabelText="'peah', fuzzy search"
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.items}
                maxSearchResults={5}
            />



            <AutoComplete
                floatingLabelText="Con AJAX"
                filter={AutoComplete.fuzzyFilter}
                dataSourceConfig={dataSourceConfig}
                dataSource={this.state.users}
                maxSearchResults={5}
                onUpdateInput={debounce((value) => this.searchUsers(value), 500)}
                filter={(searchText: string, key: string) => true}
            />

        </div>
    )

  }

}

export default Search;