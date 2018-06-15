import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  loginUser() {
    const { email, password } = this.props;
    console.log('Press login');
    this.props.loginUser({ email, password });
  }

  renderError() {
    if(this.props.error) {
      return (
        <View>
          <Text style={style.errorStyle}>
            Authentication Issues
          </Text>
        </View>
      );
    }
  }

  renderSpinner() {
    if(this.props.loading) {
      return <Spinner />
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Email"
           placeholder="asdf@adf.com"
           onChangeText={this.onEmailChange.bind(this)}
           value={this.props.email}
            />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          label="password"
           placeholder="password"
           onChangeText={this.onPasswordChange.bind(this)}
            />
        </CardSection>
        {this.renderError()}
        <CardSection>
          <Button onPress={this.loginUser.bind(this)}>
            Login
          </Button>
        </CardSection>
        {this.renderSpinner()}
      </Card>
    );
  }
}


const style = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

// state is returned from the reducer and routed through the connector
const mapStateToProps = state => {
  //auth from ./reducers/index where the reducers are bundled in an object
  // email is now available on .props
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  })(LoginForm);
