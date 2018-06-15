import Petamon from './Petamon';

class PetamonFactory {
  constructor() {
    var catamon = new Petamon('Catamon' , require('../drawable/catamon.png'));
    var growlamon = new Petamon('Growlamon', require('../drawable/growlamon.gif'));
    var terrieron = new Petamon('Terriermon', require('../drawable/petamon_dog.gif'));
    this.list = {catamon, growlamon, terrieron};
  }
}

export default PetamonFactory;
