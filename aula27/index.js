// const treshoras = 60 * 60 * 3 * 1000
// const umdia = 60 * 60 * 24 * 1000

// const data = new Date(2024 ,9, 24, 22, 25)
// console.log(data.toString())

const data = new Date(1727228410315 )

console.log('dia', data.getDate())
console.log('mes', data.getMonth() +1)  //mes começa com zero
console.log('ano', data.getFullYear())
console.log('hora', data.getHours())
console.log('min', data.getMinutes())
console.log('seg', data.getSeconds())
console.log('mill', data.getMilliseconds())
console.log('dia semana', data.getDay())   // 0 => domingo, 6 => sabado
console.log(data.toString())
// console.log(Date.now())