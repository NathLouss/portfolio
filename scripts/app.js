// header elements animation
const title = document.getElementById('title__info')
const medias = document.querySelectorAll('.media')
const img = document.getElementById('header__img')

window.addEventListener('load', () => {
	const TL = gsap.timeline({ paused: true })

	TL.from(img, { opacity: 0, duration: 4, rotation: 45, ease: 'power2.out' })
		.from(title, { opacity: 0, duration: 4, ease: 'power2.out' }, 0.3, '-=4')
		.staggerFrom(medias, 1, { transform: 'scale(0)', ease: 'easeInOut' }, 0.3, '-=4')

	TL.play()
})

// loading animation on scroll
function scrollAnimation() {
	let loadingBar
	let windowHeight

	function initLoading() {
		loadingBar = document.getElementById('progress_value')
		windowHeight = window.innerHeight
	}

	function checkPosition() {
		const positionFromTop = loadingBar.getBoundingClientRect().top

		if (positionFromTop - windowHeight <= 0) {
			loadingBar.classList.add('animation_scroll')
		} else {
			loadingBar.classList.remove('animation_scroll')
		}
	}

	window.addEventListener('scroll', checkPosition)
	window.addEventListener('resize', initLoading)

	initLoading()
	checkPosition()
}

scrollAnimation()

// text-footer animation
const animatedText = document.getElementById('footer__content__up--animation')

new Typewriter(animatedText, {
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
