const { prompt } = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { managerPrompt, engineerPrompt, internPrompt, menuQuestions} = require("./src/questions");
const teamTemplate = require("./src/htmlTemplate");
/* 
Objects will be pushed in this array after every prompts
Then, the array will be used to generate a html page
*/
const teamArray = [];


async function promptManager() {
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
                promptEngineer();
                break;
            case "Add an Intern":
                promptIntern();
                break; 
            case "I'm Done":
                console.log("Team is successfully generated!");
                console.log(teamArray);
                break;
            default:
                console.log("I need to check on my switch cases");
                break;
        }
    })
}


function promptEngineer() {
    prompt(engineerPrompt)
    .then(({ id, name, email, github}) => {
        const engineer = new Engineer(id, name, email, github);
        teamArray.push(engineer);
        promptMenu();
    })
}


function promptIntern() {
    prompt(internPrompt)
    .then(({ id, name, email, school}) => {
        const intern = new Intern(id, name, email, school);
        teamArray.push(intern);
        promptMenu();
    })
}


promptManager();