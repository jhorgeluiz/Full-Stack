let pontos = 1000
let nivel = pontos >= 1000 ? 'usuario vip' : 'usuario normal'



let corUsuario = 'red'
let corPadrao = corUsuario || 'preta'

console.log(nivel, corPadrao);