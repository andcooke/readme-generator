let licenses = [];
const requestUrl = 'https://api.github.com/licenses';

console.log("test");

function getLicenses() {

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data)
      for (let i = 0; i < data.length; i++){
        licenses.push(data[i].name);
        return (licenses);
        getLicenseInfo(data[i].url);
      }
    });
}

function getLicenseInfo(license) {
  let licenseInfoURL = license;
    fetch(licenseInfoURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.body);
    })
}



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
    choices: licenses,
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




const writeREADME = (response) => {
  return ``;
}
  


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  getLicenses()
  .then (promptUser())
  //.then((response) => fs.writeFile('README.md', writeREADME(response)))
  .then(() => {
    console.log('Successfully wrote to index.html\n');
    console.log(response)
  })
  .catch((err) => console.error(err));
}

function getBadge (license){
  switch (license) {
    case 'Apache License 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case 'MIT License':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case 'GNU General Public License v3.0':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case 'BSD 2-Clause "Simplified" License':
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    default:
      console.log("Choose a license.");
  }
}


// Function call to initialize app
init();


