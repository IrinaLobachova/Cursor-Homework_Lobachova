//I VARIANT

let initialNumber = +prompt('Введите начальное число');
let finalNumber = +prompt('Введите конечное число');

let result = 0;

if (Number.isInteger(initialNumber) && Number.isInteger(finalNumber)) {


	if (confirm('Учитывать парные числа?')) {
		for (let i = initialNumber; i >= initialNumber && i <= finalNumber; i++) {

			result = result + i

		}
	} else {

		for (let i = initialNumber; i >= initialNumber && i <= finalNumber; i++) {
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
	
//let initialNumber = parseInt(prompt('Введите начальное число'));
//let finalNumber = parseInt(prompt('Введите конечное число'));
//
//let result = 0;
//
//
//
//	if (confirm('Учитывать парные числа?')) {
//		for (let i = initialNumber; i >= initialNumber && i <= finalNumber; i++) {
//
//			result = result + i
//
//		}
//	} else {
//
//		for (let i = initialNumber; i >= initialNumber && i <= finalNumber; i++) {
//			if (i % 2 !== 0) {
//				result = result + i
//			}
//		}
//
//	}
//	console.log(result);
//	
//	document.querySelector('.sum-number').innerHTML = `Сумма чисел указанного диапазона равна ${result}`;

