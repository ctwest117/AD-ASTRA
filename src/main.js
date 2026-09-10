import './style.css'

const menuToggle = document.querySelector('#menu-toggle')
const mobileMenu = document.querySelector('#mobile-menu')

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu')
  mobileMenu?.classList.toggle('hidden', isOpen)
})

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    document.querySelector(".phobos").style.transform =
        `translateY(${scroll * 0.2}px)`;
});

// const planet = document.querySelector("#shadow");

// function pointLightingAtSun() {
//     const planetRect = planet.getBoundingClientRect();

//     // Sun is at the top-left
//     const sunX = 0;
//     const sunY = 0;

//     // Center of planet
//     const planetX = planetRect.left + planetRect.width / 2;
//     const planetY = planetRect.top + planetRect.height / 2;

//     // Direction from planet → Sun
//     const dx = sunX - planetX;
//     const dy = sunY - planetY;

//     const angle = Math.atan2(dy, dx) * 180 / Math.PI;

//     planet.style.transform = `rotate(${angle}deg)`;
// }

// window.addEventListener("scroll", pointLightingAtSun);
// window.addEventListener("resize", pointLightingAtSun);

// pointLightingAtSun();