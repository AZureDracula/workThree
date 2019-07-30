// 页面总数

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

	/**
	 * 这个方法可以让指定目标元素根据滚轮操作来移动位置。其移动的方式是步进式的，可以通过三个可选参数来调整手感。
	 * 
	 * 注意：动画请在css中添加transition属性进行插值。
	 * @param {HTMLElement} targetElement 目标元素 应写css选择器
	 * @param {Number} decisionCoefficient 判定严格度 默认值100 相对值 值越高阻尼越大
	 * @param {String} axisDirection 移动轴向 默认Y 可选X
	 * @param {Number} perDisplacement 位移路程 默认100 若单位参数不填写则是100px
	 * @param {String} displacementUnit 位移单位 默认px 可以改成其他单位
	 * @param {Number} maxUp 从初始位置向上的最大位移次数 默认0次 可用infinite（无限次）
	 * @param {Number} maxDown 从初始位置向下的最大位移次数 默认infinite（无限次）
	 * @author 军喵
	 */
	// 鼠标滚轮事件 使用stepMove.wheelStepByStep调用并传参
	wheelStepByStep: function(targetElement, decisionCoefficient = 100, axisDirection = "y", perDisplacement = 100, displacementUnit = "px", maxUp = 0, maxDown = Infinity) {
		// 声明变量
		stepMove.decisionCoefficient = decisionCoefficient;
		stepMove.axisDirection = axisDirection;
		stepMove.perDisplacement = perDisplacement;
		stepMove.displacementUnit = displacementUnit;
		stepMove.targetElement = targetElement;
		stepMove.maxUp = maxUp;
		stepMove.maxDown = maxDown;
		// 适配火狐浏览器 如果是火狐浏览器，addFirefox就变成50
		if(navigator.userAgent.indexOf('Firefox') > 0) {
			stepMove.addFirefox = 50;
		}
		//TODO 暂停后的续接功能
		// 给指定的元素添加wheel监听器 执行getWheelDirection函数
		document.addEventListener("wheel", stepMove.getWheelDirection);
		// 
		document.querySelector(stepMove.targetElement).addEventListener("transitionend", () => {
			stepMove.wheelCount1 = stepMove.wheelCount = null;
			stepMove.scrollingFlag = false;
		});

	},
	/**
	 * 获取滚动方向
	 */
	getWheelDirection: function(event) {
		// let新变量yControll为deltaY
		// event.deltaY可以表示这次滚动的方向 当这个数大于0说明往下滚，反之向上
		let yControll = event.deltaY;
		// 将这次滚轮滚动的方向传入最开始声明的wheelDirection里
		// 向上则传入"up"，向下则传入"down"
		event.deltaY < 0 ? stepMove.wheelDirection = 'up' : stepMove.wheelDirection = 'down';
		// 
		stepMove.wheelCount++;
		stepMove.wheelCount1++;
		stepMove.getWheelCount(yControll);

		/******/

	},
	/**
	 * 获取滚动计数
	 * 
	 */
	getWheelCount: function(yControll) {

		// 这个变量默认就是false
		if(stepMove.scrollingFlag == false) {

			// 由于火狐的deltaY和谷歌的不一样 所以这里要乘以这个数
			// 这也是前面修改addFirefor才能兼容火狐的原因
			yControll = Math.abs(event.deltaY * stepMove.addFirefox);

			//			console.log("yControll:  "+ yControll +"stepMove.wheelCount:  "+stepMove.wheelCount + "stepMove.wheelCount1  :"  +stepMove.wheelCount1 );

			// console.log("Count：" + wheelCount + ", Count1：" + wheelCount1 + ", deltaY：" + yControll);
			if(yControll > stepMove.wheelCount || yControll > stepMove.wheelCount - stepMove.wheelCount1 * yControll) {

				stepMove.wheelCount += (stepMove.wheelCount + yControll) / stepMove.wheelCount1;
				//				console.log(stepMove.wheelCount);
				if(Math.abs(stepMove.wheelCount) > stepMove.decisionCoefficient && stepMove.scrollingFlag === false) {
					// console.log(wheelCount)
					// console.log(stepMove.wheelCount + "!");

					stepMove.scrollPage();

				} else {
					// console.log("out1");

					stepMove.wheelCount1 = stepMove.wheelCount = null;
				}
			} else {
				// console.log("out2");

				stepMove.wheelCount1 = stepMove.wheelCount = null;
			}
		} else {
			// console.log("out3");
			// console.log(stepMove.wheelCount);

			stepMove.wheelCount1 = stepMove.wheelCount = null;
		}
		// stepMove.scrollPage();
		//		console.log("yControll"+yControll);
		// console.log(stepMove.decisionCoefficient ==  stepMove.decisionCoefficient)
	},
	/**
	 * 滚动指定元素
	 */
	scrollPage: function(event) {
		//		console.log("动了，龙你个弟弟");
		//		console.log("  stepMove.scrollingFlag  " +stepMove.scrollingFlag);
		//		console.log("  stepMove.wheelCount1  " +stepMove.wheelCount1);
		//		console.log("  stepMove.wheelCount  " +stepMove.wheelCount);
		//		console.log("  stepMove.touchCount  " +stepMove.touchCount);
		//		console.log("  downTimes  " + this.downTimes);
		//		console.log("  upTimes  " + this.upTimes);

		stepMove.scrollingFlag = true;
		stepMove.wheelCount1 = stepMove.wheelCount = null;
		stepMove.touchCount = null;
		// 算出现在的净向下次数
		let down = this.downTimes - this.upTimes;
		//		console.log(down);
		//console.log(down + " " + this.maxDown + " " + this.maxUp);
		// 如果这个down比maxDown小，就能继续向下
		// 如果负down比maxUp小，就能继续向上
		// 这个是向下滚动                                                                                                                            
		if(stepMove.touchDirection === "up" && down < this.maxDown || stepMove.wheelDirection == "down" && stepMove.targetElement != null && down < this.maxDown) {
			//		console.log("11");

			stepMove.changeCount = stepMove.changeCount - stepMove.perDisplacement; //用trasfrom要改变这里的正负(原本是+)
			document.querySelector(stepMove.targetElement).style.transform = "translate" + stepMove.axisDirection.toUpperCase() + "(" + stepMove.changeCount + stepMove.displacementUnit + ")";
			this.downTimes++;
			stepMove.getTouchStart(event);
		} else if(stepMove.touchDirection === "down" && (-1 * down) < this.maxUp || stepMove.wheelDirection == 'up' && stepMove.targetElement != null && (-1 * down) < this.maxUp) {
			//		console.log("12");

			stepMove.changeCount = stepMove.changeCount + stepMove.perDisplacement;
			document.querySelector(stepMove.targetElement).style.transform = "translate" + stepMove.axisDirection.toUpperCase() + "(" + stepMove.changeCount + stepMove.displacementUnit + ")";
			this.upTimes++;
			stepMove.getTouchStart(event);
		} else {
			//		console.log("13");

			this.scrollingFlag = false;
		}
		// stepMove.getTouchStart(event);
		// console.log(stepMove.changeCount);
		//console.log(stepMove.scrollingFlag);

	},

	getTouchStart: (event) => {
		//		console.log("getTouchStart");
		//		console.log(event);
		stepMove.startY = event.targetTouches[0].clientY;
		//		console.log("  stepMove.startY  "  + stepMove.startY);
		stepMove.startX = event.targetTouches[0].clientX;
		//		console.log("  stepMove.startX  "  + stepMove.startX);

		stepMove.getTouchDirection(event);
		//		 console.log(stepMove.startX+" "+stepMove.startY)
	},
	getTouchDirection: () => {
		//		console.log("getTouchDirection");

		let y = stepMove.startY - event.targetTouches[0].clientY;
		//		console.log("  y  " + y);
		y > 0 ? stepMove.touchDirection = 'up' : stepMove.touchDirection = 'down';
		//		console.log("  stepMove.touchCount1  " +stepMove.touchCount);
		stepMove.touchCount++;
		//		console.log("  stepMove.touchCount2  " +stepMove.touchCount);
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
		//		console.log("11");
		//console.log("y:" + y + " Count:" + stepMove.touchCount)
		if(stepMove.scrollingFlag == false) {
			//		console.log("12");
			if(Math.abs(y) / stepMove.touchCount > 50 && Math.abs(y) / stepMove.touchCount < 100) {
				//		console.log("13");
				if(Math.abs(y) > stepMove.decisionCoefficient) {
					//		console.log("14");
					// document.querySelector('html').style.backgroundColor = "red"
					stepMove.scrollPage(event);
				}
			} else {
				//		console.log("15");
				y = stepMove.touchCount = 1
				// document.querySelector('html').style.backgroundColor = ""
			}
		} else {
			//		console.log("16");
			y = stepMove.touchCount = 1;
		}
	},
	/**
	 * 可以让滚动失效
	 */
	stop: function() {
		document.removeEventListener('wheel', stepMove.getWheelDirection);
		document.removeEventListener('touchstart', stepMove.getTouchStart);
		document.removeEventListener('touchmove', stepMove.getTouchDirection);
	},
	/**
	 * 可以让滚动生效
	 */
	start: function() {
		document.addEventListener('wheel', stepMove.getWheelDirection);
		document.addEventListener('touchstart', stepMove.getTouchStart);
		document.addEventListener('touchmove', stepMove.getTouchDirection);
	},

}
/**************************/

/*     上面封装完成                */

/******************************/


stepMove.wheelStepByStep("#allpage", 50, "y", 100, "%", 0, 5);
stepMove.touchStepByStep("#allpage", 50, "y", 100, "%", 0, 5);

/***        滚轮特殊位置触发效果                      ***/

document.addEventListener("wheel", function() {
	let pagecount = document.getElementById("allpage");

	if(pagecount.style.transform == "translateY(-100%)") {

		//		$("#pageTwoCenterTwoLeft").addClass("bounceInLeft");
		//		$("#pageTwoCenterTwoLeft").removeClass("bounceOutLeft");
		//		$("#pageTwoCenterOneRight").addClass("bounceInRight");
		//		$("#pageTwoCenterOneRight").removeClass("bounceOutRight");
		//		$("#pageTwoCenterThreeRight").addClass("bounceInRight");
		//		$("#pageTwoCenterThreeRight").removeClass("bounceOutRight");

		$("#pageTwoCenterTwoLeft").addClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").removeClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").addClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").removeClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").addClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").removeClass("bounceOutRightTwo");

		//		console.log("scroll 2 access");

	} else if(pagecount.style.transform == "translateY(-200%)" || pagecount.style.transform == "translateY(0%)") {

		//		$("#pageTwoCenterTwoLeft").removeClass("bounceInLeft");
		//		$("#pageTwoCenterTwoLeft").addClass("bounceOutLeft");
		//		$("#pageTwoCenterOneRight").removeClass("bounceInRight");
		//		$("#pageTwoCenterOneRight").addClass("bounceOutRight");
		//		$("#pageTwoCenterThreeRight").removeClass("bounceInRight");
		//		$("#pageTwoCenterThreeRight").addClass("bounceOutRight");

		$("#pageTwoCenterTwoLeft").removeClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").addClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").removeClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").addClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").removeClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").addClass("bounceOutRightTwo");

		//      console.log("qwq1");

	};
	if(pagecount.style.transform == "translateY(-500%)"){
		$("#bottomArrow").removeClass("showOn");
		$("#bottomArrow").addClass("showOff");
	}else{
		$("#bottomArrow").removeClass("showOff");
		$("#bottomArrow").addClass("showOn");
	};

});

/***        触屏特殊位置触发效果                      ***/

document.addEventListener("touchmove", function() {
	let pagecount = document.getElementById("allpage");

	if(pagecount.style.transform == "translateY(-100%)") {
		$("#pageTwoCenterTwoLeft").addClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").removeClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").addClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").removeClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").addClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").removeClass("bounceOutRightTwo");
		//		document.getElementById("pageTwo_head").style.opacity = 1;
		//		$("#pageTwo_center").removeClass("fontOut");
		//		$("#pageTwo_center").addClass("fontIn");
		//		document.getElementById("pageTwo_center").style.opacity = 1;

		//		console.log("touch 2 access");

	} else if(pagecount.style.transform == "translateY(-200%)" || pagecount.style.transform == "translateY(0%)") {

		$("#pageTwoCenterTwoLeft").removeClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").addClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").removeClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").addClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").removeClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").addClass("bounceOutRightTwo");
		//		document.getElementById("pageTwo_head").style.opacity = 0;
		//		$("#pageTwo_center").removeClass("fontIn");
		//		$("#pageTwo_center").addClass("fontOut");
		//		document.getElementById("pageTwo_center").style.opacity = 0.1;

		//		console.log("qwq2");
	};
	if(pagecount.style.transform == "translateY(-500%)"){
		$("#bottomArrow").removeClass("showOn");
		$("#bottomArrow").addClass("showOff");
	}else{
		$("#bottomArrow").removeClass("showOff");
		$("#bottomArrow").addClass("showOn");
	};

});

/*****************************************/

/***        箭头特殊位置触发效果                      ***/

/*****************************************/

function bottomEffect() {
	let pagecount = document.getElementById("allpage");

	if(pagecount.style.transform == "translateY(0%)") {

		$("#pageTwoCenterTwoLeft").addClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").removeClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").addClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").removeClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").addClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").removeClass("bounceOutRightTwo");
		//		console.log("调用第一页箭头");

	} else if(pagecount.style.transform == "translateY(-100%)") {

		$("#pageTwoCenterTwoLeft").removeClass("bounceInLeft");
		$("#pageTwoCenterTwoLeft").addClass("bounceOutLeft");
		$("#pageTwoCenterOneRight").removeClass("bounceInRightOne");
		$("#pageTwoCenterOneRight").addClass("bounceOutRightOne");
		$("#pageTwoCenterThreeRight").removeClass("bounceInRightTwo");
		$("#pageTwoCenterThreeRight").addClass("bounceOutRightTwo");
	};
	if(pagecount.style.transform == "translateY(-500%)"){
		$("#bottomArrow").removeClass("showOn");
		$("#bottomArrow").addClass("showOff");
	}else{
		$("#bottomArrow").removeClass("showOff");
		$("#bottomArrow").addClass("showOn");
	};
	/********************/
	stepMove.touchDirection = "up";
	stepMove.scrollPage();
	/*******************/

};

/***************************************************************************************************************/
//document.addEventListener("wheel",function(){
//			let pagecount = document.getElementById("allpage");
//
//			if(pagecount.style.transform == "translateY(-100%)" && stepMove.wheelDirection === "down") {
//			console.log("asda");
//			$("#pageTwo_head").addClass("bounceInLeft");
//			$("#pageTwo_head").removeClass("bounceOutLeft");
//			document.getElementById("pageTwo_head").style.opacity = 1;
//			$("#pageTwo_center").addClass("fontIn");
//			document.getElementById("pageTwo_center").style.opacity = 1;
//
//		};});

//stepMove.wheelStepByStep("#allpage", 100, "y", 100, "%", 0, maxPage-1);
//stepMove.touchStepByStep("#allpage", 100, "y", 100, "%", 0, maxPage-1);

// stepMove.wheelStepByStep("#second", 100, "y", 200, "px");

//事件测试
// document.ontouchstart = () =>{
//     console.log('touch start!')
// }
// document.onpointerdown = () =>{
//     console.log('point start!')
// }
// document.ondrag = () =>{
//     console.log('drag start!')
// }
// document.onscroll = () =>{
//     console.log('scroll!')
// }
// document.onmousedown = () =>{
//     console.log('mouse!')
// }
// document.oninput = () =>{
//     console.log('input!')
// }