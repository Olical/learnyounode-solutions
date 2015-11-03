var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = process.argv[3]

function extMatches (ext, subject) {
  return path.extname(subject).slice(1) === ext
}

fs.readdir(dir, function (err, files) {
  if (err) {
    console.error('Error:', err)
  } else {
    var pred = extMatches.bind(null, ext)
    console.log(files.filter(pred).join('\n'))
  }
})
