// Creating shape method
class Shapes {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    return `<div style="color:${this.textColor};background-color:${this.color};">${this.text}</div>`;
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

  render() {
    return `<div style="color:${this.textColor};background-color:${this.color};width:${this.length}px;height:${this.length}px;">${this.text}</div>`;
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

  render() {
    return `<div style="color:${this.textColor};background-color:${this.color};width:${this.radius}px;height:${this.radius}px;border-radius:50%;">${this.text}</div>`;
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

  render() {
    return `<div style="color:${this.textColor};background-color:${this.color};width:0px;height:0px;border-left:${this.side1}px solid transparent;border-right:${this.side2}px solid transparent;border-bottom:${this.side3}px solid;">${this.text}</div>`;
  }
}

// Exporting the shapes
module.exports = {
  Shapes,
  Square,
  Circle,
  Triangle,
};
