// import using require

// declare class
const Shape = require("./shape");

class Circle extends Shape {
  constructor(color) {
    super();
  }
  calculateArea() {}
}

module.exports = Circle;

// export class using module.exports
