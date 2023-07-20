let menuBtn = document.querySelector(".header__icon");
let menu = document.querySelector(".nav__list");
menuBtn.addEventListener("click", function () {
	menu.classList.toggle("active");
});

const nextButton = document.querySelector(".content__button-next");
let position = 0;
let counter = 0;

const prevButton = document.querySelector(".content__button-prev");
const track = document.querySelector(".slider__track");
const elementsCount = document.querySelectorAll(".slider__item").length;
const element = document.querySelector(".slider__img");
nextButton.addEventListener("click", (e) => {
	const width = element.offsetWidth;
	counter += 1;
	if (counter > elementsCount - 1) {
		position = 0;
		counter = 0;
	} else {
		position -= width;
	}
	track.style.transform = `translateX(${position}px)`;
});
prevButton.addEventListener("click", (e) => {
	const width = element.offsetWidth;
	counter -= 1;
	if (counter < 0) {
		position = (elementsCount - 1) * -1 * width;
		counter = elementsCount - 1;
	} else {
		position += width;
	}

	track.style.transform = `translateX(${position}px)`;
});
