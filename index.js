// // TODO: Create an array of questions for user input
const questions = [
{
  
    type: 'input',
    name: 'projectName',
    message: 'What is the project name?',
    default: "Title goes here",
    
  
},
{
  type: 'input',
  name: 'description',
  message: "What is the project's description?",
  default: "Project description goes here",

},
{
  type: 'input',
  name: 'installInstr',
  message: "Are there any installation instructions?",
  default: "",

},
{
  type: 'input',
  name: 'usageInfo',
  message: "What is the project's usage information?",
  default: "",

},
{
  type: 'input',
  name: 'contributionGuidelines',
  message: "Are there any contribution guidelines?",
  default: "",

},
{
  type: 'input',
  name: 'testInstr',
  message: "Are there any test instructions?",
  default: "",

},
{
  type: 'list',
  name: 'license',
  message: "Select the type of license from the list.",
  choices: [
    "ISC",
  
  "Other",
  
  ],

},
{
  type: 'input',
  name: 'github',
  message: "What is the GitHub associated with this readme?",
  default: "",

},
{
  type: 'input',
  name: 'email',
  message: "What is your email address?",
  default: "",

},
];

var fs = require('fs');
var inquirer = require('inquirer');

inquirer
  .prompt(questions)
  .then((data) => {
      console.log(data.description);
      return generator(data);
      //console.log(data.projectName)
      // const dataset = (JSON.stringify(answers, null, '  '));
      // console.log(dataset);
      // console.log(dataset);
      
  })
  .catch((error) => {
    if (error.isTtyError) {
      "Prompt couldn't be rendered in the current environment"
    } else {
       "Something else went wrong"
    }
  });
  // console.log("it is working")
const generator = data => { 
fs.appendFile('README.md',
 `
 
## Description
${data.description} \n
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
* [Github](#github)
* [Email](#email)
* [License](#license)
* [Repo](#repo)


## Installation
${data.installInstr} \n
## Usage
${data.usageInfo} \n
## Contributors
${data.contributionGuidelines} \n
## Tests
${data.testInstr} \n
### Questions
\n
## Github
[Check out my GitHub at](https://github.com/${data.github}). \n
## Email
Contact me at <a href="MAILTO:${data.email}">${data.email}</a> if you have additional questions. \n
## License
!The license for this repo is covered under ${data.license}. \n
## Repo
!You can find a link to the repo at www.github.com/mcstewart76/${data.projectName} .
 `
 , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};
  