/** @format */

// const title = document.getElementsByTagName('h1'); //tag 를 가고 올  수 있다.
const title = document.querySelector('.hello h1'); // 요소를 css방식으로 가져올 수 있따. 단 하나의 요소(첫번째)만 리턴
console.log(title);
// console.dir은 요소의 자세한 정보를 알려줌
document.getElementById('id 명'); // id 을 불러 온다.
document.getElementsByTagName('h1'); // tag 형식
document.getElementsByClassName('');
document.querySelector('.hello h1'); // css 방식, 단 하나의 요소(1번째)만 가져온다.
document.querySelector('#hello h1'); // #id
document.querySelector('.hello:first-child h1');
document.querySelectorAll('.all h1'); //css 방식, 일치하는 모든 것을 가져온다, 배열형식

function handletitleClick() {
	title.style.color = 'green';
	console.log('title was clicked!');
}

function handleMouseEnter() {
	title.innerText = 'Mouse is here!';
}
function handleMouseLeave() {
	title.innerText = 'Mouse is gone!';
}
title.addEventListener('click', handletitleClick); //에드이벤트리스터를 통해 첫번째 인자에 이벤트, 두번째 요소에 이벤트가 발생하고 나서 실행시킬 함수를 작성한다,
title.onclick = handletitleClick; //위와 같다.
// 아래 형식도 on~형식으로 바꿀수도 잇다.
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

// title.style.color = 'green'; // 스타일 변경

function handleWindowResize() {
	document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy() {
	alert('copier!');
}

function handleWindowOffline() {
	alert('SOS, NO WIFI');
}

function handleWindowOnline() {
	alert('CONNECT');
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy); //복사했을 때
window.addEventListener('offline', handleWindowOffline); //연결이 끊어졌을 때
window.addEventListener('online', handleWindowOnline); // 연결 됐을 떄
