var bl = require('../../../bl/src');

exports = module.exports;

exports.get = function handler (request, reply) {
	reply(bl.getActs());
}
