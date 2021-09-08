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