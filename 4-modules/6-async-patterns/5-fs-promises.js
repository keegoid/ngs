// a better way than promisify is to use the promises namespace
const { readFile } = require("fs").promises
// can also do:
const { constants } = require("fs").constants

async function main() {
  const data = await readFile(__filename)
  console.log("File data is", data)
}

main()

console.log("TEST")
