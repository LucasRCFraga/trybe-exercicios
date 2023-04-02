let a = null;
let b = null;

console.log();


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Ponto 1 finalizado;



if(a > b){
    console.log('a é maior do que b');
}
else {
    console.log('b é maior do que a');
}

// Ponto 2 finalizado;

let c = null;

if(a > b && a > c){
    console.log('O maior número é: '+ a);
} else if(b > a && b > c){
    console.log('O maior número é: ' + b);
} else{
    console.log('O maior número é: ' + c);
}

// Ponto 3 finalizado;

let d;

if(d > 0){
    console.log('Positive');
} else if(d < 0){
    console.log('Negative');
}else{
    console.log('Zero');
}

// Ponto 4 finalizado;

let q = 80;
let w = 77;
let e = 92;
let somaTri = q + w + e;
let checkTri = q > 0 && w > 0 && e > 0;
// let triangulo = null;

if(checkTri){
    if (somaTri === 180){
        console.log(true);
    }
    else{
        console.log(false);
    }
} else{
    console.log('Triangulo invalido');
}

// VVVVVVVVVVVVVVV Esse foi o que eu fiz, estava correto mas
// precisava de um if dentro de outro if, pois nao é possivel ter
// um triangulo com angulos negativos, entao precisa checar isso primeiro
//
//
// if(somaTri <= 180){
//     triangulo = true;
//     console.log(triangulo);
// } else if(somaTri > 180){
//     triangulo = false;
//     console.log();
// } else{
//     console.log();
// }

// Ponto 5 finalizado;

