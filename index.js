const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title for this project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a Description.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please write a Table of Contents.',
      name: 'table',
    },
    {
      type: 'input',
      message: 'Please write an Installation Guide.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please write how your app will be used.',
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
      name: 'contributor',
    },
    {
      type: 'input',
      message: 'What are the email addresses of those that contributed?',
      name: 'email',
    },
  ])
  .then((response) => {
    console.log(response)
    // fs.writeFile('index.html', writeHTML(response), () =>
    //   console.log(response)
    // );
   })
   .catch((err) => console.error(err));