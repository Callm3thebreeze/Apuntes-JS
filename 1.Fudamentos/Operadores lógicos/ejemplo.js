let a = 2;
let b = 4;

/*
    2 = 10
    4 = 100  (binario)

*/

console.log(a << b);// esto indica que a 2(binario, es decir 10) se le suman 4 ceros, es decir 10 + 0000 = 100000 binario que equivale a 32

console.log(b >> a); // en este caso los ceros se restan 

/*

    010
    100
    ---
    110 = 6

*/

console.log( a | b); // Esto es un 'or'

/*

    010
    100
    ---
    000 = 0

*/

console.log( a & b); // 'And'


let c = 7;

c <<= b;
/*
    7 = 111
    111 + 0000 = 1110000 = 112
*/

console.log(c)