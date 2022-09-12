const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email, "Intern");
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
