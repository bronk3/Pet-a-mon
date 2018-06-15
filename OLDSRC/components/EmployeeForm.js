import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
        <Input
        label="Name"
        placeholder="Name"
        value={ this.props.name }
        onChangeText={ value => this.props.employeeUpdate({prop: "name", value}) }
        />
      </CardSection>

        <CardSection>
          <Input
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={ value => this.props.employeeUpdate({prop: "phone", value})}
          />
        </CardSection>

          <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerLabel}>Select Shift:</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({prop: "shift", value})}
            >
              <Picker.Item value="Monday" label="Monday" />
              <Picker.Item value="Tuesday" label="Tuesday" />
              <Picker.Item value="Wednesday" label="Wednesday" />
              <Picker.Item value="Thursday" label="Thursday" />
              <Picker.Item value="Friday" label="Friday" />
              <Picker.Item value="Saturday" label="Saturday" />
              <Picker.Item value="Sunday" label="Sunday" />
          </Picker>
          </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
