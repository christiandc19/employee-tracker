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
        viewAllDepartments();
        }
        if (choices === "View all roles") {
            viewAllRoles();
        }
        if (choices === "View all employees") {
            viewAllEmployees();
        }
        if (choices === "Add a department") {
            addDepartment();
        }
        if (choices === "Add a role") {
            addNewRole();
        }
        if (choices === "Add an employee") {
            addNewEmployee();
        }
    })        
}


//FUNCTIONS

// Function viewDepartment
async function viewAllDepartments() {
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


// // Function addDepartment
addDepartment = () => {
    inquirer.prompt([
      {
        type: 'input', 
        name: 'addDept',
        message: "What department do you want to add?",
        validate: addDept => {
          if (addDept) {
              return true;
          } else {
              console.log('Please enter a department');
              return false;
          }
        }
      }
    ])
}
async function addDepartment() {
    const department = await db.addDepartment();
    console.table(department);
    init();
}


// // Function addRole
addNewRole = () => {
    inquirer.prompt([
      {
        type: 'input', 
        name: 'role',
        message: "What role do you want to add?",
        validate: addRole => {
          if (addRole) {
              return true;
          } else {
              console.log('Please enter a role');
              return false;
          }
        }
      },    
      
      {
        type: 'input', 
        name: 'salary',
        message: "What is the salary of this role?",
        validate: addSalary => {
          if (isNAN(addSalary)) {
              return true;
          } else {
              console.log('Please enter a salary');
              return false;
          }
        }
      }
    
    ])
}
async function addNewRole() {
    const newRole = await db.addRole();
    console.table(newRole);
    init();
}


// // Function addRole
addNewEmployee = () => {
    inquirer.prompt([
      {
        type: 'input', 
        name: 'firstName',
        message: "New Employee's First Name?",
        validate: newEmployeeFirstName => {
          if (newEmployeeFirstName) {
              return true;
          } else {
              console.log('Please enter first name');
              return false;
          }
        }
      },    
      
      {
        type: 'input', 
        name: 'lastName',
        message: "New Employee's Last Name?",
        validate: newEmployeeLastName => {
          if (newEmployeeLastName) {
              return true;
          } else {
              console.log('Please enter last name');
              return false;
          }
        }
      },

      {
        type: 'input', 
        name: 'role',
        message: "New Employee's Role?",
        validate: newEmployeeRole => {
          if (newEmployeeRole) {
              return true;
          } else {
              console.log('Please employee/s role');
              return false;
          }
        }
      },

      {
        type: 'input', 
        name: 'managersName',
        message: "New Employee's Manager's Name?",
        validate: newEmployeeManager => {
          if (newEmployeeManager) {
              return true;
          } else {
              console.log('Please enter employee/s manager/s name');
              return false;
          }
        }
      },
    ])
}
async function addNewEmployee() {
    const newEmployee = await db.addEmployee();
    console.table(newEmployee);
    init();
}


// // Function addDepartment
// async function addDepartment() {
//     const employees = await db.addDepartment();
//     console.table(employees);
//     init();
// }

// // Function call to initialize app
 init();