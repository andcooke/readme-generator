const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'What is the title for this project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Please write a Description for this project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please write installation instructions for this project.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please describe how to use your app.',
    name: 'usage',
  },
  {
    type: 'list',
    choices: ["test", "test2"],
    message: 'What kind of license do you have on this project?',
    name: 'license',
  },
  {
    type: 'input',
    message: 'What are the GitHub usernames of those that contributed?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What are the email addresses of those that contributed?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'How would you test this application?',
    name: 'test',
  },
];


const promptUser = () => {
  return inquirer.prompt(questions)
}

const writeREADME = (response) => {
  return ``;
}
  


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
  //.then((response) => fs.writeFile('README.md', writeREADME(response)))
  .then(() => {
    console.log('Successfully wrote to index.html\n');
    console.log(response)
  })
  .catch((err) => console.error(err));
}

// Function call to initialize app
init();
