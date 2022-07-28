const inquirer = require("inquirer");

const userQues = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub UserName?",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your github username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Bio",
      message: "Provide some information about yourself.",
    },
  ]);
};

const userProject = (portfolioData) => {
  console.log(`
=================

Add a New Project

=================
`);

  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Describe your Project(Required)",
        validate: (descInput) => {
          if (descInput) {
            return true;
          } else {
            console.log("Please enter your project description");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "language",
        message:
          "What programming languages does your project use?(Check all that Apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "JQuery",
          "BootStrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Provide a link for your project(Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("Please provide a link to your project");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to add another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return userProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

userQues()
  .then(userProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });

// const fs = require("fs");
// const generatePage = require("./src/pageTemplate.js");

// const webHTML = generatePage(name, github);

// fs.writeFile("./index.html", webHTML, (err) => {
//   if (err) throw new error(err);

//   console.log("Portfolio Generated! Check index.html.");
// });
