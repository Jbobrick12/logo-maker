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
  ]);
};

function writeToFile(data) {
  let svg = "";
  if (data.shape === "Circle") {
    selectedShape = new Circle(data.color, data.text, data.textColor);
  } else if (data.shape === "Square") {
    selectedShape = new Square(data.color, data.text, data.textColor);
  } else if (data.shape === "Triangle") {
    selectedShape = new Triangle(data.color, data.text, data.textColor);
  }
  svg = selectedShape.render();

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
