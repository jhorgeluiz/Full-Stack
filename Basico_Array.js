// Deletar um elemento do array sem alterar o indice

//                  0       1       2 
const nomes = ['Eduardo','Maria','Joana']
nomes[2] = 'joao'
delete nomes[2]
console.log(nomes)
//____________________________________________________________
//Valor por referencia
// O método .pop() é utilizado para remover e retornar
// o último elemento de uma estrutura de dados como uma lista ou array
const nomes = ['Eduardo','Maria','Joana']
const novo = nomes
novo.pop()
console.log(nomes)
//____________________________________________________________
//SHIFT()
//Remove o primeiro elemento de um array e retorna esse elemento. Todos os demais itens são "deslocados" para a esquerda.
const nomes = ['Eduardo','Maria','Joana']
const removido = nomes.shift()
console.log(nomes, removido)
// ______________________________________________________________
// O método nomes.push()
// Adiciona o elemento 'joao' no final do array nomes e retorna o novo tamanho do array
const nomes = ['Eduardo','Maria','Joana']
nomes.push('joao')
console.log(nomes)
// _____________________________________________________________
//copia do array utilizando o spred
// A sintaxe [...nomes] é usada em JavaScript e representa o operador spread
// Ele espalha os elementos de um array (ou outro objeto iterável) dentro de outro array ou estrutura
const nomes = ['Eduardo','Maria','Joana']
const novo = [...nomes]
// ________________________________________________________________
//TAMANHO DO ARRAY
// A expressão (nomes.length) retorna o tamanho (ou seja, o número de elementos) do array nomes.
const nomes = ['Eduardo','Maria','Joana']
console.log(nomes.length)
// _______________________________________________________________
