let massRandomChinese = [];

const RANDOM_CHINESE = (ms) => new Promise((resolve, reject) => setTimeout(() => {

		let randomChinese = Date.now()
		
		randomChinese = parseInt(randomChinese.toString().split('').splice(-5).join(''))
		massRandomChinese.push(String.fromCharCode(randomChinese))
		console.log(massRandomChinese)
		return resolve(massRandomChinese);

	}, ms)

)

function getRandomChinese(length) {
	
	let count = 0;

	while (count < length) {
		
		count++
		
		RANDOM_CHINESE(50)
			.then((result) => document.querySelector("#chinese").innerHTML = result.join(''))

	}

}
getRandomChinese(4)


//async function getRandomChinese (length) {
//    let outputChar = '';
//    const delay = 50;
//
//    const makeChineseChar = () => String.fromCharCode(String(Date.now()).slice(-5));
//
//	let getRandomChar = () => new Promise((resolve) => setTimeout(() => {return resolve(makeChineseChar())},delay));
//
//	while (length > 0) {
//		outputChar += await getRandomChar();		
//		length--;
//    };
//    
//	return outputChar;
//}
//
//getRandomChinese(4).then((result) => console.log(result));