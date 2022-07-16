/** @format */

const h2 = document.querySelector('.third h2');

console.log(h2);
function handleTitleClick() {
	const clickedClass = 'active';
	h2.classList.toggle(clickedClass);
}

h2.addEventListener('click', handleTitleClick);
