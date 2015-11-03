var http = require('http')
var urls = process.argv.slice(2)

fetchAll(urls, function (err, results) {
  if (err) {
    console.error(err)
  } else {
    console.log(results.join('\n'))
  }
})

function fetchAll (urls, cb) {
  var remaining = urls.length
  var results = []

  urls.forEach(function (url, index) {
    fetch(url, function (err, data) {
      if (err) {
        cb(err)
      } else {
        results[index] = data
      }

      if (--remaining === 0) {
        cb(null, results)
      }
    })
  })
}

function fetch (url, cb) {
  http.get(url, function (response) {
    var chunks = []
    response.setEncoding('utf8')
    response.on('data', chunks.push.bind(chunks))
    response.on('error', cb)
    response.on('end', function () {
      var result = chunks.join('')
      cb(null, result)
    })
  })
}
