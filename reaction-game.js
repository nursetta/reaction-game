var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
	var top = Math.random() * 500;
	var left = Math.random() * 500;
	var width = Math.random() * 300;
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.width = width + "px";
	document.getElementById("shape").style.height = top + "px";
	document.getElementById("shape").style.display = "block";
	document.getElementById("shape").style.backgroundColor = getRandomColor();
	
		start = new Date().getTime();

}

function appearAfterDelay() {
	setTimeout(makeShapeAppear, Math.random() * 3000);
}
appearAfterDelay();

document.getElementById("shape").onclick = function() {
	document.getElementById("shape").style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start) / 1000;
	
	document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";

	appearAfterDelay();
};