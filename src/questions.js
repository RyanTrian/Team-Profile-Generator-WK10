const managerPrompt = [
    {
        type: "input",
        name: "id",
        message: "What's the manager's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What's the manager's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What's the manager's email?"
    },
    {
        type: "input",
        name: "office",
        message: "What's the manager's office number?"
    }
];

const engineerPrompt = [
    {
        type: "input",
        name: "id",
        message: "What's the engineer's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What's the engineer's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What's the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What's the engineer's github username?"
    }
];

const internPrompt = [
    {
        type: "input",
        name: "id",
        message: "What's the intern's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What's the intern's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What's the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What's the intern's school?"
    }
];

const menuQuestions = {
    type: "list",
    name: "choices",
    message: "What you would like to do next?",
    choices: ["Add an Engineer", "Add an Intern", "I'm Done"]
};

module.exports = { managerPrompt, engineerPrompt, internPrompt, menuQuestions };