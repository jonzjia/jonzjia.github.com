/*
 * oven.js
 *
 */

//create cookie
function bake(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = "; expires =" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

//read cookie
function sniff(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}

//delete cookie
function eat(name) {
	bake(name,"",-1);
}

function checkStyle() {
	if (sniff("style")) {
		// console.log("style found!");
		// console.log(sniff("style"));
	} else {
		console.log("no style found!");
		console.log("Time to bake a cookie!");
		bake("style", "light", 365);
	}
	setStyle(sniff("style"));
}

function setStyle(color) {
	$('style[id^="less:"]').remove();
	if (color == "light") {
		$('link#page_style').attr({href:"/css/light.css"});
		eat("style");
		bake("style", "light", 7);
	} else {
		$('link#page_style').attr({href:"/css/dark.css"});
		eat("style");
		bake("style", "dark", 7);
	}
	less.refresh();
}

checkStyle();
