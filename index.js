const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { managerPrompt, engineerPrompt, internPrompt, menuQuestions} = require("./src/questions");
const teamTeamplate = require("./src/htmlTeamplatee");
/* ---- The team objects will be pushed in this array after every prompts --- */
const teamArray = [];
/* ------------- Each html team blocks will be pushed into here ------------- */
const htmlArray = [];

/* ---------------------------- Manager's Prompt ---------------------------- */
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

/* --------------------- Logic controls inquirer's flow --------------------- */
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
                htmlBlocks(teamArray);
                break;
            default:
                console.log("I need to check on my switch cases");
                break;
        }
    })
}

/* ---------------------------- Engineer's prompt --------------------------- */
function promptEngineer() {
    prompt(engineerPrompt)
    .then(({ id, name, email, github}) => {
        const engineer = new Engineer(id, name, email, github);
        teamArray.push(engineer);
        promptMenu();
    })
}

/* ----------------------------- Intern's Prompt ---------------------------- */
function promptIntern() {
    prompt(internPrompt)
    .then(({ id, name, email, school}) => {
        const intern = new Intern(id, name, email, school);
        teamArray.push(intern);
        promptMenu();
    })
}


function htmlBlocks(team) {
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
}


/* --------------- Initiate Manager's prompt when run index.js -------------- */
promptManager();