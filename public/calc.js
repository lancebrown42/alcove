function calculator(){
	console.log("script running")
	var form = document.getElementById("calcForm");
	var name = form.elements[0].value;
	var abv = form.elements[1].value;
	var volume = form.elements[2].value;
	var cost = form.elements[3].value;
	var eff = 0;
	var result = [];
	eff = ((abv / 100) * volume) / cost;
	result = [name, eff]
	console.log(result);
	document.getElementById("result").innerHTML = result[0] + " has a drink efficiency of " + result[1].toString() + " oz ethanol/$";

}