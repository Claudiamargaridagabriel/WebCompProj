var server = require('./../index.js')
var resources = require('./../resources')

server.route({
  method: 'GET',
  path: '/hello',
  handler: resources.hello.get
})

server.route({
  method: 'POST',
  path: '/hello',
  handler: resources.hello.post
})

server.route({
  method: 'POST',
  path: '/login',
  handler: resources.hello.login
})

server.route({
  method: 'GET',
  path: '/acts',
  handler: resources.hello.acts
})

server.route({
  method: 'GET',
  path: '/reports',
  handler: resources.hello.reports
})


server.route({
  method: 'GET',
  path: '/patients',
  handler: resources.hello.patients
})

server.route({
  method: 'GET',
  path: '/requests',
  handler: resources.hello.request
})

server.route({
  method: 'POST',
  path: '/addmedact',
  handler: resources.hello.addmedact
})

server.route({
  method: 'POST',
  path: '/savemedact',
  handler: resources.hello.savemedact
})
