const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
// const fs = require("fs");
// const generatePage = require("./src/pageTemplate.js");

// const webHTML = generatePage(name, github);

// fs.writeFile("./index.html", webHTML, (err) => {
//   if (err) throw new error(err);

//   console.log("Portfolio Generated! Check index.html.");
// });
