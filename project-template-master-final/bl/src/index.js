exports = module.exports

doctors=require('./doctors.json');
patients=require('./patients.json');
reports=require('./reports.json');
acts=require('./acts.json');
actsReimbursement=require('./acts-rmb.json');
requests=require('./requests.json');


exports.getRequest = function(){
	return requests;
}

exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}

exports.login = function(name, pass) {
	for(var i=doctors.length;--i>-1;){
		var doc = doctors[i];
		if(doc.user==name && doc.pass==pass)
			return doc;
	}
}

exports.getPatients = function(){
	return patients;
}

exports.getPatientById = function(id){
	for(var i=patients.length;--i>-1;){
		var pat = patients[i];
		if(pat.patID==id)
			return pat;
	}
}

exports.getPatientMedicalReports = function(id){
	var ret = [];
	for(var i=reports.length;--i>-1;){
		var rep = reports[i];
		if(rep.patID==id)
			ret.push(rep);
	}
	return ret;
}

exports.getActs = function(){
	return acts;
}

exports.getActsReimbursement = function(){
	return actsReimbursement;
}
