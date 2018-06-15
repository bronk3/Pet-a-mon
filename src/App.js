import React, { Component } from 'react';
//import Main from './src/components/Main';
import ChoosePet from './components/ChoosePet';
import RouterComponent from './Router';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <RouterComponent />
    );
  }
}

export default App;
