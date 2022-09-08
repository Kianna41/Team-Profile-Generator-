// Import packages needed
const fs = require("fs");
const inquirer = require("inquirer");

// Generate variables and create function to return HTML layout
const generateHTML = ({
  managerName,
  ID,
  address,
  number,
  engineer,
  employee,
  email,
  username,
  intern,
  internNumber,
  internAddress,
  schoolName,
}) => {
  return ` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <title>Document</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1
              class="display-4 text-center align-content-center justify-content-center"
            >
              MY TEAM
            </h1>
          </div>
        </div>
        <section class="container-fluid">
          <div class="row">
            <div
              class="card bg-info p-4 m-3 text-center align-content-center justify-content-center"
            >
              <h2 class="card-header display-5 bg-secondary">${managerName}</h2>
              <h3 class="card-header display-5 bg-secondary">Team manager</h3>
              <li class="list-group-item">Employee ID: ${ID}</li>
              <li class="list-group-item">Email address: ${address}</li>
              <li class="list-group-item">Office number: ${number}</li>
            </div>
            <div
              class="card bg-info p-4 m-3 text-center align-content-center justify-content-center"
            >
              <h2 class="card-header display-5 bg-secondary">${engineer}</h2>
              <h3 class="card-header display-5 bg-secondary">Engineer</h3>
              <li class="list-group-item">Employee ID: ${employee}</li>
              <li class="list-group-item">Email address: ${email}</li>
              <li class="list-group-item">GitHub username: ${username}</li>
            </div>
            <div
              class="card bg-info p-4 m-3 text-center align-content-center justify-content-center"
            >
              <h2 class="card-header display-5 bg-secondary">${intern}</h2>
              <h3 class="card-header display-5 bg-secondary">Intern</h3>
              <li class="list-group-item">Intern ID: ${internNumber}</li>
              <li class="list-group-item">Email address: ${internAddress}</li>
              <li class="list-group-item">School: ${schoolName}</li>
            </div>
          </div>
        </section>
      </body>
    </html>
   `;
};
// Create an array of questions for user input

var emptyArray = []

const manager = new Manager(inquirer)
emptyArray.push(manager)
addTeaam()
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
  // inquirer will ask manager questions
// cont manger = new Manager(....inquierer)
// emptyArray.push(manger)
// addTeam()
​   

  .then((data) => {
    const HTML = generateHTML(data);
    fs.writeFile("index.html", HTML, (err) => {
      err ? console.err("failed") : console.log("successful!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
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
      name: "ID",
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

  .then((data) => {
    const HTML = generateHTML(data);
    fs.writeFile("index.html", HTML, (err) => {
      err ? console.err("failed") : console.log("successful!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
