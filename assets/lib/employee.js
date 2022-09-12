class Employee {
  constructor(name, Id, email, role) {
    this.name = name;
    this.Id = Id;
    this.email = email;
    this.role = role;
  }
  getRole() {
    return this.role;
  }
  getEmail() {
    return this.email;
  }
  getID() {
    return this.Id;
  }
  getName() {
    return this.name;
  }
}

module.exports = Employee;
