const STUDENTS = ['Олександр', 'Ігор', 'Олена', 'Ірина', 'Олексій', 'Світлана'];
const THEMES = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];
const MARKS = [4, 5, 5, 3, 4, 5];




//№1


function studentsCouple(array) {

	const SIZE = array.length / 2;

	let studentsCoupleArr = [];

	for (let i = 0; i < SIZE; ++i) {
		studentsCoupleArr[i] = [];
	}
	for (var i = 0; i < array.length; ++i) {

		studentsCoupleArr[i % SIZE].push(array[i]);

	}
	return studentsCoupleArr;

};

const STUDENTS_COUPLE = studentsCouple(STUDENTS);




//№2


function studentsThemes() {

	let studentsCoupleThemes = [];
	let studentsCoupleJoin = [];
	
	for(let i=0; i< STUDENTS_COUPLE.length; ++i){
		
		studentsCoupleJoin[i] = [];
		studentsCoupleJoin[i].push(STUDENTS_COUPLE[i].join(' и '))
	}


	for (let i = 0; i < studentsCoupleJoin.length && i < THEMES.length; i++) {
		
		studentsCoupleThemes.push(studentsCoupleJoin[i].concat(THEMES[i]));

	}
	
	return studentsCoupleThemes
}

const STUDENTS_COUPLE_THEMES = studentsThemes();



//№3



function studentsMarks() {

	let studetsMarksArr = [];
	let newMarks = [];
	let newStudents = [];

	for (let i = 0; i < STUDENTS.length; ++i) {

		newStudents[i] = []
		newStudents[i].push(STUDENTS[i])
	}

	for (let i = 0; i < MARKS.length; ++i) {

		newMarks[i] = []
		newMarks[i].push(MARKS[i])
	}

	for (let i = 0; i < newStudents.length && i < newMarks.length; i++) {

		studetsMarksArr.push(newStudents[i].concat(newMarks[i]));

	}

	return studetsMarksArr
}
const STUDENTS_MARKS = studentsMarks();



//№4

function randomMarks(N, M){
	
	let randomMarksArr = [];
	
	for(let i=0; i < STUDENTS_COUPLE_THEMES.length; i++){
		randomMarksArr.push(STUDENTS_COUPLE_THEMES[i].concat(Math.floor(Math.random() * (M - N) + N)))
	}
	
	return randomMarksArr
}
const RANDOM_MARKS = randomMarks(1, 5)



console.log('Функция №1: Распределение студентов по парам')
console.log(STUDENTS_COUPLE);

console.log('Функция №2: Пары студентов и темы проектов')
console.log(STUDENTS_COUPLE_THEMES);

console.log('Функция №3: Сопоставление оценок и студентов')
console.log(STUDENTS_MARKS);

console.log('Функция №4: Случайные оценки за работу над пректом')
console.log(RANDOM_MARKS);