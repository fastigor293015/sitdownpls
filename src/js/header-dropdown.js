let dropdownBtn = document.querySelector('.header-region__btn'),
    dropdownBtnText = document.querySelector('.header-region-btn__text'),
    dropdownFlag = true,
    dropdownItems = document.querySelectorAll('.header-region-dropdown-item__btn'),
    dropdownOpen = gsap.timeline({paused: true});

dropdownOpen.set(".header-region__dropdown", {display: 'block'})
            .to(".header-region__icon_arrow", {rotate: 90, duration: .3})
            .fromTo(".header-region__dropdown", {y: 50, opacity: 0}, {y: 0, opacity: 1/* , zIndex: 8 */}, "-=0.4");

dropdownBtn.onclick = () => {
  if (dropdownFlag === true) {
    event.currentTarget.classList.add('header-region__btn_active');
    dropdownOpen.play();
    dropdownFlag = !dropdownFlag;
  } else {
    event.currentTarget.classList.remove('header-region__btn_active');
    dropdownOpen.reverse();
    dropdownFlag = !dropdownFlag;
  }
}

dropdownItems.forEach(item => {
  item.onclick = () => {
    let clickedInnerText = event.currentTarget.innerText,
        activeInnerText = dropdownBtnText.innerText;

    dropdownBtnText.innerText = clickedInnerText;
    dropdownBtnText.dataset.region = clickedInnerText;
    event.currentTarget.innerText = activeInnerText;
    event.currentTarget.dataset.region = activeInnerText;
    event.currentTarget.setAttribute('aria-label', activeInnerText);
    dropdownBtn.classList.remove('header-region__btn_active');
    dropdownOpen.reverse();
    dropdownFlag = !dropdownFlag;
  }
})
