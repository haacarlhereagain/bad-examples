var back = document.getElementsByClassName('back');
var next = document.getElementsByClassName('next');
var line = document.getElementById('second-container__left-slider__line')

var secondContainer = document.getElementsByClassName('second-container');
var banner = document.getElementsByClassName('second-container__right-banner');

var offset = 0;

window.onclick = (event) => {
	var target = event.target;
	if (target.classList == 'back' && offset != 0) {
		getBack();
	}
	else if (target.classList == 'next' && offset != -1300) {
		getNext();
	}
}

getBack = () => {
	offset += 650;
	line.style.transform = `translateX(${offset}px)`;
	
}

getNext = () => {
	offset -= 650;
	line.style.transform = `translateX(${offset}px)`;
}

// alert( banner[0].offsetWidth / secondContainer[0].offsetWidth);