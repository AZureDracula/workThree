var mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 2,
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	centeredSlides: true,
	loop: false,
	grabCursor: true, //变爪子
	preventClicksPropagation: true, //整下点击事件
	touchRatio: 0.9, //滑动难易
	iOSEdgeSwipeDetection: true, //禁止从边缘触发
	//				touchAngle: 30,                         //触发角度
	//				speed: 2000,
	//				
	//				
	//				
	//				
	//				
	//				

	on: {
		slideChange: function() {
			console.log(this.activeIndex);
			if(this.activeIndex % 9 == 0) {
				console.log("产品经理： 舒");

				$("#pageSixBoardOne").removeClass("bounceOff");
				$("#pageSixBoardOne").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 1) {
				console.log("产品运营： 狡");

				$("#pageSixBoardTwo").removeClass("bounceOff");
				$("#pageSixBoardTwo").addClass("bounceOn");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 2) {
				console.log("技术       ： 狰");

				$("#pageSixBoardThree").removeClass("bounceOff");
				$("#pageSixBoardThree").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 3) {
				console.log("设计       ： 撇");

				$("#pageSixBoardFour").removeClass("bounceOff");
				$("#pageSixBoardFour").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 4) {
				console.log("行政人事： 夫诸");

				$("#pageSixBoardFive").removeClass("bounceOff");
				$("#pageSixBoardFive").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 5) {
				console.log("企划公关： 狂鸟");

				$("#pageSixBoardSix").removeClass("bounceOff");
				$("#pageSixBoardSix").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 6) {
				console.log("多媒体    ： 驺吾");

				$("#pageSixBoardSeven").removeClass("bounceOff");
				$("#pageSixBoardSeven").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 7) {
				console.log("新媒体    ： 桐桐");

				$("#pageSixBoardEight").removeClass("bounceOff");
				$("#pageSixBoardEight").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

				$("#pageSixBoardNine").removeClass("bounceOn");
				$("#pageSixBoardNine").addClass("bounceOff");

			} else if(this.activeIndex % 9 == 8) {
				console.log("通讯社    ： 毕方");

				$("#pageSixBoardNine").removeClass("bounceOff");
				$("#pageSixBoardNine").addClass("bounceOn");

				$("#pageSixBoardTwo").removeClass("bounceOn");
				$("#pageSixBoardTwo").addClass("bounceOff");

				$("#pageSixBoardThree").removeClass("bounceOn");
				$("#pageSixBoardThree").addClass("bounceOff");

				$("#pageSixBoardFour").removeClass("bounceOn");
				$("#pageSixBoardFour").addClass("bounceOff");

				$("#pageSixBoardFive").removeClass("bounceOn");
				$("#pageSixBoardFive").addClass("bounceOff");

				$("#pageSixBoardSix").removeClass("bounceOn");
				$("#pageSixBoardSix").addClass("bounceOff");

				$("#pageSixBoardSeven").removeClass("bounceOn");
				$("#pageSixBoardSeven").addClass("bounceOff");

				$("#pageSixBoardEight").removeClass("bounceOn");
				$("#pageSixBoardEight").addClass("bounceOff");

				$("#pageSixBoardOne").removeClass("bounceOn");
				$("#pageSixBoardOne").addClass("bounceOff");

			};

			if(this.activeIndex % 9 >= 0 && this.activeIndex % 9 <= 3) {
				console.log("0-3");

				//							$("#pageSix").removeClass("pageSixBgTwo");
				//							$("#pageSix").removeClass("pageSixBgThree");
				//							$("#pageSix").addClass("pageSixBgOne");

				$("#pageSixTitleOne").removeClass("bounceUp");
				$("#pageSixTitleOne").addClass("bounceDown");

				$("#pageSixTitleTwo").removeClass("bounceDown");
				$("#pageSixTitleTwo").addClass("bounceUp");

				$("#pageSixTitleThree").removeClass("bounceDown");
				$("#pageSixTitleThree").addClass("bounceUp");

			} else if(this.activeIndex % 9 > 3 && this.activeIndex % 9 <= 5) {
				console.log("4-5");

				//							$("#pageSix").removeClass("pageSixBgOne");
				//							$("#pageSix").removeClass("pageSixBgThree");
				//							$("#pageSix").addClass("pageSixBgTwo");

				$("#pageSixTitleOne").removeClass("bounceDown");
				$("#pageSixTitleOne").addClass("bounceUp");

				$("#pageSixTitleThree").removeClass("bounceDown");
				$("#pageSixTitleThree").addClass("bounceUp");

				$("#pageSixTitleTwo").removeClass("bounceUp");
				$("#pageSixTitleTwo").addClass("bounceDown");

			} else if(this.activeIndex % 9 > 5 && this.activeIndex % 9 <= 8) {
				console.log("6-8");

				//							$("#pageSix").removeClass("pageSixBgOne");
				//							$("#pageSix").removeClass("pageSixBgTwo");
				//							$("#pageSix").addClass("pageSixBgThree");

				$("#pageSixTitleOne").removeClass("bounceDown");
				$("#pageSixTitleOne").addClass("bounceUp");

				$("#pageSixTitleTwo").removeClass("bounceDown");
				$("#pageSixTitleTwo").addClass("bounceUp");

				$("#pageSixTitleThree").removeClass("bounceUp");
				$("#pageSixTitleThree").addClass("bounceDown");
			};
		},
	},

	//spaceBetween: "8%",
	//spaceBetween : '10%',按container的百分比
});

function bumen() {
//	console.log("ddas");

	let allpaged = document.getElementById("allpage");
	allpaged.style.transform = "translateY(-500%)";
	$("#bottomArrow").removeClass("showOn");
	$("#bottomArrow").addClass("showOff");
	//				allpaged.style.transform = "translateY(-500%)";
	let a = -500;
	let b = 5;
	stepMove.changeCount = stepMove.changeCount + a;
	stepMove.downTimes = stepMove.downTimes + b;
	//				stepMove.scrollPage();

	//				stepMove.downTimes = stepMove.downTimes + 4;
	//				stepMove.touchCount = stepMove.touchCount+4;
}