

function bottomEffectOne() {
	$("#pageTwo_head").addClass("bounceInLeft");
	$("#pageTwo_head").removeClass("bounceOutLeft");
	document.getElementById("pageTwo_head").style.opacity = 1;
	$("#pageTwo_center").removeClass("fontOut");
	$("#pageTwo_center").addClass("fontIn");
	document.getElementById("pageTwo_center").style.opacity = 1;
	let yControll = 1;
	stepMove.wheelDirection = 'down';
	stepMove.wheelCount++;
	stepMove.wheelCount1++;
	stepMove.getWheelCount(yControll);
	stepMove.scrollPage();
	stepMove.changeCount = stepMove.changeCount - stepMove.perDisplacement; //用trasfrom要改变这里的正负(原本是+)
	document.querySelector(stepMove.targetElement).style.transform = "translate" + stepMove.axisDirection.toUpperCase() + "(" + stepMove.changeCount + stepMove.displacementUnit + ")";
	this.downTimes++;
	stepMove.getTouchStart(event);

}

function bottomEffectTwo() {
	$("#pageTwo_head").removeClass("bounceInLeft");
	$("#pageTwo_head").addClass("bounceOutLeft");
	document.getElementById("pageTwo_head").style.opacity = 0;
	$("#pageTwo_center").removeClass("fontIn");
	$("#pageTwo_center").addClass("fontOut");
	document.getElementById("pageTwo_center").style.opacity = 0.1;
	let yControll = 1;
	stepMove.wheelDirection = 'down';
	stepMove.wheelCount++;
	stepMove.wheelCount1++;
	stepMove.getWheelCount(yControll);
	stepMove.scrollPage();
	stepMove.changeCount = stepMove.changeCount - stepMove.perDisplacement; //用trasfrom要改变这里的正负(原本是+)
	document.querySelector(stepMove.targetElement).style.transform = "translate" + stepMove.axisDirection.toUpperCase() + "(" + stepMove.changeCount + stepMove.displacementUnit + ")";
	this.downTimes++;
	stepMove.getTouchStart(event);
}

function bottomEffectFive() {
	alert("下面什么都没有了");
}