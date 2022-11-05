const teamTemplate = require("./src/htmlTemplate");
const { prompt } = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { managerPrompt, engineerPrompt, internPrompt, menuQuestions} = require("./src/questions");

const teamArray = [];

async function generateManager() {
    // prompt(managerPrompt)
    // .then(({ id, name, email, office}) => {
    //     const manager = new Manager(id, name, email, office);
    //     teamArray.push(manager);
    //     promptMenu();
    // })

    const { id, name, email, office} = await prompt(managerPrompt);
    const manager = new Manager(id, name, email, office);
    teamArray.push(manager);
    promptMenu();
}


function promptMenu() {
    prompt(menuQuestions)
    .then(({ choices }) => {
        switch (choices) {
            case "Add an Engineer":
                console.log("I need to add an employee");
                break;
            case "Add an Intern":
                console.log("I need to add an Intern"); 

            case "I'm Done":
                console.log("Finished");
            default:
                console.log("I need to check on my switch cases");
                break;
        }
    })
}
generateManager();