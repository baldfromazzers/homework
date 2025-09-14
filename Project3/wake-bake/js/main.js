(function(){

    document.addEventListener('click', event => {
        const burgerIcon = event.target.closest('.burger_icon')
        const navLink = event.target.closest('.nav__link')

        if ((document.documentElement.clientWidth < 900) &&  (burgerIcon || navLink)){
            document.body.classList.toggle('body--opened-burger')
        }
    })



})()