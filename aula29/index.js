const data = new Date('1987-04-24 00:00:00');
let diaSemana = data.getDay();
console.log(diaSemana)
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'domingo';
    break;
case 1:
    diaSemanaTexto = 'segunda';
    break;
case 2:
    diaSemanaTexto = 'terça';
    break;
case 3:
    diaSemanaTexto = 'quarta';
    break;
case 4:
    diaSemanaTexto = 'quinta';
    break;
case 5:
    diaSemanaTexto = 'sexta';
    break;
case 6:
    diaSemanaTexto = 'sabado';
    break;
}