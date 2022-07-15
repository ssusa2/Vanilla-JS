/** @format */

const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const gretting = document.querySelector('#greeting');
const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';
const GrettingMent = gretting.innerText;
const savedUsername = localStorage.getItem('username');
const FORM_LIST = loginForm.classList;

const handleClick = (e) => {
	e.preventDefault();
	const username = loginInput.value;
	FORM_LIST.add('hidden');
};

link.addEventListener('click', handleClick);

function paintGreetings(username) {
	gretting.classList.remove(HIDDEN_CLASSNAME);
	gretting.innerText = `Hello ${username}`;
}

function onLoginsubmit(e) {
	e.preventDefault();
	FORM_LIST.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem('username', username);
	paintGreetings(username);
}

if (savedUsername === null) {
	FORM_LIST.remove(HIDDEN_CLASSNAME);
	loginButton.addEventListener('click', onLoginsubmit);
} else {
	paintGreetings(savedUsername);
}
