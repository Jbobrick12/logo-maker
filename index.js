const fs = require("fs");
const inquirer = require("inquirer");
const { Shapes, Circle, Square, Triangle } = require("./lib/shape");

const questions = [
  "What shape would you like to create?",
  "What color would you like the shape to be?",
  "What text would you like the shape to have?",
  "What color would you like the text to be?",
];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: questions[0],
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "color",
      message: questions[1],
      choices: [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "black",
        "white",
      ],
    },
    {
      type: "input",
      name: "text",
      message: questions[2],
    },
    {
      type: "input",
      name: "textColor",
      message: questions[3],
      choices: [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "black",
        "white",
      ],
    },
    {
        type: "input",
        name: "radius",
        message: "What is the radius of the circle?",
        when: (answers) => answers.shape === "Circle",
        },
        {
        type: "input",
        name: "length",
        message: "What is the length of the square?",
        when: (answers) => answers.shape === "Square",
        },
        {
        type: "input",
        name: "side1",
        message: "What is the length of side 1 of the triangle?",
        when: (answers) => answers.shape === "Triangle",
        },
        {
        type: "input",
        name: "side2",
        message: "What is the length of side 2 of the triangle?",
        when: (answers) => answers.shape === "Triangle",
        },
        {
        type: "input",
        name: "side3",
        message: "What is the length of side 3 of the triangle?",
        when: (answers) => answers.shape === "Triangle",
    }
  ]);
};

function writeToFile(data) {
  let svg = "";
  if (data.shape === "Circle") {
    selectedShape = new Circle(data.color, data.text, data.textColor, data.radius);
  } else if (data.shape === "Square") {
    selectedShape = new Square(data.color, data.text, data.textColor, data.length);
  } else if (data.shape === "Triangle") {
    selectedShape = new Triangle(data.color, data.text, data.textColor, data.side1, data.side2, data.side3);
  }
  svg = selectedShape.render();
  svg += `<text x="50%" y="50%" fill="${data.textColor}">${data.text}</text>`;

  return svg;
}

function init() {
  promptUser()
    .then((data) => {
      console.log(data);
      const svg = writeToFile(data);
      fs.writeFile("Test.svg", svg, (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log("The file has been saved!");
      });
    })
    .catch((err) => console.log(err));
}

init();
