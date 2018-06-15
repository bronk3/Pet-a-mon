import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDevIgiE6GTbEZ99AQQ7Lx3pQPD9YLkn_I",
      authDomain: "manager-fdfc9.firebaseapp.com",
      databaseURL: "https://manager-fdfc9.firebaseio.com",
      projectId: "manager-fdfc9",
      storageBucket: "manager-fdfc9.appspot.com",
      messagingSenderId: "277405354249"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider
      // reducer
      // {} - any inital state we wanted - aplicable to server side rendering
      // applyMiddleware - adding additional functionality to our store
      store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent></RouterComponent>
      </Provider>
    );
  }
}

export default App;
