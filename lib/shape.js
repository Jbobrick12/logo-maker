// Creating shape method
class Shapes {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text fill="${this.textColor}" style="font-size: 20px;">${this.text}</text></svg>`;
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
    return `<svg width="300" height="200" version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="${this.length}" height="${this.length}" style="fill:${this.color};" /><text text-anchor="middle" fill="${this.textColor}" style="font-size: 40px;">${this.text}</text></svg>`;
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
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" style="fill:${this.color};" /><text x="55" y="125" fill="${this.textColor}" style="font-size: 100px;">${this.text}</text></svg>`;
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
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="${this.side1},0 ${this.side2},0 ${this.side3},${this.side3}" style="fill:${this.color};" /><text text-anchor="middle" fill="${this.textColor}" style="font-size: 40px;">${this.text}</text></svg>`;
  }
}

// Exporting the shapes
module.exports = {
  Shapes,
  Square,
  Circle,
  Triangle,
};
