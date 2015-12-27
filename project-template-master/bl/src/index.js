exports = module.exports

doctors=require('./doctors.json');
patients=require('./patients.json');

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
