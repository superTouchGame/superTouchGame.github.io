"use strict"

let krot1 = document.querySelector('.krot-1');
let krot2 = document.querySelector('.krot-2');
let krot3 = document.querySelector('.krot-3');
let krot4 = document.querySelector('.krot-4');
let i;

let gameInfo = document.querySelector('.game-info');
let destroyedCounter = document.querySelector('.destroy-counter');
let escapedCounter = document.querySelector(".escaped-counter");

document.addEventListener('click', function (event) {
	//ccылка картинка с гитхаба: https://supertouchgame.github.io/img/krot.png
	let el;
	console.log(event.target)
	if (event.target.src) {
		el = event.target.parentNode.className;
	} else {
		el = event.target.className;
	}
	if (el != "krot-1" && el != "krot-2" && el != "krot-3" && el != "krot-4") {
		let miss = document.getElementById('miss');
		miss.play();
		gameInfo.innerHTML = "miss shot!";
	}
	if (el == "krot-1" || el == "krot-2" || el == "krot-3" || el == "krot-4") {
		ramNum = getRandomNum(1, 4);
		destroyedCounter.innerHTML = Number(destroyedCounter.innerHTML) + 1;
		clearTimeout(i);
		setTimeout(startGame, 1000);
	}
});

krot1.addEventListener("click", function (event) {
	gameInfo.innerHTML = "way to go!";
	let forest = document.getElementById('hit');
	hit.play();
	krot1.classList.remove("_active");
	putin.pause();
	hitspecch.play();

});
krot2.addEventListener("click", function (event) {
	gameInfo.innerHTML = "way to go!";
	let forest = document.getElementById('hit');
	hit.play();
	krot2.classList.remove("_active");
	lukashenko.pause();
	hitspecch.play();
});

krot3.addEventListener("click", function (event) {
	gameInfo.innerHTML = "way to go!";
	let forest = document.getElementById('hit');
	hit.play();
	krot3.classList.remove("_active");
	kadirov.pause();
	hitspecch.play();
});

krot4.addEventListener("click", function (event) {
	gameInfo.innerHTML = "way to go!";
	let forest = document.getElementById('hit');
	hit.play();
	krot4.classList.remove("_active");
	medvedev.pause();
	hitspecch.play();

});

function getRandomNum(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

document.getElementById("rain").play();
document.getElementById("rain").loop = true;
document.getElementById("rain").autoplay = true;
let ramNum;
ramNum = getRandomNum(1, 4);
function startGame() {
	gameInfo.innerHTML = "hit the terrorist!";
	if (ramNum == 1) {
		krot1.classList.add("_active");
		let krotApear = document.getElementById('appear');
		krotApear.play();
		putin.currentTime = 0;
		putin.play();
		i = setTimeout(function didus() {
			if (krot1.classList.contains("_active")) {
				krot1.classList.remove("_active");
				gameInfo.innerHTML = "terrorist has escaped!";
				let krotDissapear = document.getElementById('dissapear');
				krotDissapear.play();
				escapedCounter.innerHTML = Number(escapedCounter.innerHTML) + 1;
				ramNum = getRandomNum(1, 4);
				putin.pause();
				setTimeout(startGame, 3000);
			}
		}, 3000);
	}
	if (ramNum == 2) {
		krot2.classList.add("_active");
		let krotApear = document.getElementById('appear');
		krotApear.play();
		lukashenko.currentTime = 0;
		lukashenko.play();
		i = setTimeout(function didus() {
			if (krot2.classList.contains("_active")) {
				krot2.classList.remove("_active");
				gameInfo.innerHTML = "terrorist has escaped!";
				let krotDissapear = document.getElementById('dissapear');
				krotDissapear.play();
				escapedCounter.innerHTML = Number(escapedCounter.innerHTML) + 1;
				ramNum = getRandomNum(1, 4);
				lukashenko.pause();
				setTimeout(startGame, 3000);
			}
		}, 3000);
	}
	if (ramNum == 3) {
		krot3.classList.add("_active");
		let krotApear = document.getElementById('appear');
		krotApear.play();
		kadirov.currentTime = 0;
		kadirov.play();
		i = setTimeout(function didus() {
			if (krot3.classList.contains("_active")) {
				krot3.classList.remove("_active");
				gameInfo.innerHTML = "terrorist has escaped!";
				let krotDissapear = document.getElementById('dissapear');
				krotDissapear.play();
				escapedCounter.innerHTML = Number(escapedCounter.innerHTML) + 1;
				ramNum = getRandomNum(1, 4);
				kadirov.pause();
				setTimeout(startGame, 3000);
			}
		}, 3000);
	}
	if (ramNum == 4) {
		krot4.classList.add("_active");
		let krotApear = document.getElementById('appear');
		krotApear.play();
		medvedev.currentTime = 0;
		medvedev.play();
		i = setTimeout(function didus() {
			if (krot4.classList.contains("_active")) {
				krot4.classList.remove("_active");
				gameInfo.innerHTML = "terrorist has escaped!";
				let krotDissapear = document.getElementById('dissapear');
				krotDissapear.play();
				escapedCounter.innerHTML = Number(escapedCounter.innerHTML) + 1;
				ramNum = getRandomNum(1, 4);
				medvedev.pause();
				setTimeout(startGame, 3000);
			}
		}, 3000);
	}
}
setTimeout(startGame, 3000);




///// ОТКЛЮЧИМ drag and drop
document.querySelector('.wrapper-image').ondragstart = function () {
	return false;
};
document.querySelector('.hole-1').ondragstart = function () {
	return false;
};
document.querySelector('.hole-2').ondragstart = function () {
	return false;
};
document.querySelector('.hole-3').ondragstart = function () {
	return false;
};
document.querySelector('.hole-4').ondragstart = function () {
	return false;
};
document.querySelector('.krot-1').ondragstart = function () {
	return false;
};
document.querySelector('.krot-2').ondragstart = function () {
	return false;
};
document.querySelector('.krot-3').ondragstart = function () {
	return false;
};
document.querySelector('.krot-4').ondragstart = function () {
	return false;
};










/* ДВИГАЮЩАЯСЯ МЫШКА

/////HTML
<div class="wrapper">
		<p>Кликните по "изображению" мыши и перемещайте её с помощью клавиш со стрелками.</p>

		<pre tabindex="0" id="mouse">
 _   _
(q\_/p)
 /. .\
=\_t_/=   __
 /   \   (
((   ))   )
/\) (/\  /
\  Y  /-'
 nn^nn
</pre>
	</div>
/////HTML

/////СSS
body._block {
	overflow: hidden;
}
.wrapper {
}
#mouse {
	display: inline-block;
	cursor: pointer;
	margin: 0;
 }
 #mouse._focus {

 }

 #mouse:focus {
	outline: 1px dashed black;
 }
/////СSS

//////// JS
let mouse = document.getElementById("mouse");
mouse.addEventListener("focus", function (event) {
	mouse.classList.add("_focus");
	document.body.classList.add("_block");
});
mouse.addEventListener("blur", function (event) {
	mouse.classList.remove("_focus");
	document.body.classList.remove("_block");
});
document.addEventListener('keydown', function (event) {
	if (event.code == "ArrowRight" && mouse.classList.contains('_focus')) {
		let mouseCoord = mouse.getBoundingClientRect();
		console.log(mouseCoord);
		mouse.style.position = "fixed";
		mouse.style.top = `${mouseCoord.top}px`;
		mouse.style.left = `${mouseCoord.left + 20}px`;
	}
	if (event.code == "ArrowLeft" && mouse.classList.contains('_focus')) {
		let mouseCoord = mouse.getBoundingClientRect();
		console.log(mouseCoord);
		mouse.style.position = "fixed";
		mouse.style.top = `${mouseCoord.top}px`;
		mouse.style.left = `${mouseCoord.left - 20}px`;
	}
	if (event.code == "ArrowUp" && mouse.classList.contains('_focus')) {
		let mouseCoord = mouse.getBoundingClientRect();
		console.log(mouseCoord);
		mouse.style.position = "fixed";
		mouse.style.left = `${mouseCoord.left}px`;
		mouse.style.top = `${mouseCoord.top - 20}px`;
	}
	if (event.code == "ArrowDown" && mouse.classList.contains('_focus')) {
		let mouseCoord = mouse.getBoundingClientRect();
		console.log(mouseCoord);
		mouse.style.position = "fixed";
		mouse.style.left = `${mouseCoord.left}px`;
		mouse.style.top = `${mouseCoord.top + 20}px`;
	}
});
//////// JS
*/ //ДВИГАЮЩАЯСЯ МЫШКА
















/* Редактируемые ячейки по клику

/////////////////////////HTML
<table id="bagua-table">
			<tr>
				<th colspan="3">Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
			</tr>
			<tr>
				<td class="nw"><strong>Северо-Запад</strong>
					<br>Металл
					<br>Серебро
					<br>Старейшины
				</td>
				<td class="n"><strong>Север</strong>
					<br>Вода
					<br>Синий
					<br>Перемены
				</td>
				<td class="ne"><strong>Северо-Восток</strong>
					<br>Земля
					<br>Жёлтый
					<br>Направление
				</td>
			</tr>
			<tr>
				<td class="w"><strong>Запад</strong>
					<br>Металл
					<br>Золото
					<br>Молодость
				</td>
				<td class="c"><strong>Центр</strong>
					<br>Всё
					<br>Пурпурный
					<br>Гармония
				</td>
				<td class="e"><strong>Восток</strong>
					<br>Дерево
					<br>Синий
					<br>Будущее
				</td>
			</tr>
			<tr>
				<td class="sw"><strong>Юго-Запад</strong>
					<br>Земля
					<br>Коричневый
					<br>Спокойствие
				</td>
				<td class="s"><strong>Юг</strong>
					<br>Огонь
					<br>Оранжевый
					<br>Слава
				</td>
				<td class="se"><strong>Юго-Восток</strong>
					<br>Дерево
					<br>Зеленый
					<br>Роман
				</td>
			</tr>
		</table>
		<div class="button">
			<a class="button-ok" href="#">OK</a>
			<a class="button-cancel" href="#">CANCEL</a>
		</div>
		/////////////////////////HTML

		/////////////////////////CSS
		th {
	text-align: center;
	font-weight: bold;
 }

 td {
	width: 150px;
	white-space: nowrap;
	text-align: center;
	vertical-align: middle;
	padding: 10px;
 }
 #table-area {
	 white-space: wrap;
	width: 145px;
	white-space: nowrap;
	text-align: center;
	vertical-align: middle;
	padding: 10px;


 }

 .nw {
	background-color: #999;
 }

 .n {
	background-color: #03f;
	color: #fff;
 }

 .ne {
	background-color: #ff6;
 }

 .w {
	background-color: #ff0;
 }

 .c {
	background-color: #60c;
	color: #fff;
 }

 .e {
	background-color: #09f;
	color: #fff;
 }

 .sw {
	background-color: #963;
	color: #fff;
 }

 .s {
	background-color: #f60;
	color: #fff;
 }

 .se {
	background-color: #0c3;
	color: #fff;
 }




 .button {
	 display: inline-block;
	 border: 2px solid red;
	 position: absolute;
	 z-index: 10;
	 visibility: hidden;


 }
 .button-ok {
	 margin-right: 10px;
	 background-color: #666;
 }
 .button-cancel {
	background-color: #666;
 }
			 /////////////////////////CSS

//////////////////////JS
let table = document.getElementById('bagua-table');

table.addEventListener('click', function (event) {
	if (!(table.classList.contains("_active"))) {
		table.classList.add("_active");
		let elem;
		if (event.target.tagName == "TD") {
			elem = event.target;
		}
		if (event.target.parentNode.tagName == "TD") {
			elem = event.target.parentNode;
		}
		elem.classList.add("elem-active");
		let elemHeight = elem.offsetHeight;
		let elemCoord = elem.getBoundingClientRect();
		let elemInner = elem.innerHTML;
		let elemOuter = elem.outerHTML;
		elem.outerHTML = `<textarea id="table-area"></textarea>`
		let area = document.getElementById('table-area');
		area.value = elemInner;
		area.style.resize = "none";
		area.style.height = elemHeight - 25 + "px";
		area.focus();
		let button = document.querySelector('.button');
		button.style.visibility = "visible";
		button.style.top = elemCoord.top + window.pageYOffset + elemHeight + 'px';
		button.style.left = elemCoord.left + "px";

		//
		let buttonOK = document.querySelector('.button-ok');
		let buttonCancel = document.querySelector('.button-cancel');
		buttonOK.addEventListener("click", function (event) {
			let areaInner = area.value;
			area.outerHTML = elem.outerHTML;
			let elemActive = document.querySelector('.elem-active');
			elemActive.innerHTML = areaInner;
			let newElemH = elemActive.offsetHeight;
			button.style.top = elemCoord.top + window.pageYOffset + newElemH + 'px';
			elemActive.classList.remove('elem-active');
			table.classList.remove('_active');
		});
		buttonCancel.addEventListener("click", function (event) {
			area.outerHTML = elem.outerHTML;
			let elemActive = document.querySelector('.elem-active');
			elemActive.classList.remove('elem-active');
			table.classList.remove('_active');
		});
	}
});
//////////////////////JS
*/ //Редактируемые ячейки по клику







/* РЕДАКТИРУЕМЫЙ DIV
/////HTML
<div tabindex="0" class="div-area">Текст</div>
/////HTML

//////CSS
.div-area,
#lox {
	border: 1px solid #000;
	width: 250px;
	height: 100px;
}
.div-area {
	cursor: pointer;
}
//////////CSS
const mainForm = document.forms.didus;

function didus() {
	let divArea = document.querySelector('.div-area');
	let divAreaHtml = divArea.outerHTML;
	divArea.addEventListener('focus', function (event) {
		let divAreaText = divArea.innerHTML;
		divArea.outerHTML = `<textarea autofocus name="taskArea" id="lox">${divAreaText}</textarea>`;
		let textArea = document.getElementById('lox');
		textArea.focus();
		document.addEventListener('keydown', function (event) {
			if (event.code == "Enter") {
				textArea.blur();
			}
		});
		textArea.addEventListener('blur', function (event) {
			let textAreaContent = textArea.value;
			textArea.outerHTML = divAreaHtml;
			let divArea = document.querySelector('.div-area');
			divArea.innerHTML = textAreaContent;
			didus();
		});
	});
};
didus();
*/






/////////////////////  ЛЕНИВАЯ ЗАГРУЗКА КАРТИНОК
/*
let picture = document.querySelectorAll('.picture');
picture.forEach(function (item, index, array) {
	let clientH = document.documentElement.clientHeight;
	let itemCord = item.getBoundingClientRect();
	if (itemCord.top < clientH) {
		let getImg = item.firstElementChild;
		getImg.src = getImg.dataset.src;
	}
});
window.addEventListener("scroll", function (event) {
	picture.forEach(function (item, index, array) {
		let clientH = document.documentElement.clientHeight;
		let itemCord = item.getBoundingClientRect();
		if (itemCord.top < clientH) {
			let getImg = item.firstElementChild;
			getImg.src = getImg.dataset.src;
		}
	});
});
*/
///////////////////////////////////////////////



/*DRAG И DROP ОБЕКТОВ ПО КЛАСУ, И СКРОЛ ВВЕРХ ПО ДОСТИЖЕНИЮ КРАЯ БРАУЗЕРА\
//////////////////////////////HTML
<div class="main-field">
			<img src="img/field.jpg" alt="">
		</div>
		<div class="footbolist"><img src="img/footbaler-1.png" alt=""></div>
		<div class="footbolist"><img src="img/footbaler-2.jpg" alt=""></div>
		<div class="footbolist"><img src="img/footbaler-3.png" alt=""></div>
		//////////////////////////////HTML
		//////////////////////////////CSS
		.main-field {
	margin: 100px 0px 0px 100px;
	width: 800px;
	height: 500px;
}
.main-field img {
	max-width: 100%;
	min-height: 100%;
}

.footbolist {
	cursor: pointer;
	width: 100px;
	height: 100px;
	margin: 50px 0px 0px 50px;
}
.footbolist img {
	min-width: 100%;
	max-height: 100%;
}
//////////////////////////////CSS
//////////////////////////////JS
document.ondragstart = function () {
	return false;
};
let fullHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
document.addEventListener("mousedown", function (event) {
	if (event.target.closest('.footbolist')) {
		let footbolist = event.target.closest('.footbolist');
		footbolist.classList.add('active');
		footbolist.style.margin = "0px";
		footbolist.style.position = "absolute";
		footbolist.style.left = `${event.clientX - footbolist.offsetWidth / 2}px`;
		footbolist.style.top = `${event.clientY + window.pageYOffset - footbolist.offsetHeight / 2}px`;
	}
	document.addEventListener("mousemove", whenMouse);
});
function whenMouse(event) {
	let footbolist = document.querySelector('.active');
	footbolist.style.left = `${event.clientX - footbolist.offsetWidth / 2}px`;
	footbolist.style.top = `${event.clientY + window.pageYOffset - footbolist.offsetHeight / 2}px`;
	let documentHeight = document.documentElement.clientHeight;
	let footbalCord = footbolist.getBoundingClientRect();
	if (footbalCord.top <= 0) {
		window.scrollBy(0, footbalCord.top);
	}
	if (window.pageYOffset == 0 && footbalCord.top <= 0) {
		footbolist.style.top = `0px`;
	}
	if (footbalCord.top + footbolist.offsetWidth >= documentHeight) {
		let countScroll = footbalCord.top - documentHeight + footbolist.offsetWidth;
		window.scrollBy(0, countScroll);
	}
	console.log(footbalCord.top + window.pageYOffset);
	if (footbalCord.top + window.pageYOffset >= fullHeight) {
		footbolist.style.top = `${fullHeight - footbolist.offsetHeight / 2}px`;
	}



}
document.addEventListener("mouseup", function (event) {
	document.removeEventListener("mousemove", whenMouse);
	let footbolist = document.querySelector('.active');
	footbolist.classList.remove('active');
});

*/

///////////////////////////////////////////////////////////  ПОЛЗУНОК
/*
let whiteArea = document.querySelector('.white-field');
let polzynok = document.querySelector('.white-button');
let polzynokCoord = polzynok.getBoundingClientRect();
polzynok.ondragstart = function () {
	return false;
};
polzynok.addEventListener("mousedown", function (event) {
	document.addEventListener("mousemove", movePolzynok);
});
function movePolzynok() {
	polzynok.style.left = `${event.clientX - polzynokCoord.left}px`;
	if ((event.clientX - polzynokCoord.left) <= 0) {
		polzynok.style.left = "0px";
	}
	if ((event.clientX - polzynokCoord.left) >= whiteArea.clientWidth - polzynok.clientWidth) {
		console.log(whiteArea.clientWidth);
		polzynok.style.left = `${whiteArea.clientWidth - polzynok.clientWidth}px`;
	}


}
document.addEventListener("mouseup", function (event) {
	document.removeEventListener("mousemove", movePolzynok);
});
*/
///////////////////////////////////////////////////////////  ПОЛЗУНОК

////////////////////////////////////////////////////////////////////////  DRAG AND DROPE
/*
let ball = document.querySelector('.ball');
ball.ondragstart = function () {
	return false;
};
ball.addEventListener("mousedown", function (event) {
	ball.style.position = "absolute";
	ball.style.zIndex = 100;
	ball.style.left = `${event.clientX - ball.offsetWidth / 2}px`;
	ball.style.top = `${event.clientY - ball.offsetHeight / 2}px`;
	document.body.append(ball);
	document.addEventListener("mousemove", whenMouse);
});
//
function whenMouse() {
	ball.style.left = `${event.clientX - ball.offsetWidth / 2}px`;
	ball.style.top = `${event.clientY - ball.offsetHeight / 2}px`;
	ball.hidden = true;
	const nowCord = document.elementFromPoint(event.clientX, event.clientY);
	if (nowCord.closest('.field') && nowCord != null) {
		let field = document.querySelector('.field');
		field.classList.add("_active");
	}
	if (!(nowCord.closest('.field'))) {
		let field = document.querySelector('.field');
		field.classList.remove("_active");
	}
	ball.hidden = false;

}
//

//
ball.addEventListener("mouseup", function (event) {
	document.removeEventListener("mousemove", whenMouse);
});
*/
////////////////////////////////////////////////////////////////////////