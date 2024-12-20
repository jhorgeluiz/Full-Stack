function segundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        hour12:false, timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function(event) {
    alert('iniciou')
})

pausar.addEventListener('click', function(event) {
    alert('pausou')
})

zerar.addEventListener('click', function(event) {
    alert('zerou')
})