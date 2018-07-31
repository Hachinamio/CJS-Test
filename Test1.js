var myText = "<ul>";

function printMyNumber(){
	for (i = 30; i <= 300; i++) {
		myText += "<li>" + checkMultiples(i) + "</li>";
	}
	myText += "</ul>";
	document.getElementById("result").innerHTML = myText;
}

function checkMultiples(x) {
	if(x % 7 == 0 && x % 13 == 0){	// multiples of 7 & 13
		printText = "<b>a-z</b>";
	} else if (x % 7 == 0){			// multiples of 7
		printText = "<b>abc</b>";
	} else if(x % 13 == 0){			// multiples of 13
		printText = "<b>xyz</b>";
	} else{							// rest cases
		printText = x;
	}
	return printText;
}


