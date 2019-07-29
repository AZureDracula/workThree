let leftS = 0;
let ticking = false;

function doSomething(leftS) {
	document.querySelector('#Four_ship').style.transform = 'translateX(' + leftS * 0.25 + "px)";
};

document.querySelector("#pageFive_2").onscroll = () => {
	leftS = document.querySelector("#pageFive_2").scrollLeft
	if(!ticking) {
		window.requestAnimationFrame(function() {
			doSomething(leftS);
			ticking = false;
		});

		ticking = true;
	}
};