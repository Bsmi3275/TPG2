const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = []

class App {

    runApp() {
         this.managerInfo();
    }

    managerInfo() {
        inquirer
            .prompt ([
                {
                    //This app is for managers. When entering 
                    //information, the manager needs
                    //to know that he or she is the subject first
                    type: "input",
                    message: "Your name (You are the manager, please put your information first, then select the employees and information that you want in your database!)",
                    name: 'name'
                },
                {
                    type: "input",
                    message: "Your ID",
                    name: 'id'
                },
                {
                    type: "input",
                    message: "Your E-mail",
                    name: 'email'
                },
                {
                    type: "input",
                    message: "Your Office Number",
                    name: 'officeno'
                },
                {
                    //then, the manager can select however and whichever employee templates
                    //they need to 
                    type: "list",
                    message: "Next, select and then type the information for your employee",
                    choices: ['Intern','Engineer', 'None additional'],
                    name: 'addmemberprompt1'
                }
            ])
            .then (
                ({ name, id, email, officeno, addmemberprompt1 }) => {
                    const manager = new Manager(name, id, email, officeno);

                    employees.push(manager)
                    console.log(employees)

                    if (addmemberprompt1 === 'Engineer') {
                        console.log('New member successfully saved!')
                        this.engineerInfo();
                    } 
                    else if (addmemberprompt1 === 'Intern') {
                        console.log('New member successfully saved!')
                        this.internInfo();
                    }
                    else {
                        console.log('New member successfully saved!')
                        this.employeeInfo();
                    }
                }
            
            )
    }


    engineerInfo() {
        inquirer
            .prompt ([
                {
                    type: "input",
                    message: "Engineer Name",
                    name: 'name'
                },
                {
                    type: "input",
                    message: "Engineer ID",
                    name: 'id'
                },
                {
                    type: "input",
                    message: "Engineer E-mail",
                    name: 'email'
                },
                {
                    type: "input",
                    message: "Engineer GitHub Username",
                    name: 'github'
                },
                {
                    type: "input",
                    message: "Engineer Office Number",
                    name: 'officeno'
                },
                {
                    type: "list",
                    message: "Next, select and then type the information for your employee",
                    choices: ['Intern','Engineer', 'None additional'],
                    name: 'addmemberprompt1'
                }
            ])
            .then (
                ({ name, id, email, github, officeno, addmemberprompt1 }) => {
                    const engineer = new Engineer(name, id, email, github, officeno);

                    employees.push(engineer)
                    console.log(employees)

                    if (addmemberprompt1 === 'Engineer') {
                        console.log('New member successfully saved!')
                        this.engineerInfo();
                    } 
                    else if (addmemberprompt1 === 'Intern') {
                        console.log('New member successfully saved!')
                        this.internInfo();
                    }
                    else {
                        console.log('New member successfully saved!')
                        this.employeeInfo();
                    }
                }
            )

    }



    internInfo() {
        inquirer
            .prompt ([
                {
                    type: "input",
                    message: "Intern Name",
                    name: 'name'
                },   
                {
                    type: "input",
                    message: "Intern ID",
                    name: 'id'
                },
                {
                    type: "input",
                    message: "Intern E-mail",
                    name: 'email'
                },
                {
                    type: "input",
                    message: "Intern Office Number",
                    name: 'officeno'
                },
                {
                    type: "input",
                    message: "Which school is the intern currently enrolled in?",
                    name: 'school'
                },
                {
                    type: "list",
                    message: "Next, select and then type the information for your employee",
                    choices: ['Intern','Engineer', 'None additional'],
                    name: 'addmemberprompt1'
                }
            ])
            .then (
                ({ name, id, email, school, officeno, addmemberprompt1 }) => {
                    const intern = new Intern(name, id, email, school, officeno);

                    employees.push(intern)
                    console.log(employees)

                    if (addmemberprompt1 === 'Engineer') {
                        console.log('New member successfully saved!')
                        this.engineerInfo();
                    } 
                    else if (addmemberprompt1 === 'Intern') {
                        console.log('New member successfully saved!')
                        this.internInfo();
                    }
                    else {
                        console.log('New member successfully saved!')
                        this.employeeInfo();
                    }
                }
            )
    }

    employeeInfo() {
        inquirer
            .prompt ([
                {
                    //This is for non-interns and non-engineers
                    type: "input",
                    message: "Employee name",
                    name: 'name'
                },
                {
                    type: "input",
                    message: "Employee ID",
                    name: 'id'
                },
                {
                    type: "input",
                    message: "Employee E-mail",
                    name: 'email'
                },
                {
                    type: "input",
                    message: "Employee Office Number",
                    name: 'officeno'
                },
                {
                    type: "list",
                    message: "Next, select and then type the information for your employee",
                    choices: ['Intern','Engineer', 'None additional'],
                    name: 'addmemberprompt1'
                }
            ])
            .then (
                ({ name, id, email, officeno, addmemberprompt1 }) => {
                    const employee = new Employee (name, id, email, officeno);

                    employees.push(employee)
                    console.log(employees)

                    if (addmemberprompt1 === 'Engineer') {
                        console.log('New member successfully saved!')
                        this.engineerInfo();
                    } 
                    else if (addmemberprompt1 === 'Intern') {
                        console.log('New member successfully saved!')
                        this.internInfo();
                    }
                    else {
                        console.log('New member successfully saved!')
                        this.employeeInfo();
                    }
                }
            
            )
    }
}

const app = new App();



app.runApp();