const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }
    // Display All Employees
    viewAllEmployees(){
        return this.connection.query(
            "SELECT * FROM employee;"
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
            "SELECT * FROM role;"
        );
    }

    // Display All Roles
    addDepartment(){
        return this.connection.query(
            "SELECT * FROM role;"
        );
    }
}

module.exports = new DB(connection);

