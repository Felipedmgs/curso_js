//new object -> object.prototype
const objA = {
    chaveA: 'A'
    //proto __proto__: objetc prototype
};

const objB = {
    chaveB: 'B'
    //proto __proto__: objetc prototype
};

const objC = {
    chaveC: 'C'
    //proto __proto__: objetc prototype
};


//na chamada abaixo conseguimos fazer o objB ter o proto do objA
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

//falo que o objc tem o proto do b
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB);

console.log(objB.chaveC);//da undefine pois o obj b não tem o proto do c
