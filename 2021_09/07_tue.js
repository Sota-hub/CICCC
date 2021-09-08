// ===========
// Constructor
// ===========
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Porymophism
Car.prototype.accelarate = function() {
  this.speed += 10;
}

const EV = function(make, speed, charge) {
  // Prototype Inheritance
  Car.call(this, make, speed);
  // Car.call([this], make, speed)
  // ↓
  // this.make = make <- Car.call(this, [make], speed)
  // this.speed = speed <-Car.call(this, make, [speed])

  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

// Porymophism
EV.prototype.accelarate = function() {
  this.speed += 20;
}

// ===
// ES6
// ===
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

// extends -> link to CarCl = Object.create()
class EVCl extends CarCl {
  constructor(make, speed, charge) {
    // super() -> it's contents of CarCl constructor
    super(make, speed);
    this.charge = charge;
  }
}

// =============
// Object.create
// =============
const CarPro = {
  info(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

const EVPro = Object.create(CarPro);
EVPro.info = function(make, speed, charge) {
  CarPro.info.call(this, make, speed);
  this.charge = charge;
}

// Need to make a link to EVPro
const toyota = Object.create(EVPro);
toyota.info('Toyota', 80, 80);
console.log(toyota);