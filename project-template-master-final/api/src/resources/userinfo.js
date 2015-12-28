exports = module.exports

exports.get = function handler (request, reply) {
	var userInfo = request.session.get('user');
	console.log(userInfo);
	reply({docID: userInfo.docID, name: userInfo.name});
}
