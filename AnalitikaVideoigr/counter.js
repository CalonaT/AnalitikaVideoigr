console.log('Hello from Counter JS')
const btmMinus = document.querySelector('[data-action="minus"]');
const btmPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');


btmMinus.addEventLisener('click', function () {
	console.log('Minus click');

	if (parseInt(counter.innerText) > 1){
	counter.innerText = --counter.innerText;
}
});

btmPlus.addEventLisener('click', function () {
	console.log('Plus click');
	counter.innerText = ++counter.innerText;
});