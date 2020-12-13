function generateBlocksInterval() {

	function generateBlocks() {

		let time;

		const BLOSK = document.querySelectorAll('.squareRandonColor');

		BLOSK.forEach((blosk) => {

			blosk.classList.add('squareColor');
			
			blosk.style = "background-color: " +
				'#' + (Math.random().toString(16) + '000000').substring(2, 8)
		})

		time = setTimeout(generateBlocks, 1000);
	}
	return generateBlocks()

}
generateBlocksInterval()