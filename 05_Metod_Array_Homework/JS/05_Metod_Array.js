//№1

function getRandomArray(lengthArray, min, max) {

	lengthArray = parseInt(prompt('Введите длину массива'));
	min = parseInt(prompt('Введите минимальное значение целого числа'));
	max = parseInt(prompt('Введите максимальное значение целого числа'));

	let arrayRandom = []

	for (let i = 0; i < lengthArray; i++) {

		arrayRandom.push(Math.floor(Math.random() * (max - min) + min))

	}
	
	return arrayRandom;
};


//№2 moda


function getModa(...numbers) {

	const NUMBERS_MODA = numbers.reduce((allValues, value) => {
		if (value in allValues) {
			allValues[value]++;
		} else {
			allValues[value] = 1;
		}

		return allValues;
	}, {});


	let result = Object.keys(NUMBERS_MODA).map(function (key) {
		return [Number(key), NUMBERS_MODA[key]];
	});

	const moda = function () {

		let max = 0;
		let moda1 = [];

		for (let i = 0; i < result.length; i++) {

			if (result[i][1] > max)
				max = result[i][1]
			if (result[i][1] === max) {
				moda1.push(result[i][0])
			}
		}
		return moda1;
	}

	return moda();

};


//№3

function getAverage(...numbers) {

	const AVERAGE = numbers.reduce((sum, number) => {

		return sum + number

	}, 0);

	return AVERAGE / numbers.length;
};


//№4


function getMedian(...numbers) {

	let MEDIAN = 0;

	numbers.sort((numb1, numb2) => {

		return numb1 - numb2

	});

	for (let i = 0; i < numbers.length; i++) {

		if (numbers.length % 2 !== 0) {

			MEDIAN = numbers[(numbers.length - 1) / 2]

		} else {

			MEDIAN = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2 + 1]) / 2

		}
	}
	return MEDIAN;
};


//№5

function filterEvenNumbers(...numbers) {

	const EvenNumbers = numbers.filter((element, index, array) => {
		
		return  element % 2 !== 0;
	});
	
	return EvenNumbers;
};


//№6

function countPositiveNumbers(...numbers){
	
	let count = []
	
	numbers.map((numbers) => {
		
		if(numbers > 0){
			count++
		}
	
	});
	return count;
};


//№7

function getDividedByFive(...numbers){
	
	const DividedByFive = numbers.filter((number, index, array) => {
		
		return number % 5 === 0
	});
	
	return DividedByFive;									 
};


//№8

//I вариант
function replaceBadWords(string) {

	const WORDS_ARRAY = string.split(' ');

	const BAD_WORD_INDEX = WORDS_ARRAY.findIndex((word) => {

		return word.match(/fuck/g);
	});

	const WORD = WORDS_ARRAY[BAD_WORD_INDEX].replace(/fuck/, '****');

	WORDS_ARRAY[BAD_WORD_INDEX] = WORD;

	return WORDS_ARRAY.join(' ');

};

//II вариант
function replaceBadWordsTwo(string) {
	
	return string.replace(/shit/, '****')
};


//№9

function divideByThree(word) {

	const WORD_ARRAY = word.split(' ');

	let FILTER_WORD = [];

	WORD_ARRAY.filter((words) => {

		if (words.length > 3) {

			FILTER_WORD.push(words.toLowerCase().match(/.{1,3}/g))

		} else {

			FILTER_WORD.push(words)
		}
	});

	const CONCAT_FILTER_WORD = [].concat.apply([], FILTER_WORD);

	return CONCAT_FILTER_WORD;
};


//№10


function generateCombinations(word, prepend) {

	let version;
	let elements;
	let result = [];
	
	prepend = prepend || [];

	if (word.length === 1) {

		return [word];

	} else {

		for (let i = 0; i < word.length; i++) {
			
			if (word.length === 2) {
				
				result.push(prepend.concat([word[i], word[(i + 1) % 2]]));
				
			} else {
				
				version = word.slice();

				elements = version.splice(i, 1);

				result = result.concat(generateCombinations(version, prepend.concat(elements)));
			}
		}
	}

	return result;
};

const COMBINATIONS = (generateCombinations( 'abcd'.split(''))).map( e=>e.join(' '));


console.log('Задание №1: Массив случайных чисел')
console.log(getRandomArray())
console.log(`Задание №2: Мода = `)
console.log(getModa(6, 2, 55, 11, 55, 6, 78, 2, 55, 6, 77, 57, 87, 6, 23, 2, 56, 3, 2))

console.log(`Задание №3: Среднее арифметическое = ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);


console.log(`Задание №4: Мода числового ряда  = ${getMedian(6, 2, 55, 11, 78, 2, 56, 77, 99, 44, 34)}`)

console.log(`Задание №5:   Фильтр парных чисел:`)
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

console.log(`Задание №6: Количество чисел > 0 = ${countPositiveNumbers(1, -2, 3, -4, -5, 6, 5, 9)}`)

console.log('Задание №7: Элементы массива, которые делятся на 5 без остатка:')
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 110))

console.log(`Задание №8: Замена плохих слов на символы I вариант -  ${replaceBadWords('Are you fucking kidding?')}`);
console.log(`Задание №8: Замена плохих слов на символы II вариант -  ${replaceBadWordsTwo(`It's bullshit!`)}`);

console.log(`Задание №9:`)
console.log(divideByThree('Функция разбивает слова по три буквы'));

console.log(`Задание №10: Комбинации букв в слове:`)
console.log(COMBINATIONS)