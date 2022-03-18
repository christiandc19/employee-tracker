const inquirer = require('inquirer');
require('console.table');
const db = require('./db/index');


const question = [
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
]


function init() {
    inquirer.prompt(question)
    .then((answer) => {
        const { choices } = answer;
        if (choices === "View all departments") {
        viewDepartments();
        }
        if (choices === "View all roles") {
            viewAllRoles()
        }
        if (choices === "View all employees") {
            viewAllEmployees()
        }
        if (choices === "Add a department") {
            addDepartment();
        }
    })        
}


//FUNCTIONS

// Function viewDepartment
async function viewDepartments() {
    const departments = await db.viewDepartments();
    console.table(departments);
    init();
}

// Function viewAllRoles
async function viewAllRoles() {
    const roles = await db.viewAllRoles();
    console.table(roles);
    init();
}

// Function viewAllEmployees
async function viewAllEmployees() {
    const employees = await db.viewAllEmployees();
    console.table(employees);
    init();
}

// Function addDepartment
async function addDepartment() {
    const department = await db.addDepartment();
    console.table(department);
    init();
}

// // Function call to initialize app
 init();