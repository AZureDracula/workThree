let stepMove = {
	wheelDirection: '',
	touchDirection: '',
	scrollingFlag: false,
	addFirefox: 1,
	wheelCount: 0,
	wheelCount1: 0,
	changeCount: 0,
	touchCount: 0,
	startX: 0,
	startY: 0,
	upTimes: 0,
	downTimes: 0,

	touchUpTimes: 0,
	touchDownTimes: 0,

	wheelStepByStep: function(targetElement, decisionCoefficient = 100, axisDirection = "y", perDisplacement = 100, displacementUnit = "px", maxUp = 0, maxDown = Infinity) {

		stepMove.decisionCoefficient = decisionCoefficient;
		stepMove.axisDirection = axisDirection;
		stepMove.perDisplacement = perDisplacement;
		stepMove.displacementUnit = displacementUnit;
		stepMove.targetElement = targetElement;
		stepMove.maxUp = maxUp;
		stepMove.maxDown = maxDown;

		if(navigator.userAgent.indexOf('Firefox') > 0) {
			stepMove.addFirefox = 50;
		}
		//TODO 暂停后的续接功能

		document.addEventListener("wheel", stepMove.getWheelDirection);

		document.querySelector(stepMove.targetElement).addEventListener("transitionend", () => {
			stepMove.wheelCount1 = stepMove.wheelCount = null;
			stepMove.scrollingFlag = false;
		});

	},

	getWheelDirection: function(event) {

		let yControll = event.deltaY;

		event.deltaY < 0 ? stepMove.wheelDirection = 'up' : stepMove.wheelDirection = 'down';
		// 
		stepMove.wheelCount++;
		stepMove.wheelCount1++;
		stepMove.getWheelCount(yControll);

	},

	getWheelCount: function(yControll) {

		if(stepMove.scrollingFlag == false) {

			yControll = Math.abs(event.deltaY * stepMove.addFirefox);

			if(yControll > stepMove.wheelCount || yControll > stepMove.wheelCount - stepMove.wheelCount1 * yControll) {

				stepMove.wheelCount += (stepMove.wheelCount + yControll) / stepMove.wheelCount1;

				if(Math.abs(stepMove.wheelCount) > stepMove.decisionCoefficient && stepMove.scrollingFlag === false) {

					stepMove.scrollPage();

				} else {

					stepMove.wheelCount1 = stepMove.wheelCount = null;
				}
			} else {

				stepMove.wheelCount1 = stepMove.wheelCount = null;
			}
		} else {

			stepMove.wheelCount1 = stepMove.wheelCount = null;
		}

	},
	scrollPage: function(event) {

		stepMove.scrollingFlag = true;
		stepMove.wheelCount1 = stepMove.wheelCount = null;
		stepMove.touchCount = null;
		// 算出现在的净向下次数
		let down = this.downTimes - this.upTimes;

		if(stepMove.touchDirection === "up" && down < this.maxDown || stepMove.wheelDirection == "down" && stepMove.targetElement != null && down < this.maxDown) {

			stepMove.changeCount = stepMove.changeCount - stepMove.perDisplacement;
			document.querySelector(stepMove.targetElement).style.transform = "translate" + stepMove.axisDirection.toUpperCase() + "(" + stepMove.changeCount + stepMove.displacementUnit + ")";
			this.downTimes++;

			stepMove.getTouchStart(event);
		} else if(stepMove.touchDirection === "down" && (-1 * down) < this.maxUp || stepMove.wheelDirection == 'up' && stepMove.targetElement != null && (-1 * down) < this.maxUp) {

			stepMove.changeCount = stepMove.changeCount + stepMove.perDisplacement;
			document.querySelector(stepMove.targetElement).style.transform = "translate" + stepMove.axisDirection.toUpperCase() + "(" + stepMove.changeCount + stepMove.displacementUnit + ")";
			this.upTimes++;

			stepMove.getTouchStart(event);
		} else {

			this.scrollingFlag = false;
		}

	},

	getTouchStart: (event) => {

		stepMove.startY = event.targetTouches[0].clientY;

		stepMove.startX = event.targetTouches[0].clientX;

		stepMove.getTouchDirection(event);

	},
	getTouchDirection: () => {

		let y = stepMove.startY - event.targetTouches[0].clientY;

		y > 0 ? stepMove.touchDirection = 'up' : stepMove.touchDirection = 'down';

		stepMove.touchCount++;

		stepMove.getTouchCount(y, event);
	},
	touchStepByStep: (targetElement, decisionCoefficient = 100, axisDirection = "y", perDisplacement = 100, displacementUnit = "px") => {
		stepMove.decisionCoefficient = decisionCoefficient;
		stepMove.axisDirection = axisDirection;
		stepMove.perDisplacement = perDisplacement;
		stepMove.displacementUnit = displacementUnit;
		stepMove.targetElement = targetElement;
		//TODO 暂停后的续接功能
		document.addEventListener('touchstart', stepMove.getTouchStart); //获取触点起始位置
		document.addEventListener('touchmove', stepMove.getTouchDirection); //判断移动方向
		document.querySelector(stepMove.targetElement).addEventListener("transitionend", () => {
			stepMove.touchCount = false;
			stepMove.scrollingFlag = false;
		});
	},
	getTouchCount: (y, event) => {
		if(stepMove.scrollingFlag == false) {

			if(Math.abs(y) / stepMove.touchCount > 50 && Math.abs(y) / stepMove.touchCount < 100) {

				if(Math.abs(y) > stepMove.decisionCoefficient) {

					stepMove.scrollPage(event);
				}
			} else {

				y = stepMove.touchCount = 1

			}
		} else {

			y = stepMove.touchCount = 1;
		}
	},

	stop: function() {
		document.removeEventListener('wheel', stepMove.getWheelDirection);
		document.removeEventListener('touchstart', stepMove.getTouchStart);
		document.removeEventListener('touchmove', stepMove.getTouchDirection);
	},

	start: function() {
		document.addEventListener('wheel', stepMove.getWheelDirection);
		document.addEventListener('touchstart', stepMove.getTouchStart);
		document.addEventListener('touchmove', stepMove.getTouchDirection);
	},

}

stepMove.wheelStepByStep("#allpage", 50, "y", 100, "%", 0, 5);
stepMove.touchStepByStep("#allpage", 50, "y", 100, "%", 0, 5);

document.addEventListener("wheel", function() {
	let pagecount = document.getElementById("allpage");

	if(pagecount.style.transform == "translateY(-100%)") {
		$("#pageTwoCenterTwoLeft").addClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").removeClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").addClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").removeClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").addClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").removeClass("bounceOutRightTwo");

	} else if(pagecount.style.transform == "translateY(-200%)" || pagecount.style.transform == "translateY(0%)") {

		$("#pageTwoCenterTwoLeft").removeClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").addClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").removeClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").addClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").removeClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").addClass("bounceOutRightTwo");

	};
	if(pagecount.style.transform == "translateY(-500%)") {
		$("#bottomArrow").removeClass("showOn");
		$("#bottomArrow").addClass("showOff");
	} else {
		$("#bottomArrow").removeClass("showOff");
		$("#bottomArrow").addClass("showOn");
	};

});

document.addEventListener("touchmove", function() {
	let pagecount = document.getElementById("allpage");

	if(pagecount.style.transform == "translateY(-100%)") {
		$("#pageTwoCenterTwoLeft").addClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").removeClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").addClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").removeClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").addClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").removeClass("bounceOutRightTwo");

	} else if(pagecount.style.transform == "translateY(-200%)" || pagecount.style.transform == "translateY(0%)") {

		$("#pageTwoCenterTwoLeft").removeClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").addClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").removeClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").addClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").removeClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").addClass("bounceOutRightTwo");

	};
	if(pagecount.style.transform == "translateY(-500%)") {
		$("#bottomArrow").removeClass("showOn");
		$("#bottomArrow").addClass("showOff");
	} else {
		$("#bottomArrow").removeClass("showOff");
		$("#bottomArrow").addClass("showOn");
	};

});

function bottomEffect() {
	let pagecount3 = document.getElementById("allpage");

	if(pagecount3.style.transform == "translateY(0%)") {

		$("#pageTwoCenterTwoLeft").addClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").removeClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").addClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").removeClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").addClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").removeClass("bounceOutRightTwo");
		//		console.log("调用第一页箭头");

	} else if(pagecount3.style.transform == "translateY(-100%)") {

		$("#pageTwoCenterTwoLeft").removeClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").addClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").removeClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").addClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").removeClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").addClass("bounceOutRightTwo");
	};
	if(pagecount3.style.transform == "translateY(-400%)") {
		$("#bottomArrow").removeClass("showOn");
		$("#bottomArrow").addClass("showOff");
	} else {
		$("#bottomArrow").removeClass("showOff");
		$("#bottomArrow").addClass("showOn");
	};
	/********************/
	stepMove.touchDirection = "up";
	stepMove.scrollPage();
	/*******************/

};