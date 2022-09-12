const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getUsername", () => {
    it("should return the GitHub username");
    expect(Engineer.getUsername()).toEqual("username");
  });
});
