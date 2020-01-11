const rocks = who => {
  console.log(who + " rocks")
}

setTimeout(rocks, 2 * 1000, "Keegan")

// It's not very clear how setTimeout assigns "Keegan" to who in rocks.