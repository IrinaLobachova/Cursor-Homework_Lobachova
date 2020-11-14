//I VARIANT

const INITIAL_NUMBER = +prompt('Введите начальное число');
const FINAL_NUMBER = +prompt('Введите конечное число');

let result = 0;

if (Number.isInteger(INITIAL_NUMBER) && Number.isInteger(FINAL_NUMBER)) {


	if (confirm('Учитывать парные числа?')) {
		for (let i = INITIAL_NUMBER; i <= FINAL_NUMBER; i++) {

			result = result + i

		}
	} else {

		for (let i = INITIAL_NUMBER; i <= FINAL_NUMBER; i++) {
			if (i % 2 !== 0) {
				result = result + i
			}
		}

	}
	console.log(result);
	
	document.querySelector('.sum-number').innerHTML = `Сумма чисел указанного диапазона равна ${result}`;
	
} else {

		alert('Введите целые числа');
	
}


//II VARIANT
	
//const INITIAL_NUMBER = parseInt(prompt('Введите начальное число'));
//const FINAL_NUMBER = parseInt(prompt('Введите конечное число'));
//
//let result = 0;
//
//
//
//	if (confirm('Учитывать парные числа?')) {
//		for (let i = INITIAL_NUMBER; i <= FINAL_NUMBER; i++) {
//
//			result = result + i
//
//		}
//	} else {
//
//		for (let i = INITIAL_NUMBER; i <= FINAL_NUMBER; i++) {
//			if (i % 2 !== 0) {
//				result = result + i
//			}
//		}
//
//	}
//	console.log(result);
//	
//	document.querySelector('.sum-number').innerHTML = `Сумма чисел указанного диапазона равна ${result}`;

