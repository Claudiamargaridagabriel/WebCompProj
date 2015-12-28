var Hapi = require('hapi')

var options = {
    storeBlank: false,
    cookieOptions: {
        password: 'password',
        isSecure: false
    }
};

var server = module.exports = new Hapi.Server({
  connections: {
    routes: {
      cors: true
    }
  }
})

server.connection({

  host: 'localhost',
  port: 9000
})

server.register({
    register: require('yar'),
    options: options
}, function (err) { });

// load routes
require('./routes/routes.js')

server.start(function (err) {
  if (err) {
    return console.log('err:' + err)
  }
  console.log('server started: ' + server.info.uri)
})
