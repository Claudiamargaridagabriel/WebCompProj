var bl = require('../../../bl/src');

exports = module.exports;

exports.get = function handler (request, reply) {
	var patient = bl.getPatientById(request.params.patID);
	var medicalActs = bl.getPatientMedicalReports(request.params.patID);
	reply({patient: patient, reports: medicalActs});
}
