// Deletar um elemento do array sem alterar o indice

//                  0       1       2 
const nomes = ['Eduardo','Maria','Joana']
nomes[2] = 'joao'
delete nomes[2]
console.log(nomes)
//____________________________________________________________
            pop()
// O método .pop() é utilizado para remover e retornar
// o último elemento de uma estrutura de dados como uma lista ou array
const nomes = ['Eduardo','Maria','Joana']
const novo = nomes
novo.pop()
console.log(nomes)
//____________________________________________________________
            SHIFT()
//Remove o primeiro elemento de um array e retorna esse elemento. Todos os demais itens são "deslocados" para a esquerda.
const nomes = ['Eduardo','Maria','Joana']
const removido = nomes.shift()
console.log(nomes, removido)
// ______________________________________________________________
               push()
// Adiciona o elemento 'joao' no final do array nomes e retorna o novo tamanho do array
const nomes = ['Eduardo','Maria','Joana']
nomes.push('joao')
console.log(nomes) // saida --> ['Eduardo','Maria','Joana', 'joao']
// _____________________________________________________________
            copia do array utilizando o spred
// A sintaxe [...nomes] é usada em JavaScript e representa o operador spread
// Ele espalha os elementos de um array (ou outro objeto iterável) dentro de outro array ou estrutura
const nomes = ['Eduardo','Maria','Joana']
const novo = [...nomes]
// ________________________________________________________________
            TAMANHO DO ARRAY
// A expressão (nomes.length) retorna o tamanho (ou seja, o número de elementos) do array nomes.
const nomes = ['Eduardo','Maria','Joana']
console.log(nomes.length)
// _______________________________________________________________
            slice()
// O método nomes.slice() em JavaScript é usado para copiar parte de um array (ou até o array inteiro) sem modificar o original.
//OBS.: Pode ser usado numeros negativos ex:(1,-3)
const nomes = ['Eduardo','Maria','Joana', 'Wallace', 'Rosana']
const novo = nomes.slice(1,3)
console.log(novo) //saída--> ['Maria','Joana']
____________________________________________________________________
            split()
// O método nome.split(' ') é usado para dividir uma string em partes 
// com base no espaço em branco (' '). Ele retorna um array com os pedaços da string
const nome = 'jorge luiz araujo'
const nomes = nome.split(' ')
console.log(nomes) //saída-->['jorge','luiz','araujo']
// ___________________________________________________________________
             join()
// O método nome.join(' ') é usado para juntar os elementos de um array em uma única string
// usando um separador — no caso, um espaço (' ')
const nome = ['jorge','luiz','araujo']
const nomes = nome.join(' ')
console.log(nomes) //saída--> 'jorge luiz araujo'
