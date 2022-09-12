// Import packages needed
const fs = require("fs");
const inquirer = require("inquirer");
const employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

// Create an array of questions for user input

var emptyArray = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "name",
        message: "What is the name of your team manager?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is your team manager's employee ID?",
        name: "ID",
      },
      {
        type: "input",
        message: "What is your team manager's email address?",
        name: "address",
      },

      {
        type: "input",
        message: "What is your team manager's office phone number?",
        name: "number",
      },
    ])
    .then((response) => {
      console.log(response);
      const manager = new Manager(
        response.managerName,
        response.ID,
        response.address,
        response.number,
        console.log(
          response.managerName,
          response.ID,
          response.address,
          response.number
        )
      );
      emptyArray.push(manager);
      addTeam();
    });
}
// This is created to add on another team member OR stop and create HTML
function addTeam() {
  inquirer
    .prompt([
      {
        name: "addTeam",
        type: "list",
        message: "Would you like to add a team member?",
        choices: ["Intern", "Engineer", "No, I am done"],
      },
    ])
    .then((choices) => {
      if (choices.addTeam === "Intern") return createIntern();
      if (choices.addTeam === "Engineer") return createEngineer();
      if (choices.addTeam === "No, I am done") genHTML(emptyArray);
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "name",
        message: "What is the name of your team's engineer?",
        name: "engineer",
      },
      {
        type: "input",
        message: "What is your team engineer's employee ID?",
        name: "engineerNumber",
      },
      {
        type: "input",
        message: "What is your team engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your team engineer's GitHub username",
        name: "username",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineer,
        response.engineerNumber,
        response.email,
        response.username,
        console.log(
          response.engineer,
          response.engineerNumber,
          response.email,
          response.username
        )
      );
      emptyArray.push(engineer);
      addTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "name",
        message: "What is the name of your team's intern?",
        name: "intern",
      },
      {
        type: "input",
        message: "What is your team intern's employee ID?",
        name: "internNumber",
      },
      {
        type: "input",
        message: "What is your team intern's email address?",
        name: "internAddress",
      },
      {
        type: "input",
        message: "What is your team intern's school?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.intern,
        response.internNumber,
        response.internAddress,
        response.school,
        console.log(
          response.intern,
          response.internNumber,
          response.internAddress,
          response.school
        )
      );

      emptyArray.push(intern);
      addTeam();
    });
}
createManager();

function genHTML(emptyArray) {
  let HTML = ` <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container">
          <h1
            class="text-center"
          >
           Team Profile Generator
          </h1>
        </div>
      </div>
      <section class="container col-12 p-5 row justify-content-center">`;
  console.log(emptyArray);
  for (let i = 0; i < emptyArray.length; i++) {
    console.log("line 185", emptyArray[i]);
    if (emptyArray[i].getRole() === "Manager") {
      console.log("line 187", emptyArray[i]);
      HTML += ` <div class="card-body bg-info m-3 col-lg-3 col-sm-6 text-center align-content-center justify-content-center">
          <h2 class="card-header display-5 bg-secondary">${emptyArray[
            i
          ].getRole()}</h2>
          <h3 class="card-header display-5 bg-secondary">
            ${emptyArray[i].name}
          </h3>
          <li class="list-group-item">Employee ID: ${emptyArray[i].Id}</li>
          <li class="list-group-item"><a href="Email Address: ${
            emptyArray[i].email
          }">Email: ${emptyArray[i].email}</a></li>
          <li class="list-group-item">Office Number: ${
            emptyArray[i].number
          }</li>
        </div>`;
    } else if (emptyArray[i].getRole() === "Engineer") {
      console.log("line 198", emptyArray[i]);
      HTML += ` <div class="card-body bg-info m-3 col-lg-3 col-sm-6 text-center align-content-center justify-content-center">
        <h2 class="card-header display-5 bg-secondary">${emptyArray[
          i
        ].getRole()}</h2>
        <h3 class="card-header display-5 bg-secondary">
          ${emptyArray[i].name}
        </h3>
        <li class="list-group-item">Employee ID: ${emptyArray[i].Id}</li>
        <li class="list-group-item"><a href="Email Address: ${
          emptyArray[i].email
        }">Email: ${emptyArray[i].email}</a></li>
        <li class="list-group-item"><a href="https://github.com/${
          emptyArray[i].username
        }">GitHub: ${emptyArray[i].username}</a>
        </li>
      </div>`;
    } else if (emptyArray[i].getRole() === "Intern") {
      console.log("line 209", emptyArray[i]);
      HTML += ` <div class="card-body bg-info m-3 col-lg-3 col-sm-6 text-center align-content-center justify-content-center">
        <h2 class="card-header display-5 bg-secondary">${emptyArray[
          i
        ].getRole()}</h2>
        <h3 class="card-header display-5 bg-secondary">
          ${emptyArray[i].name}
        </h3>
        <li class="list-group-item">Employee ID: ${emptyArray[i].Id}</li>
        <li class="list-group-item"><a href="Email Address: ${
          emptyArray[i].email
        }">Email: ${emptyArray[i].email}</a></li>
        <li class="list-group-item">School: ${emptyArray[i].school}</li>
      </div>`;
    }
  }
  HTML += `</section>
  <script src="./index.js"></script>
  <script src=""https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>
</html>`;
  fs.writeFile("index.html", HTML, (err) => {
    err ? console.log(err) : console.log("successful");
  });
}
