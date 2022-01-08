// // TODO: Create an array of questions for user input
const questions = [
{
    
},
{
  
},




];

var fs = require('fs');
var inquirer = require('inquirer');
inquirer
  .prompt([
    {type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,}
  ])
  .then((answers) => {
      console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  // console.log("it is working")
fs.appendFile('README.md',
 `
 Hello this is a test readme!
 
 
 `
 , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  