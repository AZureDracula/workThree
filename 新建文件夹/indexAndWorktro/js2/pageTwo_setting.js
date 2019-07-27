/**********上面测试*********/

let pageOne_width = screen.availWidth;
let pageOne_height = screen.availHeight;
let pageOne_sea = document.getElementById("pageOne_sea");
let pageOne_sky = document.getElementById("pageOne_sky");
let pageOne_mount_cloud = document.getElementById("pageOne_mount_cloud");
let pageOne_sea_height = pageOne_sea.height;
let pageOne_little_cloud = document.getElementById("pageOne_little_cloud");

window.onload = function() {
	document.querySelector("#pageThree").addEventListener("scroll",()=>{
		let leftS = document.querySelector("#pageThree").scrollLeft;
		 document.querySelector('#one').style.transform = 'translateX('+leftS*0.3+"px)";
            document.querySelector('#two').style.transform = 'translateX('+leftS*0.2+"px)";
            document.querySelector('#three').style.transform = 'translateX('+leftS*0.3+"px)";
            document.querySelector('#four').style.transform = 'translateX('+leftS*0.2+"px)";
            document.querySelector('#behind').style.transform = 'translateX('+leftS*0.3+"px)";
            document.querySelector('#front').style.transform = 'translateX('+leftS*0.4+"px)";
	})
	/*****/

	pageOne_sky.height = pageOne_sky.width * 2;
	//  console.log(pageOne_sky.height);

	let width_screen = screen.width;
	let height_screen = screen.height;
	let pageTwo_head = document.getElementById("pageTwo_head");
	//	console.log("屏幕宽度为" + width_screen + "px");
	//	console.log("屏幕高度为" + height_screen + "px");
	let tree = document.getElementById("pageTwo_tree");

	if(width_screen > 1000) {
		tree.style.height = height_screen * 0.197250 + "px";
		tree.style.width = height_screen * 0.197250 * 1.633312 + "px";
		pageTwo_head.style.top = "0.800000%";
		console.log("好大的屏幕鸭~~收起你危险的想法，秋梨膏！");
		$("#pageTwo_headOne").removeClass("pageTwo_fontSizeOne");
		$("#pageTwo_headTwo").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headThree").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headFour").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerTittle").removeClass("pageTwo_fontSizeOne");
		$("#pageTwo_centerFontOne").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerFontTwo").removeClass("pageTwo_fontSizeTwo");

		$("#pageTwo_headOne").addClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_headTwo").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headThree").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headFour").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerTittle").addClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_centerFontOne").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerFontTwo").addClass("pageTwo_fontSizeTwoPc");

	} else if(width_screen < 1000) {
		tree.style.height = '19.725000%';
		tree.style.width = '57.311111%';
		pageTwo_head.style.top = "4.800000%";
		$("#pageTwo_headOne").removeClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_headTwo").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headThree").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headFour").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerTittle").removeClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_centerFontOne").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerFontTwo").removeClass("pageTwo_fontSizeTwoPc");

		$("#pageTwo_headOne").addClass("pageTwo_fontSizeOne");
		$("#pageTwo_headTwo").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headThree").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headFour").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerTittle").addClass("pageTwo_fontSizeOne");
		$("#pageTwo_centerFontOne").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerFontTwo").addClass("pageTwo_fontSizeTwo");
	}
	//	console.log(tree.style.height);
	//	console.log(tree.style.width);
}

window.onresize = function() {
	
	
	/*****/

	pageOne_sky.height = pageOne_sky.width * 2;
	//  console.log(pageOne_sky.height);

	let width_screen = screen.width;
	let height_screen = screen.height;
	let pageTwo_head = document.getElementById("pageTwo_head");
	//	console.log("屏幕宽度为" + width_screen + "px");
	//	console.log("屏幕高度为" + height_screen + "px");
	let tree = document.getElementById("pageTwo_tree");

	if(width_screen > 1000) {
		tree.style.height = height_screen * 0.197250 + "px";
		tree.style.width = height_screen * 0.197250 * 1.633312 + "px";
		pageTwo_head.style.top = "0.800000%";
		console.log("好大的屏幕鸭~~收起你危险的想法，秋梨膏！");
		$("#pageTwo_headOne").removeClass("pageTwo_fontSizeOne");
		$("#pageTwo_headTwo").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headThree").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headFour").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerTittle").removeClass("pageTwo_fontSizeOne");
		$("#pageTwo_centerFontOne").removeClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerFontTwo").removeClass("pageTwo_fontSizeTwo");

		$("#pageTwo_headOne").addClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_headTwo").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headThree").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headFour").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerTittle").addClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_centerFontOne").addClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerFontTwo").addClass("pageTwo_fontSizeTwoPc");

	} else if(width_screen < 1000) {
		tree.style.height = '19.725000%';
		tree.style.width = '57.311111%';
		pageTwo_head.style.top = "4.800000%";
		$("#pageTwo_headOne").removeClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_headTwo").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headThree").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_headFour").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerTittle").removeClass("pageTwo_fontSizeOnePc");
		$("#pageTwo_centerFontOne").removeClass("pageTwo_fontSizeTwoPc");
		$("#pageTwo_centerFontTwo").removeClass("pageTwo_fontSizeTwoPc");

		$("#pageTwo_headOne").addClass("pageTwo_fontSizeOne");
		$("#pageTwo_headTwo").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headThree").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_headFour").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerTittle").addClass("pageTwo_fontSizeOne");
		$("#pageTwo_centerFontOne").addClass("pageTwo_fontSizeTwo");
		$("#pageTwo_centerFontTwo").addClass("pageTwo_fontSizeTwo");

	}
	//	console.log(tree.style.height);
	//	console.log(tree.style.width);
}