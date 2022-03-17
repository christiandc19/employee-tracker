const inquirer = require('inquirer');
const fs = require("fs");


const question = ([
    {
    type: 'list',
    name: 'choices', 
    message: 'What would you like to do?',
    choices:    ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role'
                ]
    },
])

.then((answer) => {
    const {choices} = answer;
    if (choices === "View all departments") {
        viewDepartments();
    }
})



// FUNCTIONS

// Function to showDepartments
showDepartments = () => {
    console.log(`SELECT * FROM departments`);
}


function init() {
    inquirer.prompt(question)
    .then(function(answer) {
        console.log(answer);
    })
}
// // Function call to initialize app
 init();