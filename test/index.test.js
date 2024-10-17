/*const { describe } = require("yargs");
const makingLogo = require("../index.js"); // import index
const { it } = require("node:test");

describe("makingLogo", () => {
  describe("Circle", () => {
    it("should make a circle logo", () => {
      const shape = "Circle";
      const index = new Index();
      expect(index).toEqual(total);
    });
  });
});*/

const Shape = require("../lib/shapes"); // Ensure this is the correct import
// Use the correct testing fraework

describe("shape", () => {
  describe("Circle", () => {
    it("should make a circle logo", () => {
      const shape = new Shape.Circle();
      const total = `<circle cx="150" cy="100" r="80" fill="${this.color}" /> `; // Define what the expected output should be
      expect(shape.render()).toEqual(total);
    });
  });
});
describe("shape", () => {
  describe("Square", () => {
    it("should make a Square logo", () => {
      const shape = new Shape.Square();
      const total = `<rect x="10" y="10" width="150" height="150" fill="${this.color}" />`; // Define what the expected output should be
      expect(shape.render()).toEqual(total);
    });
  });
});
describe("shape", () => {
  describe("Triangle", () => {
    it("should make a Triangle logo", () => {
      const shape = new Shape.Triangle();
      const total = ` <polygon points="150,30 250,250 50,250" fill="${this.color}" />`; // Define what the expected output should be
      expect(shape.render()).toEqual(total);
    });
  });
});
