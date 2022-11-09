const { prompt } = require("inquirer");
const { writeFileSync } = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { managerPrompt, engineerPrompt, internPrompt, menuQuestions} = require("./src/questions");
const { teamTemplate, managerHTML, engineerHTML, internHTML } = require("./src/htmlTeamplate");
/* ---- The team objects will be pushed in this array after every prompts --- */
const teamArray = [];
/* ------------- Each html team blocks will be pushed into here ------------- */
const htmlArray = [];

/* ---------------------------- Manager's Prompt ---------------------------- */
function promptManager() {
    prompt(managerPrompt)
    .then(({ id, name, email, office}) => {
        const manager = new Manager(id, name, email, office);
        teamArray.push(manager);
        promptMenu();
    })
};

/* ---------------------------- Engineer's prompt --------------------------- */
function promptEngineer() {
    prompt(engineerPrompt)
    .then(({ id, name, email, github}) => {
        const engineer = new Engineer(id, name, email, github);
        teamArray.push(engineer);
        promptMenu();
    })
};

/* ----------------------------- Intern's Prompt ---------------------------- */
function promptIntern() {
    prompt(internPrompt)
    .then(({ id, name, email, school}) => {
        const intern = new Intern(id, name, email, school);
        teamArray.push(intern);
        promptMenu();
    })
};

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
                htmlBlocks(teamArray);
                break;
            default:
                console.log("I need to check on my switch cases");
                break;
        }
    })
};


function htmlBlocks(team) {
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerHTML(manager))
    );
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerHTML(engineer))
        .join("")
    );
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internHTML(intern))
        .join("")
    );
    const teamHTML = htmlArray.join("");
    const sampleHTML = teamTemplate(teamHTML);
    createHTML(sampleHTML);
};


function createHTML(sampleHTML) {
    console.log("Team is successfully generated!");

    writeFileSync('./dist/sample.html', sampleHTML, "utf-8");
};

/* --------------- Initiate Manager's prompt when run index.js -------------- */
promptManager();