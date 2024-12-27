
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

function criaBotaoApagar(li) {
    li.innerText += ''
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar tarefa')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefa.appendChild(li)
    limparInput()
    criaBotaoApagar(li)
    salvarTarefa()
}

btnAdd.addEventListener('click', function() {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
}