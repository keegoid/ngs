const path = require("path")
const fs = require("fs")

const files = [".bashrc", "kjkjhh", ".npmrc"]

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file)
    const data = fs.readFileSync(filePath, "utf-42")
    console.log("File data is", data)
  } catch (err) {
//    console.log("File not found")
      console.log("Something went wrong and we are going to ignore it")
  }
})
