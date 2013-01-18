function man() {
	//go to about page
	window.location='about.html';
}

function grep() {
	//google search for my vanity
	window.open("https://www.google.com/search?btnG=1&pws=0&q=jon+jia");
}

function home() {
	//go to home page
	window.location='http://www.jonzjia.com';
}

function blog() {
	//go to blog
	window.open("http://www.blog.jonzjia.com");
}

function resume() {
	//open resume
	window.open("resume.pdf");
}

function help() {
	//pop up help dialog
	TINY.box.show({url:'keyboard.html', width:640, height:480});
}

function contact() {
	window.location='mailto:jonzjia@gmail.com';
}

function Contact() {
	window.open("mailto:jonzjia@gmail.com");
}

function konamiCode() {
	console.log("konami code");
}

function switch_style() {
	$('style[id^="less:"]').remove();
	if (sniff("style") == "light") {
		$('link#page_style').attr({href:"css/dark.less"});
		eat("style");
		bake("style", "dark", 7);
	} else {
		$('link#page_style').attr({href:"css/light.less"});
		eat("style");
		bake("style", "light", 7);
	}
	less.refresh();
}
