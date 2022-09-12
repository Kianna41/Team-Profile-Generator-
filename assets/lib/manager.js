const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, Id, email, number) {
    super(name, Id, email, "Manager");
    this.name = name;
    this.ID = Id;
    this.email = email;
    this.number = number;
  }
  getNumber() {
    return this.number;
  }
}
module.exports = Manager;
