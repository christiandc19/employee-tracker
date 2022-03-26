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

//Function addDepartment
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


//Function addRole
  askRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salaryTotal"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptID"
      }
    ])
}
async function addRole() {
  askRole().then(response => 
  {
  const role = db.addRole(response.roleName, response.salaryTotal, response.deptID);
  console.table(role);
  init();
  }
  );
}


  
// Function Add Employee
askNewEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Employee's First Name",
        name: "first_name"
      },
      {
        type: "input",
        message: "Employee's Last Name",
        name: "last_name"
      },
      {
        type: "input",
        message: "Employee's Role ID",
        name: "role_id"
      },
      {
        type: "input",
        message: "Employee's Manager's ID",
        name: "manager_id"
      }
    ])
}
async function addEmployee() {
    askNewEmployee().then(res => 
      {
        const employee = db.addEmployee(res.first_name, res.last_name, res.role_id, res.manager_id)
    console.table(employee);
    init();
  })
}


// // Function Update Employee
async function updateEmployee() {
  // View all the employees
  const employees = await db.viewAllEmployees();
  // View all the roles
  const roles = await db.viewAllRoles();
  const employeeName = [];
  const employeeRole = [];

  // Push Name of employee to employeeName Array
  const empList = employees.forEach(employee => {
    employeeName.push(employee.first_name)
  });

  // Push Role in employeeRole Array
  const roleList = roles.forEach(role => {
    employeeRole.push(role.title)
  });


  inquirer.prompt([
    {
      type: 'list', 
      name: 'name',
      message: "Which employee would you like to update?",
      choices: employeeName
    },
    {
      type: 'list', 
      name: 'role',
      message: "What is their new role?",
      choices: employeeRole
    }
  ]).then((answer) => {
    // store the new role_id and the employee id
    let newTitleId, employeeId;

    // store the new role_id that matches the role title
    roles.forEach((role) => {
      if (answer.role === role.title) {
        newTitleId = role.id;
      }
    });

    // store the employeeId that matches the first name
    employees.forEach((employee) => {
      if(answer.name === employee.first_name) {
        employeeId = employee.id
      }
    })

    // call the updateEmployeeRole function
    db.updateEmployeeRole(employeeId, newTitleId);
    init();
  })
}





// // Function call to initialize app
 init();