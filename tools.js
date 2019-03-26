function addClass(){
		
};
function hasClass(obj,cn){
	var reg = new RegExp("\\b"+cn+"\\b","g");
	if(reg.test(obj.className)){
		return(true);
	}else{
		return(false);
	}
};