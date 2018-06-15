import React from 'react';
import ReactNative, { View, Text } from 'react-native';
import ChoosePet from './components/ChoosePet';
import Main from './components/Main';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
          <Scene key="choosePet" component={ChoosePet} title="I Choose You!" />
          <Scene key="main" component={Main} title="My Baby!" />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
