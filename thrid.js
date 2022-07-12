/** @format */

const h2 = document.querySelector('.third h2');

console.log(h2);
function handleTitleClick() {
	const clickedClass = 'active';
	// if (h2.classList.contains(clickedClass)) {
	// 	h2.classList.remove(clickedClass) = '';
	// } else {
	// 	h2.classList.add(clickedClass) = clickedClass;
	// => toggle로 대체 가능
	h2.classList.toggle(clickedClass);
}

//classList 를 활용하면 더하거나 뺄때 모든 값이 바뀌지 않고 수정되는 값만 바뀐다.

h2.addEventListener('click', handleTitleClick);
