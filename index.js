const inquirer = require("inquirer");
const { choices } = require("yargs");
var fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const Svg = require("./lib/svg");
inquirer
  .prompt([
    {
      name: "logoText",
      type: "input",
      message: "Please add no more than 3 letters or numbers for your logo",
    },
    {
      name: "textColor",
      type: "input",
      message: "Please pick a color for the text",
    },
    {
      name: "Shape",
      type: "list",
      message: "Please pick a Shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      name: "shapeColor",
      type: "input",
      message: "Please pick the shape color",
    },
  ])
  .then((answer) => {
    console.log("Hello your logo", answer.logoText, "has been made.");
    makingLogo(answer); // Pass the answer to the function
  });
function makingLogo(answer) {
  // making the logo with a if statment
  let shape = null;
  if (answer.Shape === "Circle") {
    shape = new Circle(answer.shapeColor);
  } else if (answer.Shape === "Square") {
    shape = new Square(answer.shapeColor);
  } else if (answer.Shape == "Triangle") {
    shape = new Triangle(answer.shapeColor);
  }
  const svg = new Svg(shape, answer.logoText, answer.textColor);
  fs.writeFile("logo.svg", svg.render(), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
