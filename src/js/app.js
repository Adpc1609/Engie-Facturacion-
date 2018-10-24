var menu = new TimelineMax({paused:true, reversed:true})
	
	menu
	.to("#burger1", .5, {rotation: 45, transformOrigin: "left 50%", ease:Power2.easeInOut}, "cross")
	.to("#burger2", .5, {autoAlpha: 0}, "cross")
	.to("#burger3", .5, {rotation: -45, transformOrigin: "left 50%", ease:Power2.easeInOut}, "cross")
	.to("#main", 0.75, {x: "-300px", ease:Power2.easeInOut})
	
	function menuIn() {
menu.reversed() ? menu.play() : menu.reverse();	
	}