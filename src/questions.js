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
        message: "What's your manager's office number?"
    }
]

const engineerPrompt = [
  
]

const internPrompt = []

const menuQuestions = {
    type: "list",
    name: "choices",
    message: "What you would like to do next?",
    choices: ["Add an Engineer", "Add an Intern", "I'm Done"]
}
module.exports = { managerPrompt, engineerPrompt, internPrompt, menuQuestions };