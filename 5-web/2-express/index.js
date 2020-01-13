const express = require("express")
// express const is now a function

const server = express()
// result of function is stored in server...function() gives a result or return value

server.get("/", (req, res) => {
  res.send("Hello Express") // automatically invokes .end
})

server.get("/about", (req, res) => {
  res.send("About...") // automatically invokes .end
})

server.listen(4243, () => {
  console.log("Express Server is running...")
})

Other popular web servers built with node:

- Koa
- Sails.js
- meteor.com
