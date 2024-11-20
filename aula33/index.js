const pessoa = {
    nome: 'jorge',
    sobrenome: 'luiz',
    idade: 30,
    endereco: {
        rua: 'rua coronel',
        numero: 37
    }
}

const { endereco: {rua, numero}} = pessoa

console.log(rua, numero)