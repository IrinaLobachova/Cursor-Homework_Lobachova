const PERSON_IMAGE = {
	'Luke Skywalker': 'https://i.pinimg.com/originals/c1/06/59/c106598e42f244d70f391f0241d64669.jpg',

	'C-3PO': 'https://static.wikia.nocookie.net/rustarwars/images/5/53/C-3PO_серебристый.jpg',

	'R2-D2': 'https://static.wikia.nocookie.net/rustarwars/images/c/c3/R2_Empire.jpg',

	'Darth Vader': 'https://i.pinimg.com/474x/90/95/f1/9095f1a04f56c197fa649badfeb88dca.jpg',

	'Leia Organa': 'https://images5.fanpop.com/image/photos/24900000/Leia-Organa-princess-leia-organa-solo-skywalker-24939372-470-600.jpg',

	'Owen Lars': 'https://static.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg',

	'Beru Whitesun lars': 'https://theartmad.com/wp-content/uploads/2015/06/Beru-Lars-2.jpg',

	'R5-D4': 'https://static.wikia.nocookie.net/rustarwars/images/2/2c/R5d4.jpg',

	'Biggs Darklighter': 'https://i.pinimg.com/474x/32/7c/f3/327cf3ca0d577c28be87a30e6e362b53.jpg',

	'Obi-Wan Kenobi': 'https://i.pinimg.com/474x/8e/c9/de/8ec9de82e3f3f01e44fc546fc12f4e97.jpg',
	'Chewbacca': 'https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png',
	'Han Solo': 'https://rollingstone.uol.com.br/media/_versions/legacy/2012/img-1009239-harrison-ford_widelg.jpg',
	'Wedge Antilles': 'https://i.pinimg.com/originals/19/96/03/1996039ac66d37c7f60daa8776979624.jpg',
	'Yoda': 'https://startheories.ru/wp-content/uploads/2018/10/Yoda_infobox.png',
	'Palpatine': 'https://perilsandpitfalls.files.wordpress.com/2014/12/221.jpg',
	'Boba Fett': 'https://ecs7.tokopedia.net/img/cache/700/hDjmkQ/2020/8/11/84050391-ce7a-4497-bd63-05ada2bda49e.jpg',
	'IG-88': 'https://i.imgur.com/Vi9u4KO.jpg',
	'Bossk': 'https://static.wikia.nocookie.net/rustarwars/images/d/d2/Bossk.jpg',
	'Lando Calrissian': 'https://citaty.info/files/characters/179916.jpg',
	'Lobot': 'https://static.wikia.nocookie.net/rustarwars/images/b/b2/Lobot.jpg',
	'Greedo': 'https://static.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg',
	'Wilhuff Tarkin': 'https://i.pinimg.com/474x/6f/a5/c4/6fa5c4d82ef9126e8843521b13b083d2.jpg',
	'Jabba Desilijic Tiure': 'https://static.wikia.nocookie.net/theclonewiki/images/7/77/JabbaTheHutt.jpg',
	'Jek Tono Porkins': 'https://pbs.twimg.com/profile_images/614431171460624386/Z0pxKl9v_400x400.png',
	'Raymus Antilles': 'https://pm1.narvii.com/6430/6df959c5c8f76435de54f734b49dfcad906cf2ba_00.jpg',
	'Wicket Systri Warrick': 'https://static.wikia.nocookie.net/headhuntersholosuite/images/d/d8/Wicket_W._Warrick.jpg',
	'Nien Nunb': 'https://static.wikia.nocookie.net/rustarwars/images/c/c7/NienNunbHS-SWE.jpg',
	'Arvel Crynyd': 'https://ayay.co.uk/backgrounds/star_wars/rebel_alliance_characters/arvel-crynyd.jpg',
	'Bib Fortuna': 'https://vafloc02.s3.amazonaws.com/isyn/images/f883/img-2406883-f.jpg',
	'Mon Mothma': 'https://www.centax.ru/images/movies/rogue/mon-mothma-rogue-one.jpeg',
	'Ackbar': 'https://static.wikia.nocookie.net/starwars/images/f/fb/Ackbar_HS.jpg',
	'Anakin Skywalker': 'https://static.wikia.nocookie.net/swfanon/images/5/5a/Shadow_Anakin.jpg',
	'Qui-Gon Jinn': 'https://static.wikia.nocookie.net/characters/images/6/6c/Qui-Gon_Jinn.jpg',
	'Nute Gunray': 'https://static.wikia.nocookie.net/starwars/images/b/b6/Nutegunraygeonosis.jpg',
	'Finis Valorum': 'https://i.pinimg.com/474x/ac/46/c6/ac46c67619e5681e38376fc246457b75.jpg',
	'Padmé Amidala': 'https://static.wikia.nocookie.net/rustarwars/images/c/cb/Падме_Амидала.png',
	'Roos Tarpals': 'https://static.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg',
	'Rugor Nass': 'https://pbs.twimg.com/profile_images/119366951/boss-nass_400x400.jpg',
	'Shmi Skywalker': 'https://i.pinimg.com/originals/85/69/ca/8569ca3ca1683765fa6f613aa0b307a3.jpg',
	'Jar Jar Binks': 'https://static.wikia.nocookie.net/rustarwars/images/d/d2/Jar_Jar_aotc.jpg',
	'Ric Olié': 'https://static.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png',
	'Kit Fisto': 'https://static.wikia.nocookie.net/rustarwars/images/d/de/Кит_Фисто.png',
	'Sebulba': 'https://i.pinimg.com/originals/19/21/a7/1921a7fa6024467c185ef36a624b6121.png',
	'Gasgano': 'https://static.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg',
	'Ben Quadinaros': 'https://vignette.wikia.nocookie.net/garpedia/images/8/82/BenQuadinarosHS-SWE.jpg',
	'Mas Amedda': 'https://pm1.narvii.com/6968/f3306092dd0ae14a5958c34bb80e7528cbbedb24r1-238-254v2_00.jpg',
	'Plo Koon': 'https://static.wikia.nocookie.net/starwars/images/c/c4/Plo_Koon_TPM.png',
	'Eeth Koth': 'https://static.wikia.nocookie.net/starwars/images/b/b6/Eeth_Koth_profile.png',
	'Ratts Tyerel': 'https://static.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg',
	'Ayla Secura': 'https://static.wikia.nocookie.net/rustarwars/images/4/4d/Aayla_Secura_SWE.png',
	'Darth Maul': 'https://static.wikia.nocookie.net/rustarwars/images/5/50/Darth_Maul_profile.png',
	'Dud Bolt': 'https://static.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg',
	'Saesee Tiin': 'https://static.wikia.nocookie.net/rustarwars/images/6/68/Saesee_Tiin_Card_Trader.jpg',
	'Watto': 'https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg',
	'Yarael Poof': 'https://static.wikia.nocookie.net/esstarwars/images/f/f4/Yarael_Poof_Canon.jpg',
	'Ki-Adi-Mundi': 'https://static.wikia.nocookie.net/rustarwars/images/9/9e/KiAdiMundi.jpg',
	'Quarsh Panaka': 'https://i.pinimg.com/originals/d7/ec/ce/d7ecced2abe84ef7781d46b434822103.jpg',
	'Adi Gallia': 'https://static.wikia.nocookie.net/frstarwars/images/e/e0/Adi_Gallia-card-trader.png',
	'Mace Windu': 'https://static.wikia.nocookie.net/starwars/images/f/fc/Mace_Windu.jpg',
	'Luminara Unduli': 'https://puzzleit.ru/files/puzzles/6/6382/_original.jpg',
	'Barriss Offee': 'https://comicvine1.cbsistatic.com/uploads/scale_small/1/10376/225034-166201-barriss-offee.jpg',
	'Jango Fett': 'https://www.timewalkertoys.com/v/vspfiles/photos/SST-2149-2.jpg',
	'Jocasta Nu': 'https://static.wikia.nocookie.net/starwars/images/4/44/Jocasta_Nu.jpg',
	'Zam Wesell': 'https://static.wikia.nocookie.net/starwars/images/7/7d/Clawdite.jpg',
	'Taun We': 'https://static.wikia.nocookie.net/swfanon/images/9/9c/TaunWe.jpg',
	'Dexter Jettster': 'https://static.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg',
	'Lama Su': 'https://static.wikia.nocookie.net/theclonewiki/images/4/4e/Lamasu.JPG',
	'Cliegg Lars': 'https://static.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg',
	'Bail Prestor Organa': 'https://vignette.wikia.nocookie.net/universalprotectioncouncil/images/b/ba/Bail_organa_large.jpg',
	'Cordé': 'https://static.wikia.nocookie.net/starwars/images/b/b6/Cordé_-_SW_Card_Trader.png',
	'Poggle the Lesser': 'https://static.wikia.nocookie.net/rustarwars/images/a/a5/PogglePortrait.jpg',
	'Gregar Typho': 'https://static.wikia.nocookie.net/rustarwars/images/5/52/Gregar_Typho.jpg',
	'Dooku': 'https://static.wikia.nocookie.net/villains/images/f/f5/Count-dooku.jpg',
	'Dormé': 'https://static.wikia.nocookie.net/rustarwars/images/c/c9/ДормеЭп2.jpg',
	'San Hill': 'https://static.wikia.nocookie.net/starwars/images/8/8b/SanHillHS-AOTC.png',
	'Shaak Ti': 'https://static.wikia.nocookie.net/rustarwars/images/6/6e/ShaakTi_tfu.jpg',
	'Wat Tambor': 'https://static.wikia.nocookie.net/rustarwars/images/e/e8/TamborBoomHeadshot.jpg',
	'R4-P17': 'https://static.wikia.nocookie.net/starwars/images/5/52/R4-P17_USWNE.png',
	'Sly Moore': 'https://static.wikia.nocookie.net/headhuntersholosuite/images/7/75/Sly_Moore.jpg',
	'Tion Medon': 'https://static.wikia.nocookie.net/headhuntersholosuite/images/9/9a/Tion_Medon_002.jpg',
	'Tarfful': 'https://static.wikia.nocookie.net/star-wars-canon-extended/images/7/7e/Tarf1.jpg',
	'Grievous': 'https://static.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg',
};

const DATA_WRAPER_STAR_WAR = document.getElementById('data-wraper');
const DATA_WRAPER_PLANETS = document.getElementById('data-wraper-planets');

const PERSON_INFO = document.getElementById('personInfo');
const PLANETS_INFO = document.getElementById('next');
const FILMS_INFO = document.getElementById('filmsInfo');


//#1

fetch('https://swapi.dev/api/films/2')
	.then((response) => {
	
		return response.json()
	})
	.then((data) => {

		data.characters.forEach((personStarWar) => {

			return fetch(personStarWar)
				.then((response) => {
				
					return response.json()
				})
				.then((data) => {
				
					let imgPerson = '';
				
					PERSON_INFO.addEventListener('click', function () {
						
						for (let key in PERSON_IMAGE) {
							
							if (key === data.name) {
								
								imgPerson = key;
							}
						}
						DATA_WRAPER_STAR_WAR.innerHTML +=
							`<div class="data-item">
          						<div class="image">
              						<img src="${imgPerson === data.name ? PERSON_IMAGE[imgPerson] : ''}" alt="">
          						</div>
          						<div><span>Name: </span>${data.name}</div>
								<div><span>Birth_year: </span>${data.birth_year}</div>
								<div><span>Gender: </span>${data.gender}</div>
      						</div>`
					})

				})

		})

	})




//#2-3

fetch('https://swapi.dev/api/planets')
	.then((response) => {
	
		return response.json();
	})
	.then((data) => {

		DATA_WRAPER_PLANETS.innerHTML += `<h3>Planets Star War</h3>`
		
		const PLANETS_STAR_WAR = data.results;
	
		PLANETS_STAR_WAR.forEach((planets) => {

			DATA_WRAPER_PLANETS.innerHTML += `<div>name: <span>${planets.name}</span></div>`
		})

	})

PLANETS_INFO.addEventListener('click', function () {
	
	document.location.href = '12_WorkingServer_Planets.html'

})



//#4

fetch('https://swapi.dev/api/films')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		FILMS_INFO.addEventListener('click', function () {
			const mas = data.results

			let filmInfo = 0;
			const NUMBER_FILM = document.getElementById('numberFilm').value;
			let num = parseInt(NUMBER_FILM);
			console.log(num)
			if (num) {
				filmInfo = mas[mas.length - mas.length - 1 + num]

				filmInfo.characters.forEach((personStarWar) => {

					return fetch(personStarWar)
						.then((response) => {
							return response.json()
						})
						.then((data) => {
							let imgPerson = '';

							for (let key in PERSON_IMAGE) {
								if (key === data.name) {
									imgPerson = key;
								}
							}
							DATA_WRAPER_STAR_WAR.innerHTML +=
								`<div class="data-item">
          							<div class="image">
              							<img src="${imgPerson === data.name ? PERSON_IMAGE[imgPerson] : ''}" alt="">
          							</div>
          							<div><span>Name: </span>${data.name}</div>
									<div><span>Birth_year: </span>${data.birth_year}</div>
									<div><span>Gender: </span>${data.gender}</div>
      							</div>`

						})

				})

			}

		})
	})