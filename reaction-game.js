var start = new Date().getTime();


function makeShapeAppear() {
	document.getElementById("shape").style.display = "block";
		start = new Date().getTime();

}

setTimeout(makeShapeAppear, Math.random() * 2000);

document.getElementById("shape").onclick = function() {
	document.getElementById("shape").style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start) / 1000;
	
	document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";

	makeShapeAppear();
};