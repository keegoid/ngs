const EventEmitter = require("events")

const myEmitter = new EventEmitter()

// fire test event
setImmediate(() => {
  // or delay this call using the event loop
  // setImmediate will happen immediately after the end of the other stuff below
  myEmitter.emit("TEST_EVENT")
})

// subscribe to test event
// won't fire since the emit is above
myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fired")
})

// now it will get executed
//myEmitter.emit("TEST_EVENT")

// Streams are Event Emitters
// process.stdin, process.stdout
