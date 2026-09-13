
window.Revelar = ScrollReveal({reset:true})

Revelar.reveal('.informaçao__dentro__da__sessao h2',{
    duration: 2000,
distance: '50px'
})
Revelar.reveal('.informaçao__dentro__da__sessao p',{
    duration: 2000,
distance: '50px'
})
Revelar.reveal('.informaçao__dentro__da__sessao button',{
    duration: 3000,
distance: '70px'
})
Revelar.reveal('.informaçao__dentro__da__sessao h3',{
    duration: 2000,
distance: '60px'
})
Revelar.reveal('.carros__historia',{
    duration: 2000,
distance: '60px',
origin: "left",
delay: 1000
})
Revelar.reveal('.Informações__dentro__his p',{
    duration: 2000,
distance: '30px'
})
Revelar.reveal('.Informações__dentro__his h2',{
    duration: 2000,
distance: '60px'
})
Revelar.reveal('.texto__historia button',{
    duration: 2000,
distance: '30px',
origin: "left",

})
Revelar.reveal('.texto__historia p',{
    duration: 2000,
distance: '30px',
origin: "left",
})
Revelar.reveal('.texto__historia h2',{
    duration: 2000,
distance: '30px',
origin: "left",

})
Revelar.reveal('.principais__section3 h3',{
    duration: 2000,
distance: '30px',
origin: "bottom",
})
Revelar.reveal('.principais__section3 h2',{
    duration: 2000,
distance: '30px',
origin: "bottom",
})
Revelar.reveal('.principais__section3 p',{
    duration: 2000,
distance: '30px',
origin: "bottom",
})
Revelar.reveal('.informações__da__performance:nth-child(1) p',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 500,
})
Revelar.reveal('.informações__da__performance:nth-child(1) h2',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 500,
})
Revelar.reveal('.informações__da__performance:nth-child(2) p',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 1000,
})
Revelar.reveal('.informações__da__performance:nth-child(2) h2',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 1000,
})
Revelar.reveal('.informações__da__performance:nth-child(3) p',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 1300,
})
Revelar.reveal('.informações__da__performance:nth-child(3) h2',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 1300,
})
Revelar.reveal('.informações__da__performance:nth-child(4) h2',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 1700,
})
Revelar.reveal('.informações__da__performance:nth-child(4) p',{
    duration: 2000,
distance: '20px',
origin: "bottom",
delay: 1700,
})
const celulaMenu = document.querySelector(".links")

function buton(){
    celulaMenu.style.display = celulaMenu.style.display === "flex" ? "none" : "flex"
}

const slid = document.querySelectorAll('.slid')
let numero = 0
const barra = document.querySelectorAll('.barras')

function passa(){

   const ativo = document.querySelector('.slid.ativo')
   ativo.classList.remove('ativo')

if(numero > 1){numero = 0}else{numero = numero + 1}

const barraAtiva = document.querySelector('.barras.ativo')
   barraAtiva.classList.remove('ativo')

barra[numero].classList.add('ativo')

slid[numero].classList.add('ativo')
document.querySelector('.numero').innerHTML = '0' + (numero + 1)
;}

function volta(){
    numero = numero - 1
   const ativo = document.querySelector('.slid.ativo')
   ativo.classList.remove('ativo')
   
if(numero <0){numero = 2}
    else{numero}

const barraAtiva = document.querySelector('.barras.ativo')
   barraAtiva.classList.remove('ativo')

barra[numero].classList.add('ativo')
slid[numero].classList.add('ativo')
document.querySelector('.numero').innerHTML = '0'+ (numero + 1)
;}


const barraInativas = document.querySelectorAll('.barras2')
const slids = document.querySelectorAll('.Titulo__carros')
let contador = 0
function passaSlid(){

    const slidPrincipal = document.querySelector('.Titulo__carros.ativos')
    slidPrincipal.classList.remove('ativos')

const barrinhas = document.querySelector('.barras2.ativos')
    barrinhas.classList.remove('ativos')

    if(contador >3){contador = 0}else{contador = contador + 1}

    slids[contador].classList.add('ativos')

    barraInativas[contador].classList.add('ativos')
    
    document.querySelector('.numero h2').innerHTML = '0' + (contador + 1)
}


function voltaSlid(){

    const slidPrincipal = document.querySelector('.Titulo__carros.ativos')
    slidPrincipal.classList.remove('ativos')
contador = contador - 1
const barrinhas = document.querySelector('.barras2.ativos')
    barrinhas.classList.remove('ativos')

    if(contador <0){contador = 4}else{contador}

    slids[contador].classList.add('ativos')

    barraInativas[contador].classList.add('ativos')
    
    document.querySelector('.numero h2').innerHTML = '0' + (contador + 1)
}