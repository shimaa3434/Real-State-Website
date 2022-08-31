
// whene scroll page change background-color header to #fff
window.addEventListener('scroll', ()=>{
    const header= document.getElementById('header');
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
})
// make Carousel using swiper js 
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidePerView: "auto",
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   value accordion

const accordionItems= document.querySelectorAll(".value__accordion__item")
accordionItems.forEach((item)=>{
    const accordionHeader= item.querySelector('.value__accordion__header')
    accordionHeader.addEventListener('click', ()=>{
        const openItem = document.querySelector('.accordion__open')
        toggleItem(item)
        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item)=>{
    const accordionContent = item.querySelector(".value__accordion__content")
    if(item.classList.contains('accordion__open')){
        accordionContent.removeAttribute('style')
        item.classList.remove("accordion__open")
    }else{
        accordionContent.style.height =  accordionContent.scrollHeight + "px"
        item.classList.add("accordion__open")
    }
   
}


// scroll sections active link

const sections = document.querySelectorAll('section[id]');

const scrollActive = ()=>{
    const scrollY = window.pageYOffset
    sections.forEach(currnet =>{
        const sectionHeight = currnet.offsetHeight
        const sectionTop = currnet.offsetTop - 58
        const sectionId = currnet.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + "]").classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + "]").classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


// show scroll up

const scrollUp= ()=>{
    const scrollup = document.getElementById('scrollup');
    if(this.scrollY >= 350){
        scrollup.classList.add('show-scroll')
    }else{
        scrollup.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

// dark light theme

const theme_button = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const setectedTheme = localStorage.getItem('setected-theme')
const seletedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme= ()=>{
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'
};
const getCurrentIcon = ()=>{
    theme_button.classList.contains(iconTheme) ? "bx bx-moon": 'bx bx-sun'
}
if(setectedTheme){
    document.body.classList[setectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    theme_button.classList[seletedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}
theme_button.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    theme_button.classList.toggle(iconTheme)

    localStorage.setItem('setected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// scroll reveal animation

const sr= ScrollReveal({
    origin: 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset: true,
});
sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin : 'bottom'})
sr.reveal(`.logos__img`, {interval : 500})
sr.reveal(`.value__images, .contact__content`, {origin : "left"})
sr.reveal(`.value__content, .contact__images`, {origin : "right"})




