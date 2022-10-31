let currentIndex = 0;
const currentAnswers = [];
let totalPrize = 0;

const btnOne = document.querySelector(".task-one__btn");
btnOne.addEventListener("click", btnOneHandler);
const divSolutionOne = document.querySelector(".task-one__solution");
const inputSolutionOne = document.querySelector(".task-one__field");

const btnTwo = document.querySelector(".task-two__btn");
btnTwo.addEventListener("click", btnTwoHandler);
const divSolutionTwo = document.querySelector(".task-two__solution");
const aStrSolutionTwo = document.querySelector(".str-a");
const bStrSolutionTwo = document.querySelector(".str-b");

const btnThree = document.querySelector(".task-three__btn");
btnThree.addEventListener("click", btnThreeHandler);

const quizForm = document.querySelector(".quiz-form");
const quizFormBtn = document.querySelector(".quiz-form__btn");
quizFormBtn.addEventListener("click", btnQuizFormHandler);
const currentTitle = document.querySelector(".quiz-form__title");
const currentTextQuestion = document.querySelector(".quiz-form__text");
const currentTextPrise = document.querySelector(".quiz-form__prize");

currentAnswers.push(document.querySelector(".quiz-form__label-one"));
currentAnswers.push(document.querySelector(".quiz-form__label-two"));
currentAnswers.push(document.querySelector(".quiz-form__label-three"));
currentAnswers.push(document.querySelector(".quiz-form__label-four"));
const listAnswers = document.querySelector(".quiz-form__list");

const confirmForm = document.querySelector(".confirm-form");
const confirmBtnOk = document.querySelector(".confirm-form__btn-ok");
confirmBtnOk.addEventListener("click", btnConfirmBtnOkHandler);
const confirmBtnNo = document.querySelector(".confirm-form__btn-no");
confirmBtnNo.addEventListener("click", btnConfirmBtnNoHandler);

const gameOverForm = document.querySelector(".game-over");
const gameOverText = document.querySelector(".game-over__text");
const gameOverBtn = document.querySelector(".game-over__btn-ok");
gameOverBtn.addEventListener("click", btnGameOverHandler);

// наверное удалить
const divSolutionThree = document.querySelector(".task-three__solution");

//#region ---------show listing-----------------------------------------------

const buttonOne = document.querySelector(".task-one__button");
const picSolutionOne = document.querySelector(".task-one__pic");
buttonOne.addEventListener("click", buttonOneHandler);
function buttonOneHandler() {
	if (buttonOne.innerHTML === "Показать скриншот") {
		buttonOne.innerHTML = "Скрыть скриншот";
		picSolutionOne.style.display = "block";
	} else {
		buttonOne.innerHTML = "Показать скриншот";
		picSolutionOne.style.display = "none";
	}
}

const buttonTwo = document.querySelector(".task-two__button");
const picSolutionTwo = document.querySelector(".task-two__pic");
buttonTwo.addEventListener("click", buttonTwoHandler);
function buttonTwoHandler() {
	if (buttonTwo.innerHTML === "Показать скриншот") {
		buttonTwo.innerHTML = "Скрыть скриншот";
		picSolutionTwo.style.display = "block";
	} else {
		buttonTwo.innerHTML = "Показать скриншот";
		picSolutionTwo.style.display = "none";
	}
}

const buttonThree = document.querySelector(".task-three__button");
const picSolutionThree = document.querySelector(".task-three__pic");
buttonThree.addEventListener("click", buttonThreeHandler);
function buttonThreeHandler() {
	if (buttonThree.innerHTML === "Показать скриншот") {
		buttonThree.innerHTML = "Скрыть скриншот";
		picSolutionThree.style.display = "block";
	} else {
		buttonThree.innerHTML = "Показать скриншот";
		picSolutionThree.style.display = "none";
	}
}

//#endregion

//#region task1 --------------------------------------------------------------

function btnOneHandler() {
	// если блок заполнен то очистить его дочерние элементы
	while (divSolutionOne.firstChild) {
		divSolutionOne.removeChild(divSolutionOne.firstChild);
	}

	let message = "";
	const strInput = inputSolutionOne.value;
	const itemSolutionOne = document.createElement("p");
	itemSolutionOne.className = "solution-one__item";
	if (checkPalindrome(strInput)) {
		message = `введенное значение "${strInput}" - палиндром`;
	} else {
		message = `введенное значение "${strInput}" - не палиндром`;
	}
	itemSolutionOne.innerHTML = message;
	divSolutionOne.append(itemSolutionOne);
}

function checkPalindrome(str) {
	return str == str.split("").reverse().join("");
}

//#endregion

//#region task2 --------------------------------------------------------------

function btnTwoHandler() {
	// если блок заполнен то очистить его дочерние элементы
	while (divSolutionTwo.firstChild) {
		divSolutionTwo.removeChild(divSolutionTwo.firstChild);
	}

	let message = "";
	const strA = aStrSolutionTwo.value;
	const strB = bStrSolutionTwo.value;
	const strUpperA = strA.toUpperCase();
	const strUpperB = strB.toUpperCase();

	const isAnagram = (strUpperA, strUpperB) => {
		const strSortA = strUpperA.split("").sort().join("");
		const strSortB = strUpperB.split("").sort().join("");
		return strSortA === strSortB;
	};

	if (isAnagram(strUpperA, strUpperB)) {
		message = `строки: "${strA}" и "${strB}" являются анаграммой`;
	} else {
		message = `строки: "${strA}" и "${strB}" НЕ являются анаграммой`;
	}

	const itemSolutionTwo = document.createElement("p");
	itemSolutionTwo.className = "solution-two__item";
	itemSolutionTwo.innerHTML = message;
	divSolutionTwo.append(itemSolutionTwo);
}

//#endregion

//#region createQuiz ---------------------------------------------------------
function createAnswers(id, answer) {
	return {
		id,
		answer,
	};
}

function createQuiz(id, question, correctAnswer, sum, answers) {
	return {
		id,
		question,
		correctAnswer,
		sum,
		answers,
	};
}

let answers = [];
let arrQuiz = [];

answers.push(createAnswers(1, "матросы"));
answers.push(createAnswers(2, "прачки"));
answers.push(createAnswers(3, "художники"));
answers.push(createAnswers(4, "официанты"));
arrQuiz.push(
	createQuiz(
		1,
		"Кто в начале прошлого века жил в общежитии «Корабль-прачечная» на Монмартре?",
		3,
		500,
		answers
	)
);
answers = [];

answers.push(createAnswers(1, "Аэропорт"));
answers.push(createAnswers(2, "Отель"));
answers.push(createAnswers(3, "Больница"));
answers.push(createAnswers(4, "Колеса"));
arrQuiz.push(
	createQuiz(2, "Какого романа нет у Артура Хейли?", 3, 1000, answers)
);
answers = [];

answers.push(createAnswers(1, "оды"));
answers.push(createAnswers(2, "поэмы"));
answers.push(createAnswers(3, "саги"));
answers.push(createAnswers(4, "полномочия"));
arrQuiz.push(
	createQuiz(3, "Что рано или поздно слагает каждый депутат?", 4, 2000, answers)
);
answers = [];

answers.push(createAnswers(1, "Шекспир"));
answers.push(createAnswers(2, "Пушкин"));
answers.push(createAnswers(3, "Роберт Фрост"));
answers.push(createAnswers(4, "Эзра Паунд"));
arrQuiz.push(
	createQuiz(4, "Кому принадлежит трагедия Гамлет?", 1, 3000, answers)
);
answers = [];

answers.push(createAnswers(1, "He"));
answers.push(createAnswers(2, "Fe"));
answers.push(createAnswers(3, "Au"));
answers.push(createAnswers(4, "Ag"));
arrQuiz.push(
	createQuiz(5, "Какой химический символ для серебра?", 4, 5000, answers)
);
answers = [];

//#endregion

//#region task3 --------------------------------------------------------------

function btnThreeHandler() {
	quizForm.style.display = "block";
	gameOverForm.style.display = "none";
	confirmForm.style.display = "none";

	currentTitle.innerHTML = `Вопрос №${currentIndex + 1}`;
	currentTextQuestion.innerHTML = `${arrQuiz[currentIndex].question}`;
	currentTextPrise.innerHTML = `ваш приз: ${totalPrize}`;

	for (let i = 0; i < 4; i++) {
		currentAnswers[i].innerHTML = arrQuiz[currentIndex].answers[i].answer;
	}
}

function btnQuizFormHandler() {
	quizForm.style.display = "none";

	let idUserAnswer = 0;

	for (let elements of listAnswers.children) {
		for (let answer of elements.children) {
			if (answer.type == "radio" && answer.checked) {
				idUserAnswer = Number(answer.value);
			}
		}
	}

	if (
		idUserAnswer === arrQuiz[currentIndex].correctAnswer &&
		currentIndex < 4
	) {
		confirmForm.style.display = "block";
		totalPrize += arrQuiz[currentIndex].sum;
		currentIndex++;
	} else {
		gameOverForm.style.display = "block";
		gameOverText.innerHTML = `ваш приз: ${totalPrize}`;
		confirmForm.style.display = "none";
		quizForm.style.display = "none";
	}
}

// -----

function btnConfirmBtnOkHandler() {
	if (currentIndex < 5) {
		btnThreeHandler();
	} else {
		btnConfirmBtnNoHandler();
	}
}

function btnConfirmBtnNoHandler() {
	quizForm.style.display = "none";
	confirmForm.style.display = "none";
	gameOverForm.style.display = "block";
	gameOverText.innerHTML = `ваш приз: ${totalPrize}`;
	currentIndex = 0;
	totalPrize = 0;
}

function btnGameOverHandler() {
	quizForm.style.display = "none";
	gameOverForm.style.display = "none";
	confirmForm.style.display = "none";
	currentIndex = 0;
	totalPrize = 0;
}

//#endregion
