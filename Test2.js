function oddPower2(x){		// x is an array
	arrLen = x.length;
	var myResult = [];
	for(i = 0; i < arrLen; i++){
		if (x[i] % 2 != 0){
			myResult.push(Math.pow(x[i],2));
		}
	}
	return myResult;
}