// local http var now has all the methods defined on the public api of the http module
const http = require("http")

const requestListener = (req, res) => {
  // reqest object is of the type IncomingMessage
  //console.log(req) // long log output
  // console.dir(req, { depth: 0 }) // shorter output, only first level, no nested objects
//  console.dir(req.url) // shorter output, only first level, no nested objects

  // response object is of type ServerResponse
  console.dir(res, { depth: 0 })


  res.end("Hello Node\n")
  // .end is equivalent to writing
  // res.write("Hello World\n")
  // res.end()

  // req is a readable stream
  // res is a writeable stream
}

// functions are first class citizens in js because we can pass functions as arguments to other
// functions, otherwise called higher order functions
// this is a function reference being passed in, not calling the function like requestListener()
// which would pass the return value of requestListener
const server = http.createServer(requestListener)
// or like this
// const server = http.createServer()
// server.on("request", requestListener)

server.listen(4242, () => {
  console.log("Server is running...")
})
