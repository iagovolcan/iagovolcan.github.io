const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')

const sobre = document.querySelector('#sobre')
const ambiente = document.querySelector('#ambiente')
const contato = document.querySelector('#contato')

const main = document.getElementsByTagName('main')[0]
const load = document.querySelector('.loading')

const loading = () => {
    load.classList.add('load')
    main.classList.add('show')
}

const showCard1 = () => {
    card1.classList.add('showCard')
    card1.classList.remove('hiddenCard')
    card2.classList.add('hiddenCard')
    card3.classList.add('hiddenCard')

    sobre.classList.add('linebottom')
    ambiente.classList.remove('linebottom')
    contato.classList.remove('linebottom')
}

sobre.addEventListener('click', ()=>{
    scroll(0, 700)
})

const showCard2 = () => {
    card2.classList.add('showCard')
    card2.classList.remove('hiddenCard')
    card1.classList.add('hiddenCard')
    card3.classList.add('hiddenCard')

    sobre.classList.remove('linebottom')
    ambiente.classList.add('linebottom')
    contato.classList.remove('linebottom')
}

ambiente.addEventListener('click', ()=>{
    scroll(0, 700)
})

const showCard3 = () => {
    card3.classList.add('showCard')
    card3.classList.remove('hiddenCard')
    card1.classList.add('hiddenCard')
    card2.classList.add('hiddenCard')

    sobre.classList.remove('linebottom')
    ambiente.classList.remove('linebottom')
    contato.classList.add('linebottom')
}

contato.addEventListener('click', ()=>{
    scroll(0, 700)
})