import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../Actions';


class CustomTextInput extends Component {

  onTextChange = (text) => {
    this.props.textChanged(text)
  }

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
      >
		<TextInput
			onChangeText={(text) => this.onTextChange(text)}
			placeholder="Search"
			value={this.props.text}
			style={{ height: 80, width: 200, fontSize: 30 }}
  	    />
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text_reducer.text
  }

}

export default connect(mapStateToProps, actions)(CustomTextInput);
