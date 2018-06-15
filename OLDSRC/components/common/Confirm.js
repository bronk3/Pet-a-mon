import React from 'react';
// import from single file because common will hold
// confirm and dont want a cyclical call
import { CardSection } from './CardSection';
import { Button } from './Button';
import { Text, Modal, View } from 'react-native';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles;
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
      >
      <View
      style={ containerStyle }>

        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection  style={cardSectionStyle}>
          <Button onPress={ onAccept }>Yes</Button>
          <Button onPress={ onDecline }>No</Button>
        </CardSection>

      </View>
    </Modal>
  );
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
}

export { Confirm };
