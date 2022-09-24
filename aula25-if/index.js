const dataAtual = new Date();
const date = dataAtual.getMinutes();
console.log(date);

if( date >= 0 && date <= 5){
    console.log('Sim, o número é maior que 0');
}
else{
    console.log('erro');
}