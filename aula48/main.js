
const inputTarefa = document.querySelector('.input-tarefa')
const btnAdd = document.querySelector('.btn-add')
const tarefa = document.querySelector('.tarefa')

function criaLi() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

function limparInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefa.appendChild(li)
    limparInput()
}

btnAdd.addEventListener('click', function() {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})