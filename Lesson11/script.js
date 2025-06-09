
const buttonOpen = document.querySelector('.btn--open')
const buttonClose = document.querySelector('.btn--close')
const modal = document.querySelector('.modal')

buttonOpen.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

buttonClose.addEventListener('click', () => {
    modal.classList.remove('modal--open')
})

modal.addEventListener('click', (event) => {
    if(!event.target.classList.contains('modal-space') && !event.target.classList.contains('modal-text')){
    modal.classList.remove('modal--open')
    }
})

document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape'){
    modal.classList.remove('modal--open')
    }
})