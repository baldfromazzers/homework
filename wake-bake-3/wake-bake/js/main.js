
(function(){

    document.addEventListener('click', event => {
        const burgerIcon = event.target.closest('.burger_icon')
        const navLink = event.target.closest('.nav__link')

        if ((document.documentElement.clientWidth < 900) &&  (burgerIcon || navLink)){
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

})()


