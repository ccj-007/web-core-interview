class Animal {
  constructor(name) {
    this.age = 2323
    this.name = name
  }
  getName () {
    console.log("1111111111");
    return this.name
  }
}
class Dog extends Animal {
  constructor() {
    super()
    super.getName()
  }
}
let an = new Animal()
console.log(an);