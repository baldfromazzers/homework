(function () {
    document.addEventListener('click', event => {
        const searchButton = event.target.closest('.search__button');
        const searchField = document.querySelector('.search__field');

        if (searchButton) {
            event.preventDefault();
            searchField.classList.toggle('search__field--opened');

            if (searchField.classList.contains('search__field--opened')) {
                searchField.focus();
            }

            return;
        }

        if (!event.target.closest('.search__field')) {
            searchField.classList.remove('search__field--opened');
        }
    });

    document.addEventListener('click', event => {
        const burgerIcon = event.target.closest('.burger__icon')
        const navLink = event.target.closest('.nav__link')
        const header = document.querySelector('.header');

        if ((document.documentElement.clientWidth < 860) && (burgerIcon || navLink)) {
            header.classList.toggle('header--opened-burger');
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.hero__swiper', {
            slidesPerView: 1,
            grabCursor: true,
            spaceBetween: 0,
            verticalClass: true,
            // autoplay: true,
            pagination: {
                el: '.hero__pagination',
                clickable: true,
            },
            autoHeight: false,
        });
    });
})();