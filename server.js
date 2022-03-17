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

function init() {
    inquirer.prompt(question)
    .then((answer) => {
        const { choices } = answer;
        if (choices === "View all departments") {
        viewDepartments();
        }
        if (choices === "View all roles") {
            viewRoles()
        }
    })        
}


//FUNCTIONS

// Function viewDepartment
viewDepartments = () => {
    console.log("Viewing All Departments");
}
// Function viewRoles
viewRoles = () => {
    console.log("Viewing All Roles");
}



// // Function call to initialize app
 init();