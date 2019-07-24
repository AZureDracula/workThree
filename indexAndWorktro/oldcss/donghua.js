//function bottomEffect() {
//	$.fn.fullpage.moveSectionDown();
//}
///*下面是弹出消失效果*/
//$(function() {
//	$('#fullpage').fullpage({
//
//		onLeave: function(index, nextIndex, direction) {
//			var leavingSection = $(this);
//			//after leaving section 2
//			if(index == 2 && direction == 'down') {
//				$("#pageTwo_head").removeClass("bounceInLeft");
//				$("#pageTwo_head").addClass("bounceOutLeft");
//				document.getElementById("pageTwo_head").style.opacity = 0;
//			} else if(index == 2 && direction == 'up') {
//				$("#pageTwo_head").removeClass("bounceInLeft");
//				$("#pageTwo_head").addClass("bounceOutLeft");
//				document.getElementById("pageTwo_head").style.opacity = 0;
//			}
//		},
//		afterLoad: function(anchorLink, index) {
//			var loadedSection = $(this);
//			if(index == 2) {
//				$("#pageTwo_head").removeClass("bounceOutLeft");
//				$("#pageTwo_head").addClass("bounceInLeft");
//				document.getElementById("pageTwo_head").style.opacity = 1;
//			}
//			
//		}
//	});
//});