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
	handler: resources.login.post
})

server.route({
	method: 'GET',
	path: '/userInfo',
	handler: resources.userinfo.get
})

server.route({
	method: 'GET',
	path: '/patients',
	handler: resources.patients.get
})

server.route({
	method: 'GET',
	path: '/patientData/{patID}',
	handler: resources.patientData.get
})

server.route({
	method: 'GET',
	path: '/acts',
	handler: resources.acts.get
})

server.route({
	method: 'GET',
	path: '/actsReimbursement',
	handler: resources.actsReimbursement.get
})
