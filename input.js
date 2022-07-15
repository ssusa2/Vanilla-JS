/** @format */
const loginForm = document.querySelector('#login-form');

const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

const gretting = document.querySelector('#greeting');
const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';
const hanbleClick = (e) => {
	e.preventDefault();
	const username = loginInput.value;
	loginForm.classList.add('hidden');
	console.log(username);
};

link.addEventListener('click', hanbleClick);

function onLoginsubmit(e) {
	e.preventDefault();

	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	console.log(username);
	gretting.innerText = `Hello ${username}`;
	gretting.classList.remove(HIDDEN_CLASSNAME);

	localStorage.setItem('username', username);
	// if (value === '') {
	// 	alert('이름을 입력하세요');
	// } else if (value.length > 14) {
	// 	alert('이름이 너무 길어요!');
	// }
}

const savedUsername = localStorage.getItem('username');

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginsubmit);
} else {
	gretting.classList.remove(HIDDEN_CLASSNAME);
	gretting.innerText = `Hello ${savedUsername}`;
}

loginButton.addEventListener('click', onclick);
