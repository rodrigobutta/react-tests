import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import scriptLoader from 'react-async-script-loader'

import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
// import Paper from 'material-ui/Paper';


import AddressAutoComplete from '../../components/AddressAutocomplete';

import { Grid, Row, Col } from 'react-flexbox-grid';

// https://github.com/TeamWertarbyte/material-ui-chip-input
import ChipInput from 'material-ui-chip-input'


const style = {
  margin: 12,
};



const fruit = [
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



const tags = [
  'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho',
];

class ProfileForm extends Component {

    state = {
        before: {},
        now: {
            birth: null,
            sex: null,
            address: {
                'name': ''
            },
            email: null,
        },
        minDate: null,
        maxDate: null,
        selectedProfessions: [],
        professions: [],
        selectedTags: [],

    };

    constructor(){
        super();

        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 100);
        minDate.setHours(0, 0, 0, 0);
        this.state.minDate = minDate;
        this.state.maxDate = maxDate;

    }


    componentDidMount() {

        // const AuthStr = 'Bearer '.concat(this.props.tokenState.token);



        // axios.get('http://cowork.localhost.com/api/professions/list',
        //     { headers: { Authorization: AuthStr }
        // }).then(response => {
        //     console.log(response.data);
        // })
        // .catch((error) => {
        //     console.log('error 3 ' + error);
        // });






        axios
        .get('profession/list')
        .then(res => this.setState({ professions: res.data }))
        .catch(err => console.log(err))


        axios
        .get('profile/fetch')
        .then(res => {
            console.log(res.data);

            var tmp = res.data.birth.split("-");
            res.data.birth = new Date(tmp[0], tmp[1] - 1, tmp[2]);

            this.setState({
                before: res.data,
                now: res.data
            });

         })
        .catch(err => console.log(err))


    }


    sexHandleChange = (event, index, res) => {
        var now = this.state.now;
            now.sex = res;
        this.setState({now : now});
    }


    birthHandleChange = (event, res) => {

        console.log(res)


        var finaldate = res;
        // var date = new Date(res)
        // var finaldate = date.getFullYear() + '-' + (date.getMonth() + 1)  + '-' + date.getDate();

        // var from = res.data.birth.split("-");
        // res.data.birth = new Date(from[0], from[1] - 1, from[2]);

        var now = this.state.now;
            now.birth = finaldate;
        this.setState({now : now});
    }

    birthHandleFormat = (date) => {

        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    }


    emailHandleChange = (event, index, res) => {
        var now = this.state.now;
            now.email = res;
        this.setState({now : now});
    }


    addressHandleChange = (res) => {
        var now = this.state.now;
            now.address = res;
        this.setState({now : now});
    }









    professionHandleChange = (event, index, res) => this.setState({selectedProfessions : res});

    professionSelectionRenderer = (items) => {
       switch (items.length) {
         case 0:
           return '';
         case 1:
           return this.state.professions[items[0]].name;
         default:
           return `${items.length} perfiles seleccionados`;
       }
     }

     professionMenuItems(items) {
        return items.map((item) => (
          <MenuItem
            key={item.id}
            insetChildren={true}
            checked={this.state.selectedProfessions.indexOf(item.id) > -1}
            value={item.id}
            primaryText={item.name}
          />
        ));
      }


    handleChipsChange = (chips) => {
        // console.log(chips)
        this.setState({selectedTags : chips});
    }


    componentDidUpdate(prevProps, prevState){
        // console.log('componentDidUpdate');
        // console.log(prevState);
    }


    render() {

        let professions = this.state.professions;

        return (

            <form>

                <Grid fluid>
                    <Row>
                        <Col xs={12} md={6}>

                            <SelectField
                                floatingLabelText="Sexo"
                                value={this.state.now.sex}
                                onChange={this.sexHandleChange}
                            >
                                <MenuItem value={null} primaryText="" />
                                <MenuItem value={1} primaryText="Hombre" />
                                <MenuItem value={2} primaryText="Mujer" />
                                <MenuItem value={3} primaryText="Prefiero no decir" />
                            </SelectField>

                        </Col>
                        <Col xs={12} md={6}>

                            <DatePicker
                                hintText="xxxxxx"
                                hintText="Fecha de nacimiento"
                                minDate={this.state.minDate}
                                maxDate={this.state.maxDate}
                                onChange={this.birthHandleChange}
                                //formatDate={this.birthHandleFormat}
                                value={this.state.now.birth}
                                openToYearSelection={true}
                                autoOk={true}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>

                            <AddressAutoComplete
                                hintText="Podés indicar Provincia, Barrio, Domicilio"
                                floatingLabelText="Dónde vivís?"
                                onChange={this.addressHandleChange}
                                value={this.state.now.address.name}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>

                            <TextField
                                hintText=""
                                floatingLabelText="E-mail"
                                onChange={this.emailHandleChange}
                                value={this.state.now.email || ''}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>

                            <SelectField
                                multiple={true}
                                hintText="Perfiles"
                                onChange={this.professionHandleChange}
                                selectionRenderer={this.professionSelectionRenderer}
                                value={this.state.selectedProfessions}
                            >
                                {this.professionMenuItems(professions  )}
                            </SelectField>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>

                            <AutoComplete
                                floatingLabelText="Compañerps 'peah', fuzzy search"
                                filter={AutoComplete.fuzzyFilter}
                                dataSource={fruit}
                                maxSearchResults={5}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>

                            <ChipInput
                              defaultValue={['foo', 'bar']}
                              onChange={(chips) => this.handleChipsChange(chips)}
                              // dataSourceConfig="{ text: 'text', value: 'value' }"
                              dataSource={tags}
                              // onRequestAdd={(chip) => handleAddChip(chip)}
                            // onRequestDelete={(chip, index) => handleDeleteChip(chip, index)}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>

                            <RaisedButton label="Aceptar" primary={true} style={style} onClick={this.formSubmit} />

                        </Col>
                    </Row>
                  </Grid>

                <RaisedButton label="Default" style={style} />
                <RaisedButton label="Secondary" secondary={true} style={style} />
                <RaisedButton label="Disabled" disabled={true} style={style} />

            </form>

        );

    }



    formSubmit = () => {

        console.log('submit');

        console.log(this.state.now);


        if(this.state.now.email != this.state.before.email){

            console.log('cambio de email')

            axios
            .post('profile/email',{
                 data: this.state.now.email
             })
            .then(res => console.log(res))
            .catch(err => console.log(err));

        }

        if(this.state.now.address.name != this.state.before.address.name){

            console.log('cambio de domicilio')

           axios
           .post('profile/address',{
                data: this.state.now.address
            })
           .then(res => console.log(res))
           .catch(err => console.log(err));

        }



        axios
        .post('profile',{
             // sex: 'sex',
             sex: this.state.now.sex,
             birth: this.state.now.birth
         })
        .then(res => console.log(res))
        .catch(err => console.log(err));


    }



}

// export default ProfileForm;



const mapStateToProps = (state, ownProps) => ({
  tokenState: state.tokenReducer
});

const AppContainer = connect(
  mapStateToProps
)(ProfileForm);

// export default AppContainer;


export default scriptLoader(
  [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js'
  ]
)(AppContainer)