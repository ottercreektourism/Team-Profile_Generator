const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHtml');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const team = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Name of team manager:',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'Team Manager employee ID:',
            name: 'tMID',
        },
        {
            type: 'input',
            message: 'Team manager email address:',
            name: 'tMEmail',
        },
        {
            type: 'input',
            message: 'Office Number:',
            name: 'officeNum',
        },


    ])

    .then((response) => {
        const manager = new Manager(response.managerName, response.tMID, response.tMEmail, response.officeNum)
        team.push(manager);
        teamMenu();
    });

// teamMenu function gives user a choice of which new members to add, and then calls the appropriate function.
function teamMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                name: 'addMembers',
                choices: ['Intern', 'Engineer', 'No']
            },
        ])
        .then((response) => {
            if (response.addMembers === 'Intern') {
                renderIntern();
            } else if (response.addMembers === 'Engineer') {
                renderEngineer();
            } else {
                renderEndTeam();
            }
        })

}
// renderIntern function asks the user information about the intern, pushes that to the team array, and then redirects user to team function of their choice.
function renderIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Name of Intern:',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'Intern employee ID:',
                name: 'internID',
            },
            {
                type: 'input',
                message: 'Intern email:',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'Intern school:',
                name: 'internSchool',
            },
        ])

        .then((response) => {
            const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool)
            team.push(intern);
            teamMenu();
        });

}
function renderEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Name of Engineer:',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'Engineer employee ID:',
                name: 'engineerID',
            },
            {
                type: 'input',
                message: 'Engineer email:',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'Engineer GitHub Username:',
                name: 'engineerGitHub',
            },
        ])
        .then((response) => {
            const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGitHub)
            team.push(engineer);
            teamMenu();
        });
}
function renderEndTeam(response) {
    fs.writeFile('index.html', generateHTML(response),
        (err) => err ? console.error(err) : console.log('info stored!')
    )
}