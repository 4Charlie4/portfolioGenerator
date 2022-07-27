const fs = require("fs");
const generatePage = require("./src/pageTemplate.js");

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new error(err);

  console.log("Portfolio Generated! Check index.html.");
});
