/**************CONCATENAR ARRAYS */

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//concatenar a1 com a2
const a3 = a1.concat(a2);
console.log(a3);


const a4 = a1.concat(a2, [9, 10, 11], 'Felipe');
console.log(a4);

//com spread operator'...'
const a5 = [...a1, 'Felipe2', ...a2, ...[7, 8, 9]];
console.log(a5);

