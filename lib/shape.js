// Creating shape method
class Shapes {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}

//Creating square method
class Square extends Shapes {
  constructor(color, text, textColor, length) {
    super(color, text, textColor);
    this.length = length;
  }
  squareArea() {
    return this.length * this.length;
  }
  squarePerimeter() {
    return this.length * 4;
  }
}

//Creating circle method
class Circle extends Shapes {
  constructor(color, text, textColor, radius) {
    super(color, text, textColor);
    this.radius = radius;
  }
  circleArea() {
    return Math.PI * this.radius * this.radius;
  }
  circlePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

//Creating triangle method
class Triangle extends Shapes {
  constructor(color, text, textColor, side1, side2, side3) {
    super(color, text, textColor);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  triangleArea() {
    let s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3)
    );
  }
  trianglePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Exporting the shapes
module.exports = {
  Square,
  Circle,
  Triangle,
};
