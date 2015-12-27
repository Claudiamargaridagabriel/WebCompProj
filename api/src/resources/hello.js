var bl = require('../../../bl/src')

exports = module.exports

exports.get = function handler (request, reply) {
  reply(bl.sayHello())
}

exports.post = function handler (request, reply) {
  reply(bl.sayHello(request.payload.name))
}

exports.login = function handler (request, reply) {
  reply(bl.login(request.payload.user,request.payload.password))
}

exports.patients = function handler (request, reply) {
  reply(bl.patients())
}

exports.acts = function handler (request, reply) {
  reply(bl.acts())
}

exports.request = function handler (request, reply) {
  reply(bl.request())
}

exports.addmedact= function handler (request,reply){
  reply(bl.actsPat(request.payload.patientID,request.payload.policyType))
}

exports.savemedact = function handler (request,reply){
  reply(bl.actsPat(request.payload.acttype,request.payload.actname,request.payload.cost,request.payload.patientId,request.payload.poltype))
}

