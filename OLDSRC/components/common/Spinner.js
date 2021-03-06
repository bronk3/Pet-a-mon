import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={style.spinnerStyle}>
      <ActivityIndicator size={ size || 'large' }> </ActivityIndicator>
    </View>
  );
};

const style = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Spinner };
