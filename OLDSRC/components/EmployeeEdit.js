import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { View } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
     // Fill our model up with all the current values of employee
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name,  phone, shift } = this.props;
    const uid = this.props.employee.uid;
    this.props.employeeEdit({ name, phone, shift, uid });
  }

  onTextPress() {
    const { name, phone, shift } = this.props;
    Communications.text(phone, `Hey ${name}, your shift is on ${shift}`);
  }

  onAccept() {
  const uid = this.props.employee.uid;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({showModal: false});
  }

  render () {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Send text
            </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => {this.setState({ showModal: !this.state.showModal })}}
          >Fire</Button>
        </CardSection>

        <Confirm
        visible={ this.state.showModal }
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
         >
          Are you sure you want to fire?
        </Confirm>
      </Card>
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
}

export default connect(mapStateToProps, { employeeUpdate, employeeEdit, employeeDelete })(EmployeeEdit);
