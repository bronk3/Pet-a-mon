import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({name, phone, shift});
  }

  render() {
    return (
      <View>
      <Card>
      <EmployeeForm { ...this.props } />
            <CardSection>
              <Button
                onPress={this.onButtonPress.bind(this)}
              >Create</Button>
            </CardSection>
            </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  }
};

// map state to props & {actions}
export default connect(mapStateToProps, { employeeSave })(EmployeeCreate);
