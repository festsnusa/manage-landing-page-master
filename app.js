const burger = document.querySelector('.header__burger'),
  headerList = document.querySelector('.header__list'),
  feedbackItems = document.querySelectorAll('.feedback__item'),
  dotsSection = document.querySelector('.feedback__dots'),
  dots = document.querySelectorAll('.feedback__dot'),
  emailInput = document.querySelector('.footer__input'),
  emailSubmit = document.querySelector('.footer__button'),
  emailSpan = document.querySelector('.footer__span'),
  mediaQuery = window.matchMedia("(min-width: 1000px)")

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active')
  headerList.classList.toggle('header__list_active')
  document.body.classList.toggle('body_fixed')
})

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('footer__input_error')
  emailSpan.classList.remove('footer__span_visible')
})

emailSubmit.addEventListener('click', () => {

  if (validateEmail(emailInput.value) == null) {
    emailInput.classList.add('footer__input_error')
    emailSpan.classList.add('footer__span_visible')
    return
  }

  emailInput.classList.remove('footer__input_error')
  emailSpan.classList.remove('footer__span_visible')

})

dots.forEach((dot, i) => dot.addEventListener('click', changeSlide.bind(null, i)))

function changeVisibility() {

  if (mediaQuery.matches) {
    burger.classList.remove('header__burger_active')
    burger.classList.add('header__burger_invisible')
    headerList.classList.remove('header__list_active')
    headerList.classList.add('header__list_flex')
    document.body.classList.remove('body_fixed')
    dotsSection.classList.remove('feedback__dots_active')

    feedbackItems.forEach(e => e.classList.add('feedback__item_active'))

    return

  }

  burger.classList.remove('header__burger_invisible')
  headerList.classList.remove('header__list_active')
  headerList.classList.remove('header__list_flex')
  dotsSection.classList.add('feedback__dots_active')

  changeSlide(1)

}

function changeSlide(i) {
  feedbackItems.forEach(e => e.classList.remove('feedback__item_active'))
  feedbackItems[i].classList.add('feedback__item_active')
  dots.forEach(e => e.classList.remove('feedback__dot_active'))
  dots[i].classList.add('feedback__dot_active')
}

mediaQuery.addEventListener("change", () => changeVisibility())
window.addEventListener('DOMContentLoaded', () => changeVisibility())