console.log("qwq");
$(function() {
	$('#fullpage').fullpage({
		scrollingSpeed: 2000,
		touchSensitivity: 50,
		normalScrollElementTouchThreshold: 50,
		loopBottom: false,
		loopTop: false,
		//		scrollOverflow: true,
		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);
			//after leaving section 2
			if(index == 2 && direction == 'down') {
				$("#pageTwo_head").removeClass("bounceInLeft");
				$("#pageTwo_head").addClass("bounceOutLeft");
				document.getElementById("pageTwo_head").style.opacity = 0;
				$("#pageTwo_center").removeClass("fontIn");
				document.getElementById("pageTwo_center").style.opacity = 0.1;

			} else if(index == 2 && direction == 'up') {
				$("#pageTwo_head").removeClass("bounceInLeft");
				$("#pageTwo_head").addClass("bounceOutLeft");
				document.getElementById("pageTwo_head").style.opacity = 0;
				$("#pageTwo_center").removeClass("fontIn");
				document.getElementById("pageTwo_center").style.opacity = 0.1;

			}
		},
		afterLoad: function(anchorLink, index) {
			var loadedSection = $(this);
			if(index == 2) {

				document.getElementById("pageTwo_head").style.opacity = 1;
				$("#pageTwo_head").removeClass("bounceOutLeft");
				$("#pageTwo_head").addClass("bounceInLeft");
				$("#pageTwo_center").addClass("fontIn");
				document.getElementById("pageTwo_center").style.opacity = 1;

			}

		},
	});
});
