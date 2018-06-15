import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  onRowPress() {
    Actions.employeeEdit( {employee: this.props.employee} );
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={{fontSize: 18, paddingLeft: 20}}>
            {name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
