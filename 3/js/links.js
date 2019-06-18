var containerForLink = document.getElementById('container-for-link');
var button = document.getElementsByClassName('container-for-link__button');
var elems = document.getElementsByClassName('wrapper__container-for-variants');

containerForLink.onclick = (event) => {
	var target = event.target;
	if (target.tagName == 'BUTTON') {
		for (let i=0; i < button.length; i++) {
			if (button[i] == target) {
				var count = i;
			}
		}
		swapColor(target); 
		viewElems(count, target);
	}
}

swapColor = (target) => {
	for (let i=0; i < button.length; i++) {
		button[i].classList.remove('red-color');
	}
	target.classList.add('red-color');
}

viewElems = (count, target) => {
	for (let i=0; i < elems.length; i++) {
		elems[i].style.visibility = 'hidden';
	}
	elems[count].style.visibility = 'visible';
}