import React, { Component } from 'react';
import { Image } from 'react-native';
import Petamon from '../models/Petamon';
import PetamonFactory from '../models/PetamonFactory';
import { Actions } from 'react-native-router-flux';
import { Container, Header, View, Content, DeckSwiper, Footer, FooterTab, Badge, Card, CardItem, Thumbnail, Button, Text, Left, Body } from 'native-base';

export default class ChoosePet extends Component {

  state = { list: [] }

  componentWillMount () {
    const petStore = new PetamonFactory;
    const petOptions = petStore.list;
    const cards = _.map(petOptions,
      // Need to make a new Petamon in this class or else the require() doesnt work
    (structure, name) => { return new Petamon(structure); } );
    this.selected = cards[0];
    this.setState({list: cards});
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
        <View>
            <DeckSwiper
              dataSource={ this.state.list }
              renderItem={ item => {
                this.selected = item;
                return (<Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={ item.image } />
                      <Body>
                        <Text>{ item.text }</Text>
                        <Text note>NativeBase</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={ item.image } />
                  </CardItem>
                  <CardItem>
                    <Text>{ item.name }</Text>
                  </CardItem>
                </Card>
              );
            }
              }
            />
          </View>
        </Content>
        <Button full success onPress={() => Actions.main({newPet: this.selected}) }>
            <Text>This one!</Text>
          </Button>
      </Container>
    );
  }
}

// import React, { Component } from 'react';
// import { View, Text, Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';
//  //import PetamonFactory from '../models/PetamonFactory';
// import { Content, Container, Button, Footer, FooterTab, Badge, Icon } from 'native-base';
//
// export default class ChoosePet extends Component {
//
//   componentWillMount() {
//     debugger;
// //    const factory = new PetamonFactory;
// //    this.options = factory.list();
//   }
//
//   render() {
//     return (
//       <Container>
//       <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Image style={{ height: 300, width: 300 }} source={require('../drawable/terriermon.png')} />
//         <Button full warning onPress={() => Actions.main()}>
//           <Text>Feed</Text>
//         </Button>
//       </Content>
//       </Container>
//     );
//   }
// }
