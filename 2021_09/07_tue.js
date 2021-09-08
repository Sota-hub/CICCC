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