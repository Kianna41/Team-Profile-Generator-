const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, Id, email, username) {
    super(name, Id, email, "Engineer");
    this.name = name;
    this.Id = Id;
    this.email = email;
    this.username = username;
  }
  getUsername() {
    return this.username;
  }
}

module.exports = Engineer;
