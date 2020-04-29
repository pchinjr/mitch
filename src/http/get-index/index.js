const arc = require('@architect/functions')
const quoth = require('random-mitch-hedberg-quote')

function route(req, res) {
  res({
    html: quoth()
  })
}

exports.handler = arc.http(route)
