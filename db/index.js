const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }
    // Display All Employees
    viewAllEmployees(){
        return this.connection.query(
            `SELECT employee.id, 
                      employee.first_name, 
                      employee.last_name, 
                      role.title, 
                      department.name AS department,
                      role.salary, 
                      CONCAT (manager.first_name, " ", manager.last_name) AS manager
               FROM employee
                      LEFT JOIN role ON employee.role_id = role.id
                      LEFT JOIN department ON role.department_id = department.id
                      LEFT JOIN employee manager ON employee.manager_id = manager.id`
        );
    }

    // Display All Departments
    viewDepartments(){
        return this.connection.query(
            "SELECT * FROM department;"
        );
    }

    // Display All Roles
    viewAllRoles(){
        return this.connection.query(
            `SELECT role.id, role.title, role.salary, department.name AS department
               FROM role
               INNER JOIN department ON role.department_id = department.id`
        );
    }

    // Display Added Department
    addDepartment(name){
        // console.log(name, "Line 40");
        const sql = `INSERT INTO department (name)
        VALUES (?)`
        return this.connection.query(sql, name, (err, result) => {
            if (err) throw err;
            console.log("Department added!");
        });
    }

    // Display addRole
    addRole(name){
        console.log(name, "Line 53");
        const sql = `INSERT INTO role (firstName, lastName, salary)
        VALUES (?, ?, ?)`
        return this.connection.query(sql, name, (err, result) => {
            if (err) throw err;
            console.log("Add Role Success");
        });
    }

    // Display addEmployee
    addEmployee(){
    return this.connection.query(
    `SELECT name, id FROM department`
        );
    }
    
}





module.exports = new DB(connection);

