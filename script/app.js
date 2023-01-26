// animation header elements
const title = document.querySelectorAll('h1')
const medias = document.querySelectorAll('.medias')
const img = document.getElementById('img-banner')

window.addEventListener('load', () => {
	const TL = gsap.timeline({ paused: true })

	TL.from(img, { opacity: 0, duration: 4, rotation: 45, ease: 'power2.out' })
		.from(title, { opacity: 0, duration: 4, ease: 'power2.out' }, 0.3, '-=4')
		.staggerFrom(medias, 1, { transform: 'scale(0)', ease: 'easeInOut' }, 0.3, '-=4')

	TL.play()
})

// animation skills

const tech = document.querySelectorAll('#icone-tech li i')

tech.forEach((tech) => {
	tech.addEventListener('mouseover', (event) => {
		event.currentTarget.classList.add('icone-shadow')
		setTimeout(() => tech.classList.add('no-shadow'), 1000)
		setTimeout(() => tech.classList.remove('icone-shadow', 'no-shadow'), 2000)
	})
})

// animation slideshow Eventpik
var EslideIndex = 1
EshowSlides(EslideIndex)

function EplusSlides(n) {
	EshowSlides((EslideIndex += n))
}

function EcurrentSlide(n) {
	EshowSlides((EslideIndex = n))
}

function EshowSlides(n) {
	var i
	var Eslides = document.getElementsByClassName('ESlides')
	if (n > Eslides.length) {
		EslideIndex = 1
	}
	if (n < 1) {
		EslideIndex = Eslides.length
	}
	for (i = 0; i < Eslides.length; i++) {
		Eslides[i].style.display = 'none'
	}
	Eslides[EslideIndex - 1].style.display = 'block'
}

// animation slideshow Buddy Biker
var BBslideIndex = 1
BBshowSlides(BBslideIndex)

function BBplusSlides(n) {
	BBshowSlides((BBslideIndex += n))
}

function BBcurrentSlide(n) {
	BBshowSlides((BBslideIndex = n))
}

function BBshowSlides(n) {
	var i
	var BBslides = document.getElementsByClassName('BBSlides')
	if (n > BBslides.length) {
		BBslideIndex = 1
	}
	if (n < 1) {
		BBslideIndex = BBslides.length
	}
	for (i = 0; i < BBslides.length; i++) {
		BBslides[i].style.display = 'none'
	}
	BBslides[BBslideIndex - 1].style.display = 'block'
}

//  animation etc
const etc = document.getElementById('etc')

new Typewriter(etc, {
	loop: true,
	cursor: '',
})
	.changeDelay(200)
	.typeString('...')
	.pauseFor(1000)
	.start()

//  animation text-footer
const txt = document.getElementById('type')

new Typewriter(txt, {
	deleteSpeed: 70,
	loop: true,
})
	.typeString('passion !')
	.pauseFor(1000)
	.deleteChars(9)
	.typeString('style !')
	.pauseFor(1000)
	.deleteChars(7)
	.typeString('fun !')
	.pauseFor(1000)
	.start()
