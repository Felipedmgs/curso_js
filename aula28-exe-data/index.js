//const tresHoras = 60 *60 * 3 * 1000;
//const umDia = 60 * 60 *24 * 1000;
//const data = new Date(0 + tresHoras - umDia);
//const data = new Date(2019, 3);

//const data = new Date('2019-04-20 20:20:59');
const data = new Date(1661299943916);

console.log('Dia', data.getDate());
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //pois ele começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); //começa no 0 - domingo
console.log(data.getDate());
console.log(Date.now());// data em milisegundos

function zeraAEsquerda(num){
    return num >= 10? num : `0${num}`;//concatena o zero a esquerda
}

//Exemplo de função formata data
function formataData(data2){
    const dia = zeraAEsquerda(data2.getDate());
    const mes = zeraAEsquerda(data2.getMonth() + 1);
    const ano = zeraAEsquerda(data2.getFullYear());
    const hora = zeraAEsquerda(data2.getHours());
    const min = zeraAEsquerda(data2.getMinutes());
    const seg = zeraAEsquerda(data2.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data2 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);