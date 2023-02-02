//fução geradora, onde eu consigo a cada chamada receber um valor diferente,
//Cada vez que eu chamar essa function ela me  manda um valor diferente, de acordo com a sequancia.
//yield - equivale ao mesmo que o retunr, porem

function* geradora1(){
    yield 'Valor 1';

    yield 'Valor 2';

    yield 'Valor 3';
}

const g1 = geradora1();

//o for sabe ate quando essa function termina
for(let valor of g1){
    console.log(valor);
}


//gerador infinito
function* gerador2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


//delegando de um gerador ao outro
function* gerador3(){
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4(){
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = gerador4();
for(let valor of g4){
    console.log(valor);
}

//chamando function
//não se usa return nesta function, pois se for inserido a function será finalizada.
function* geradora5(){
    yield function(){
        console.log('Vim do yield 1');
    };

    yield function(){
        console.log('Vim do yield 2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
