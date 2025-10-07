
(function () {

  document.addEventListener('click', event => {
    const burgerIcon = event.target.closest('.burger_icon')
    const navLink = event.target.closest('.nav__link')

    if ((document.documentElement.clientWidth < 900) && (burgerIcon || navLink)) {
      document.body.classList.toggle('body--opened-burger')
    }
  });

  document.addEventListener('click', event => {
    const lightbox = document.querySelector('.lightbox');
    const cancelButton = event.target.closest('.lightbox__cansel_button');
    const openButton = event.target.closest('.about__img-gift-control');

    if (cancelButton) {
      event.preventDefault();
      lightbox.classList.add('lightbox--closed');
    }

    if (openButton) {
      event.preventDefault();
      lightbox.classList.remove('lightbox--closed');
    }
  });

  document.addEventListener('click', event => {
    const tabButtonPressed = event.target.closest('.tab__control__button');

    if (tabButtonPressed) {
      event.preventDefault();

      document.querySelectorAll('.tab__control__button')
        .forEach(btn => btn.classList.remove('tab__control__button--pressed'));

      tabButtonPressed.classList.add('tab__control__button--pressed');

      const id = tabButtonPressed.textContent.trim().split(' ')[1];
      document.querySelectorAll('.tab__item')
        .forEach(item => item.classList.remove('tab__item--opened'));

      document.getElementById(id).classList.add('tab__item--opened');
    }
  });

  // document.addEventListener("DOMContentLoaded", () => {
  //   const accordions = document.querySelectorAll(".accordion-list__control");

  //   accordions.forEach(control => {
  //     control.addEventListener("click", () => {
  //       const item = control.closest(".accordion-list__item");

  //       if (item.classList.contains("accordion-list__item--opened")) {
  //         item.classList.remove("accordion-list__item--opened");
  //       } else {

  //         item.classList.add("accordion-list__item--opened");
  //       }
  //     });
  //   });
  // });

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(list => {
    list.addEventListener('click', (e) => {
      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      const isOpened = accordionItem.classList.contains('accordion-list__item--opened');

      list.querySelectorAll('.accordion-list__item').forEach(item => {
        item.classList.remove('accordion-list__item--opened');
        item.querySelector('.accordion-list__content').style.maxHeight = null;
      });

      if (!isOpened) {
        accordionItem.classList.add('accordion-list__item--opened');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      }
    });
  });

})()


