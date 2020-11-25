class Employee {
    constructor(name, id, email, officeno) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeno = officeno;
    }

    getName() {
        return this.name
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getOfficeNo() {
        return this.officeno
    }

    getRole () {
        return 'Employee';
    }

}

module.exports = Employee;