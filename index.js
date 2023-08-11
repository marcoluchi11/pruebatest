class Pez {
  constructor(name, age, height, wingspan) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.wingspan = wingspan;
  }
  doProtectedLayup() {
    console.log("score two points");
  }
  doRandomJoke() {
    console.log(`${this.name} says random joke, everyone laugh at it`);
  }
}

const boga = new Pez("Marco", 30, "2mts", "Few");

console.log(boga.doProtectedLayup());
