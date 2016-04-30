define([],function(){
	var Scheme = function loacalUtil() {},
	proto = Scheme.prototype;

	var utils = new Scheme();

	proto.mergeObject = function(obj1,obj2){
		var targetObj = {};
		for(var key in obj2){
			if(obj2[key] !== null && typeof obj2[key] === 'object'){
				//nest object
				if(obj1[key]){
					targetObj[key] = this.mergeObject(obj1[key],obj2[key]);
				}else{
					targetObj[key] = obj2[key];
				}
			}else{
				targetObj[key] = obj2[key];
			}
		}

		return targetObj;
	}

	proto.getNumber = function(num,pos){
		num = Math.floor(Math.abs(num));

		if(num >= pos * 10){
			var str_num = num.toString();
			return str_num[str_num.length-pos-1].valueOf();
		}else{
			return null;
		}
	}

	return utils;
});