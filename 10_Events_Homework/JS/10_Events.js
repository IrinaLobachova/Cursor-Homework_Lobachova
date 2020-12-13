const KEY_CHART = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL'];
const KEY_DIV = document.getElementsByClassName('key');
console.log(KEY_DIV);
const AUDIO = document.getElementsByTagName('audio');



document.addEventListener('keydown', function (event) {
	KEY_CHART.forEach((el) => {
		for (let i = 0; i < KEY_CHART.length && i < Array.from(KEY_DIV).length && i < Array.from(AUDIO).length; i++) {
			if (event.code === KEY_CHART[i]) {
				KEY_DIV[i].classList.add('presing')
				AUDIO[i].play()
			} else {
				KEY_DIV[i].classList.remove('presing')
				KEY_DIV[i].classList.remove('presingTwo')
			}
		}
	})
})


document.addEventListener('click', function (event) {

	KEY_CHART.forEach((el) => {
		for (let i = 0; i < KEY_CHART.length && i < Array.from(KEY_DIV).length && i < Array.from(AUDIO).length; i++) {
			if (event.target.closest('DIV') == KEY_DIV[i]) {
				KEY_DIV[i].classList.add('presingTwo')
				AUDIO[i].play()
			} else {
				KEY_DIV[i].classList.remove('presingTwo')
				KEY_DIV[i].classList.remove('presing')
			}
		}
	})
})