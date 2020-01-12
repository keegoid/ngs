const kPrint = require("./index")

describe("test print function", () => {
  it("should be a function", () => {
    expect(typeof kPrint).toBe("function")
  })
})
