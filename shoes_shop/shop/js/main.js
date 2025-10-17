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
            autoplay: true,
            pagination: {
                el: '.hero__pagination',
                clickable: true,
            },
            autoHeight: false,
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.shoes-prev__swiper', {
            slidesPerView: 1,
            spaceBetween: 40,
            centeredSlides: false,

            navigation: {
                nextEl: '.shoes-prev__next',
                prevEl: '.shoes-prev__prev',
            },

            breakpoints: {
                1150: {
                    slidesPerView: 4,
                },
                850: {
                    slidesPerView: 3,
                },
                402: {
                    slidesPerView: 1.5,
                },

            },

        });
    });

    const mixer = mixitup('.catalog__list', {
        selectors: {
            target: '.mix'
        },
        animation: {
            duration: 400,
            effects: 'fade translateY(20px)'
        },
        load: {
            filter: '.show-first'
        }
    });

    const filterSelect = document.querySelector('.catalog__filters');
    const sortButton = document.querySelector('.sort');
    const listBtn = document.querySelector('.list');
    const gridBtn = document.querySelector('.grid');
    const catalogList = document.querySelector('.catalog__list');
    const seeAllBtn = document.querySelector('.catalog__button');

    let selectedOption = null;

    filterSelect.addEventListener('change', () => {
        const option = filterSelect.selectedOptions[0];

        if (option.dataset.filter) {
            selectedOption = { type: 'filter', value: option.dataset.filter };
        } else if (option.dataset.sort) {
            selectedOption = { type: 'sort', value: option.dataset.sort };
        } else {
            selectedOption = null;
        }
    });

    sortButton.addEventListener('click', () => {
        if (!selectedOption) return;

        if (selectedOption.type === 'filter') {
            mixer.filter(selectedOption.value);
        } else if (selectedOption.type === 'sort') {
            mixer.sort(selectedOption.value);
        }

    });

    listBtn.addEventListener('click', () => {
        catalogList.classList.add('list-view');
    });

    gridBtn.addEventListener('click', () => {
        catalogList.classList.remove('list-view');
    });

    seeAllBtn.addEventListener('click', () => {
        mixer.filter('all');
        seeAllBtn.style.display = 'none'; 
    });

})();