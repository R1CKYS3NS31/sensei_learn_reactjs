import React from "react";

export default function Classes() {
  class Car {
    constructor(name) {
      this.brand = name;
    }

    present() {
      return "I have a " + this.brand;
    }
  }

  const myCar = new Car("Ford");
  // document.write(myCar.present)

  // class inheritance
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }
    show() {
      return this.present() + ", it is a " + this.model;
    }
  }

  const myCarModel = new Model("Ford", "Mustang");

  return (
    <div>
      <h1>ES6 Classes</h1>
      <p>{myCar.present()}</p>
      <p>{myCarModel.show()}</p>
    </div>
  );
}
