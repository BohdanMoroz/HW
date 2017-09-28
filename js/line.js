function show() {
	document.getElementById('nav').style.display = 'block';
	document.getElementById('header').style.height = 160 + "px";
	document.getElementById('page-title').style.marginTop = 60 + "px";
	document.getElementById('burger').style.backgroundImage = "url(../../img/cross.png)";
	// alert("show")
}

function hide() {
	document.getElementById('nav').style.display = 'none';
	document.getElementById('header').style.height = 50 + "px";
	document.getElementById('page-title').style.marginTop = -30 + "px";
	document.getElementById('burger').style.backgroundImage = "url(../../img/burger.png)";
	// alert("hide")
}

var isPushed = false;

function menu() {
	// alert(isPushed);
	if (!isPushed) {
		show()
		isPushed = true;
	} else {
		hide()
		isPushed = false;
	}
}