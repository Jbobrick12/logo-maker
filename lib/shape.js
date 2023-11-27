// Creating shape method
class Shapes {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    return `<svg><text fill="${this.textColor}" style="font-size: 20px;">${this.text}</text></svg>`;
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
    return `<svg><rect width="${this.length}" height="${this.length}" style="fill:${this.color};" /><text fill="${this.textColor}" style="font-size: 20px;">${this.text}</text></svg>`;
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
    return `<svg><circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" style="fill:${this.color};" /><text fill="${this.textColor}" style="font-size: 20px;">${this.text}</text></svg>`;
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
    return `<svg><polygon points="${this.side1},0 ${this.side2},0 ${this.side3},${this.side3}" style="fill:${this.color};" /><text fill="${this.textColor}" style="font-size: 20px;">${this.text}</text></svg>`;
  }
}

// Exporting the shapes
module.exports = {
  Shapes,
  Square,
  Circle,
  Triangle,
};
