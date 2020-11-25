//№1

function getMaxDigit(number) {

	let arrayNumeral = [];
	const BASE = 10;
	let currNum = number;
	
	do {
		const BASE_SHIFT_NUMERAL = Math.floor(currNum / BASE)

		let diff = currNum - BASE_SHIFT_NUMERAL * BASE

		arrayNumeral.unshift(diff)

		currNum = BASE_SHIFT_NUMERAL

	} while (currNum > 0)

	return Math.max.apply(null, arrayNumeral)
};


//№2


function exponentiation(a, n) {

	let result = a;

	for (let i = 1; i < n; i++) {

		result *= a;

	}

	return result;

};


//№3


const FIRST_BIG_LETTER_NAME = function upperFirstLetter(name) {

	const NAME = prompt('Введите имя (все буквы маленькие или заглавние, или разные)');

	return `${NAME} = ${NAME[0].toUpperCase()}${NAME.slice(1).toLowerCase()}`;


};


//№4


function getSumSalary(salary) {

	const TAX_ONE = 18;
	const TAX_TWO = 1.5;
	const BASE = 100;

	return (salary - salary * (TAX_ONE + TAX_TWO) / BASE);

};


//№5


function getRandomNumber(N, M) {

	return Math.floor(Math.random() * (M - N) + N);
};


//№6


function countLetter(char, str) {
	
	str = str.toLowerCase();

	let count = 0;

	for (let i = 0; i < str.length; i++) {

		if (str[i] === char) {
			count++
		}
	}
	return count;
};



//№7


function convertCurrency() {

	let currency = prompt('Введите количество и название валюты').toLowerCase();
	let a;
	let CURRENCY_LET = [];
	let sum = 0;
	const USD = 28.37;
	const UAH = 0.035;

	if (currency[currency.length - 1] === '$') {

		CURRENCY_LET = (currency.split(currency[currency.length - 1]).join(''));

		sum = CURRENCY_LET * USD;

		return `Вы ввели: ${CURRENCY_LET} usd; Сумма к выдаче: ${sum} uah`;

	} else if (currency[currency.length - 1] === 'h') {

		a = (currency.split(currency[currency.length - 1]).join(''));
		currency = a;

		a = (currency.split(currency[currency.length - 1]).join(''));
		currency = a;

		CURRENCY_LET = (currency.split(currency[currency.length - 1]).join(''));

		sum = (CURRENCY_LET * UAH).toFixed(2);
		return `Вы ввели: ${CURRENCY_LET} uah; Сумма к выдаче: ${sum} usd`;


	} else {

		alert('Введите USD или UAH');
	}

	return sum;
};



//№8

function getRandomPassword() {

	const PASSWORD = parseInt(prompt('Генерация случайного пароля: Введите длинну пароля (не менее 4 и не более 8)'));

	if (PASSWORD === 4) {

		return Math.floor(Math.random() * (9999 - 1000) + 1000);

	} else if (PASSWORD === 5) {

		return Math.floor(Math.random() * (99999 - 10000) + 10000);

	} else if (PASSWORD === 6) {

		return Math.floor(Math.random() * (999999 - 100000) + 100000);

	} else if (PASSWORD === 7) {

		return Math.floor(Math.random() * (9999999 - 1000000) + 1000000);

	} else if (PASSWORD === 8) {

		return Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
	} else {

		alert('Укажите правильное количество символов');
	}

};


//№9


function deleteLetters(letter, word) {

	const WORD_LOWER = word.toLowerCase();

	return WORD_LOWER.split(letter).join('');
};


//№10




function isPalindrom() {
	
	const PALYNDROM = prompt('Введите любое слово-палиндром').toUpperCase();

//	const PALYNDROM_FUNC = PALYNDROM;

	const PALYNDROM_REVERS = PALYNDROM.split('').reverse().join('');

	if (PALYNDROM_REVERS == PALYNDROM) {

		return `Cлово ${PALYNDROM} является палиндромом.`;

	} else {

		return `Cлово ${PALYNDROM} неявляется палиндромом.`;
	}
};


//№11


function deleteDuplicateLetter(sentence) {

	let duplicateLetter = [];

	for (let i of sentence) {

		if ((sentence.match(new RegExp(i, "g"))).length === 1) {

			duplicateLetter.push(i);
		}
	}
	return duplicateLetter.join('');
};



const FUNC_1 = document.querySelector('.function_1').innerHTML = `Функия №1: Наибольшая цифра в числе = ${getMaxDigit(12345)}`;
const FUNC_2 = document.querySelector('.function_2').innerHTML = `Функия №2: Возведение в степень = ${exponentiation(3,4)}`;
const FUNC_3 = document.querySelector('.function_3').innerHTML = `Функия №3: ${FIRST_BIG_LETTER_NAME()}`;
const FUNC_4 = document.querySelector('.function_4').innerHTML = `Функия №4: Зарплата после вычета налога = ${getSumSalary(2456)} грн.`;
const FUNC_5 = document.querySelector('.function_5').innerHTML = `Функия №5: Случайная цифра в диапазоне = ${getRandomNumber(20, 50)}`;
const FUNC_6 = document.querySelector('.function_6').innerHTML = `Функия №6: Буква "а" повторяется в слове ${countLetter('a', 'aghdAvgdJAkkfua')} раз`;
const FUNC_7 = document.querySelector('.function_7').innerHTML = `Функия №7: ${convertCurrency()}`;
const FUNC_8 = document.querySelector('.function_8').innerHTML = `Функия №8: ПАРОЛЬ - ${getRandomPassword()}`;
const FUNC_9 = document.querySelector('.function_9').innerHTML = `Функия №9: Арарат = ${deleteLetters('а', 'Арарат')}`;
const FUNC_10 = document.querySelector('.function_10').innerHTML = `Функия №10: ${isPalindrom()}`;
const FUNC_11 = document.querySelector('.function_11').innerHTML = `Функия №11: Вы можете изучить JavaScript, начиная с нуля и заканчивая продвинутыми концепциями вроде ООП = ${deleteDuplicateLetter('Вы можете изучить JavaScript, начиная с нуля и заканчивая продвинутыми концепциями вроде ООП')}`;





console.log(FUNC_1);
console.log(FUNC_2);
console.log(FUNC_3);
console.log(FUNC_4);
console.log(FUNC_5);
console.log(FUNC_6);
console.log(FUNC_7);
console.log(FUNC_8);
console.log(FUNC_9);
console.log(FUNC_10);
console.log(FUNC_11);