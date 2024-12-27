
const inputTarefa = document.querySelector('.input-tarefa')
const btnAdd = document.querySelector('.btn-add')
const tarefaarefa = document.querySelector('.tarefa')

btnAdd.addEventListener('click', function() {
    if (!inputTarefa.value) return

    console.log(inputTarefa.value)
})