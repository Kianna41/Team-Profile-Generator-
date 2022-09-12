const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getRole", () => {
    it("should return the role of the employee");
    expect(Employee.getRole()).toEqual("employee");
  });

  describe("getEmail", () => {
    it("should return the email");
    expect(Employee.getEmail()).toEqual("email");
  });

  describe("getID", () => {
    it("should return the ID");
    expect(Employee.getID()).toEqual(123);
  });

  describe("getName", () => {
    it("should return the name");
    expect(Employee.getName()).toEqual("name");
  });
});
