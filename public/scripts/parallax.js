window.onload = function () {
	let parallaxBox = document.getElementById('parallax');
	let c1left = document.getElementById('layer1').offsetLeft,
		c1top = document.getElementById('layer1').offsetTop,
		c2left = document.getElementById('layer2').offsetLeft,
		c2top = document.getElementById('layer2').offsetTop,
		c3left = document.getElementById('layer3').offsetLeft,
		c3top = document.getElementById('layer3').offsetTop,
		c4left = document.getElementById('layer4').offsetLeft,
		c4top = document.getElementById('layer4').offsetTop,
		c5left = document.getElementById('layer5').offsetLeft,
		c5top = document.getElementById('layer5').offsetTop,
		c6left = document.getElementById('layer6').offsetLeft,
		c6top = document.getElementById('layer6').offsetTop,
		c7left = document.getElementById('layer7').offsetLeft,
		c7top = document.getElementById('layer7').offsetTop,
		c8left = document.getElementById('layer8').offsetLeft,
		c8top = document.getElementById('layer8').offsetTop;

	parallaxBox.onmousemove = function (event) {
		event = event || window.event;
		let x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;

		mouseParallax('layer1', c1left, c1top, x, y, 25);
		mouseParallax('layer2', c2left, c2top, x, y, 20);
		mouseParallax('layer3', c3left, c3top, x, y, 35);
		mouseParallax('layer4', c4left, c4top, x, y, 30);
		mouseParallax('layer5', c5left, c5top, x, y, 45);
		mouseParallax('layer6', c6left, c6top, x, y, 30);
		mouseParallax('layer7', c7left, c7top, x, y, 25);
		mouseParallax('layer8', c8left, c8top, x, y, 40);
	};
};

function mouseParallax(id, left, top, mouseX, mouseY, speed) {
	let obj = document.getElementById(id);
	let parentObj = obj.parentNode,
		containerWidth = parseInt(parentObj.offsetWidth),
		containerHeight = parseInt(parentObj.offsetHeight);
	obj.style.left =
		left -
		((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) *
			speed +
		'px';
	obj.style.top =
		top -
		((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) *
			speed +
		'px';
}
