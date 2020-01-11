// Print "Hello World"
// Every second
// And stop after 5 times
let n = 0
const intervalId = setInterval(() => {
  console.log("Hello World")
  n += 1

  if (n === 5) {
    console.log("Done")
    clearInterval(intervalId)
  }
}, 1000)
