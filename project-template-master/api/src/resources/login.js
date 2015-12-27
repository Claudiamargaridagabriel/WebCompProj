var bl = require('../../../bl/src')

exports = module.exports

exports.post = function handler (request, reply) {
	var res=bl.login(request.payload.username,request.payload.password);
	if(res){
		console.log('login successful');
		request.session.set('user', res);
		reply();
	} else {
		console.log('invalid login');
		reply().code(401);
	}
}
