class Petamon {
  constructor(name, image) {

    if(arguments.length === 1) {
        // Copy
        const petamon = name;
        this.name = petamon.name;
        this.age = petamon.age;
        this.weight = petamon.weight;
        this.image = petamon.image;
        this.text = this.name;
    } else {
      //create
      this.name = name;
      this.age = 0;
      this.weight = 8;
      this.image = image;
      this.text = this.name;
    }
  }

  greetings() {
    return `Hi! You! my name is ${this.name}`;
  }
}

export default Petamon;
