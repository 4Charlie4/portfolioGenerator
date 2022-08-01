const fs = require("fs");
const generatePage = require("./src/pageTemplate.js");
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
      type: "confirm",
      name: "confirmAbout",
      message: 'Would you like to enter info for the "Bio" section?',
      default: true,
    },
    {
      type: "input",
      name: "Bio",
      message: "Provide some information about yourself.",
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      },
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
const testData = {
  name: "Lernantino",
  github: "lernantino",
  confirmAbout: true,
  about:
    "Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.",
  projects: [
    {
      name: "Run Buddy",
      description:
        "Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.",
      languages: ["HTML", "CSS"],
      link: "https://github.com/lernantino/run-buddy",
      feature: true,
      confirmAddProject: true,
    },
    {
      name: "Taskinator",
      description:
        "Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.",
      languages: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/lernantino/taskinator",
      feature: true,
      confirmAddProject: true,
    },
    {
      name: "Taskmaster Pro",
      description:
        "Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.",
      languages: ["JavaScript", "jQuery", "CSS", "HTML", "Bootstrap"],
      link: "https://github.com/lernantino/taskmaster-pro",
      feature: false,
      confirmAddProject: true,
    },
    {
      name: "Robot Gladiators",
      description:
        "Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.",
      languages: ["JavaScript"],
      link: "https://github.com/lernantino/robot-gladiators",
      feature: false,
      confirmAddProject: false,
    },
  ],
};
// userQues()
//   .then(userProject)
//   .then((portfolioData) => {
const webHTML = generatePage(testData);

 fs.writeFile("./index.html", webHTML, (err) => {
   if (err) throw new error(err);

  console.log("Portfolio Generated! Check index.html.");
 });
// });
