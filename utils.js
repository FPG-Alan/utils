define([],function(){
	var Scheme = function loacalUtil() {},
	proto = Scheme.prototype;

	var utils = new Scheme();

	proto.mergeObject = function(obj1,obj2){
		for(var key in obj2){
			obj1[key] = obj2[key];
		}

		return obj1;
	}

	return utils;
});