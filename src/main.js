import './style.css'

const menuToggle = document.querySelector('#menu-toggle')
const mobileMenu = document.querySelector('#mobile-menu')

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu')
  mobileMenu?.classList.toggle('hidden', isOpen)
})

const parallaxElements = [
  [document.querySelector('.phobos'), 0.2],
  [document.querySelector('.europa'), 0.1],
  [document.querySelector('.satellite'), 0.1],
  [document.querySelector('.shuttle'), 0.1],
].filter(([element]) => element)

if (parallaxElements.length > 0) {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY

    parallaxElements.forEach(([element, speed]) => {
      element.style.transform = `translateY(${scroll * speed}px)`
    })
  })
}