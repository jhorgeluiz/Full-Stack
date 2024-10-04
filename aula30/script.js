const h1 = document.querySelector('.container h1')
const data = new Date()


function getDiaSemanaTexto(diaSemana) {
 let diaSemanaTexto

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'segunda-feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'terça-feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'quarta-feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'quinta-feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'sexta-feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'sabado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = ''
        return diaSemanaTexto
    }
}

h1.innerHTML = getDiaSemanaTexto(data.getDay())