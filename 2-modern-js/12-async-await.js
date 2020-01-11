const https = require("https")

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = ""
      res.on("data", rd => (data = data + rd))
      res.on("end", () => resolve(data))
      res.on("error", reject)
    })
  })
}

// .then happens after the async action
fetch("https://www.javascript.com/").then(data => {
  console.log(data.length)
})

fetch("https://www.javascript.com/").then(function(data) {
  console.log(data.length)
})

// or use the new async way to gain access to the data after async action
// the entire function must be wrapped with () and then called with ()
;(async read => {
  const data = await fetch("https://www.javascript.com/")
  console.log(data.length)
})()

;(async function read () {
  const data = await fetch("https://www.javascript.com/")
  console.log(data.length)
})()
