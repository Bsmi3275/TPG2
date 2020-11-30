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
                    name: 'officeNumber'
                },
                {
                    //then, the manager can select however and whichever employee templates
                    //they need to 
                    type: "list",
                    message: "Next, select and then type the information for your employee",
                    choices: ['Intern','Engineer', 'None additional'],
                    name: 'addmemberprompt'
                }
            ])
            .then (
                ({ name, id, email, officeNumber, addmemberprompt }) => {
                    const manager = new Manager(name, id, email, officeNumber);

                    employees.push(manager)
                    console.log(employees)

                    if (addmemberprompt === 'Engineer') {
                        console.log('New member successfully saved!')
                        this.engineerInfo();
                    } 
                    else if (addmemberprompt === 'Intern') {
                        console.log('New member successfully saved!')
                        this.internInfo();
                    }
                    else {
                        render(employees);
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
                    type: "list",
                    message: "Next, select and then type the information for your employee",
                    choices: ['Intern','Engineer', 'None additional'],
                    name: 'addmemberprompt'
                }
            ])
            .then (
                ({ name, id, email, github, addmemberprompt }) => {
                    const engineer = new Engineer(name, id, email, github);

                    employees.push(engineer)
                    console.log(employees)

                    if (addmemberprompt === 'Engineer') {
                        console.log('New member successfully saved!')
                        this.engineerInfo();
                    } 
                    else if (addmemberprompt === 'Intern') {
                        console.log('New member successfully saved!')
                        this.internInfo();
                    }
                    else {
                        render(employees);
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
                    message: "Which school is the intern currently enrolled in?",
                    name: 'school'
                },
                {
                    type: "list",
                    message: "Next, select and then type the information for your employee",
                    choices: ['Intern','Engineer', 'None additional'],
                    name: 'addmemberprompt'
                }
            ])
            .then (
                ({ name, id, email, school, addmemberprompt }) => {
                    const intern = new Intern(name, id, email, school);

                    employees.push(intern)
                    console.log(employees)

                    if (addmemberprompt === 'Engineer') {
                        console.log('New member successfully saved!')
                        this.engineerInfo();
                    } 
                    else if (addmemberprompt === 'Intern') {
                        console.log('New member successfully saved!')
                        this.internInfo();
                    }
                    else {
                        render(employees);
                    }
                }
            )
    }

}

const app = new App();



app.runApp();