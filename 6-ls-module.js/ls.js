var fs = require('fs')
var path = require('path')

function extMatches (ext, subject) {
  return path.extname(subject).slice(1) === ext
}

function ls (dir, ext, cb) {
  var pred = extMatches.bind(null, ext)

  fs.readdir(dir, function (err, files) {
    if (err) {
      cb(err)
    } else {
      cb(null, files.filter(pred))
    }
  })
}

module.exports = ls
