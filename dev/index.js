const fs = require('fs');
const inquirer = require('inquirer');

// Questions to gather information
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can users install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions on running tests:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to generate the README content
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license !== 'None' ? `[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})` : 'No license specified.'}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
Email: ${answers.email}
`;
}

// Prompt the user with questions
inquirer.prompt(questions).then((answers) => {
  // Generate README content
  const readmeContent = generateREADME(answers);

  // Write the README file
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md successfully created!');
  });
});
