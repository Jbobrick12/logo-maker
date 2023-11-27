const { Circle, Square, Triangle } = require("./shape");

describe("Shape", () => {
  describe("Square", () => {
    it("should return the area of a square", () => {
      const square = new Square("red", "square", "white", 5);
      expect(square.squareArea()).toEqual(25);
    });
    it("should return the perimeter of a square", () => {
      const square = new Square("red", "square", "white", 5);
      expect(square.squarePerimeter()).toEqual(20);
    });
  });
  describe("Circle", () => {
    it("should return the area of a circle", () => {
      const circle = new Circle("red", "circle", "white", 5);
      expect(circle.circleArea()).toEqual(78.53981633974483);
    });
    it("should return the perimeter of a circle", () => {
      const circle = new Circle("red", "circle", "white", 5);
      expect(circle.circlePerimeter()).toEqual(31.41592653589793);
    });
  });
  describe("Triangle", () => {
    it("should return the area of a triangle", () => {
      const triangle = new Triangle("red", "triangle", "white", 5, 5, 5);
      expect(triangle.triangleArea()).toEqual(10.825317547305483);
    });
    it("should return the perimeter of a triangle", () => {
      const triangle = new Triangle("red", "triangle", "white", 5, 5, 5);
      expect(triangle.trianglePerimeter()).toEqual(15);
    });
  });
});
