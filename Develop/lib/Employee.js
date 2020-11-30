class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    //was originally getID
    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole () {
        return 'Employee'
    }

}

module.exports = Employee;