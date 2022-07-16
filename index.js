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
    choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License'],
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
  return `# ${response.title}

  ${getBadge(response.license)}
  
  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributors](#contributors)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}
  
  ## License
  
  This project is protected under the ${response.license}.
  
  ## Contributors
  
  [${response.name}](https://github.com/${response.github})
  
  ## Tests
  
  ${response.test}
  
  ## Questions
  
  If you have any questions you may email me at ${response.email}.

  Or you may reach out to me at my GitHub profile here  [${response.name}](https://github.com/${response.github}).
  `;
}
  



// TODO: Create a function to initialize app
const init = () => {
  promptUser()
  .then((response) => fs.writeFile('README.md', writeREADME(response), (err) => {
    if (err) { 
      console.log(err); 
    } else {
      console.log(response)
    }
  }))
  .then(() => {
    console.log('Successfully wrote to index.html\n');
  })
  .catch((err) => console.error(err));
}

function getBadge (license) {
  switch (license) {
    case 'Apache License 2.0':
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case 'MIT License':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case 'GNU General Public License v3.0':
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case 'BSD 2-Clause "Simplified" License':
      return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
    default:
      console.log("Choose a license.");
  }
}


// Function call to initialize app
init();
