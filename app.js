// const fs = require("fs");
const inquirer = require('inquirer');
console.log(inquirer);
//const generatePage = require('./src/page-template');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

 
//const [name, github] = profileDataArgs;
//console.log(name, github);
//const pageHtml = generatePage(name,github);
//fs.writeFile('index.html', generatePage(name, github), err => {
 // if (err) throw err;

//  console.log('Portfolio complete! Check out index.html to see the output!');
// });