// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  "What is the title of your project?",
  "What is the description?",
  "What are the installation instructions?",
  "What is the usage information?",
  "What are the contribution guidelines?",
  "What are the testing instructions?",
  "What type of license does the project use?",
  "What is your Github username?",
  "What is your email?",
  "How else can someone contact you?",
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
      { type: "input", name: "usage", message: questions[3] },
      {
        type: "input",
        name: "contribution",
        message: questions[4],
      },
      {
        type: "input",
        name: "testing",
        message: questions[5],
      },
      {
        type: "list",
        name: "license",
        choices: [
          "MIT License",
          "Mozilla Public License 2.0",
          "GNU Affero General Public License v3.0",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "None",
        ],
        message: questions[6],
      },
      {
        type: "input",
        name: "github",
        message: questions[7],
      },
      {
        type: "input",
        name: "email",
        message: questions[8],
      },
      {
        type: "input",
        name: "contact",
        message: questions[9],
      },
    ])
    .then((data) => {
      var fileName = "README.md";
      var fileText = generateMarkdown(data);
      writeToFile(fileName, fileText);
    });
}

// Function call to initialize app
init();
