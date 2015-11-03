var vals = process.argv.slice(2).map(parseFloat)

function add (a, b) {
  return a + b
}

console.log(vals.reduce(add))
