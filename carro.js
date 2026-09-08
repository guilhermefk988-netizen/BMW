
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


