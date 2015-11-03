var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err, content) {
  if (err) {
    console.error('Error:', err)
  } else {
    console.log(content.split('\n').length - 1)
  }
})
