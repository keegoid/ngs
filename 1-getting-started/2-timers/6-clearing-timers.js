const timerId = setTimeout(() => console.log("You will not see this one!"), 0)

// setting timeout to 0 does not mean it will get executed immediately
// the script must wait for the following command(s) to finish first
clearTimeout(timerId)

// clearInterval

// setImmediate
// clearImmediate
