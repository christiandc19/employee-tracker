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
            addRole();
        }
        if (choices === "Add an employee") {
            addEmployee();
        }
        if (choices === "Update an employee role") {
          updateEmployee();
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
askDepartment = () => {
  return inquirer.prompt([
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
    askDepartment().then(response => 
    {
    const department = db.addDepartment(response.addDept);
    console.table(department);
    init();
    }
    );
}


// Function addRole
askRole = () => {
  return inquirer.prompt([
    {
      type: 'input', 
      name: 'firstName',
      message: "Enter First Name:",
      validate: addFirstName => {
        if (addFirstName) {
            return true;
        } else {
            console.log('Please Enter First Name:');
            return false;
        }
      }
    },

    {
      type: 'input', 
      name: 'lasttName',
      message: "Enter Last Name:",
      validate: addLastName => {
        if (addLastName) {
            return true;
        } else {
            console.log('Please Enter Last Name:');
            return false;
        }
      }
    },
    {
      type: 'input', 
      name: 'salary',
      message: "Enter Salary:",
      validate: addSalary => {
        if (addSalary) {
            return true;
        } else {
            console.log('Please Enter Salary:');
            return false;
        }
      }
    }
  ])
}
    
async function addRole() {
  askRole().then(response => 
  {
  const role = db.addRole(response.addFirstName, response.addLastName, response.addSalary);
  console.table(role);
  init();
  }
  );
}

// Function Add Employee

askNewEmployee = () => {
    return inquirer.prompt([
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
      }
    ])
}
async function addEmployee() {
    askNewEmployee().then(response => 
      {
        const employee = db.addEmployee(response,newEmployeeFirstName)
    console.table(employee);
    init();
  })
}


async function addRole() {
  askRole().then(response => 
  {
  const role = db.addRole(response.addRole);
  console.table(role);
  init();
  }
  );
}



// // Function addRole
updateEmployee = () => {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'name',
      message: "Which employee would you like to update?",
      validate: name => {
        if (name) {
            return true;
        } else {
            console.log('Please enter first name');
            return false;
        }
      }
    }
  ])
}
async function updateEmployee() {
    const employee = await db.updateEmployee();
    console.table(employee);
    init();
}


// // Function call to initialize app
 init();