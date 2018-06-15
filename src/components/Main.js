import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Content, Container, Button, Footer, FooterTab, Badge } from 'native-base';
import PetamonFactory from '../models/PetamonFactory';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {

  render () {
    console.log('ha ha', arguments, this.props);
    const { newPet } = this.props;
    return (
      <Container>
      <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{ height: 300, width: 300 }} source={newPet.image} />
      <Text>{newPet.greetings()}</Text>
</Content>
      <Footer>
          <FooterTab>
            <Button badge vertical onPress={() => Actions.choosePet()}>
              <Badge><Text>2</Text></Badge>
              <Text>Feed</Text>
            </Button>
            <Button vertical>
              <Text>Stats</Text>
            </Button>
            <Button active badge vertical>
              <Badge><Text>51</Text></Badge>
              <Text>Fun</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
