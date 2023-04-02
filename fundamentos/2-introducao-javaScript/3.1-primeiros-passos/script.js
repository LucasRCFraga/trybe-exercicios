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

// PONTO 5 COM FOQUETE

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

let peca;

switch(peca){

    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.'); 
        break;

    case 'bispo':
        console.log('Bispo-> Diagonal.'); 
        break;

    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.'); 
        break;

    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.'); 
        break;

    case 'torre':
        console.log('Torre -> Horizontal e vertical.'); 
        break;

    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida');

}

// Ponto 6 finalizado, ajuda do gabarito para achar como cada peça de Xadrez se movimenta

let nota;

if (nota < 0 || nota > 100){
    console.log('Nota incorreta');
} else if(nota >= 90){
    console.log('Nota A');
}else if(nota >= 80){
    console.log('Nota B');
}else if(nota >= 70){
    console.log('Nota C');
}else if(nota >= 60){
    console.log('Nota D');
} else if (nota >= 50){
    console.log('Nota E');
} else{
    console.log('Nota F')
}

// Ponto 7 finalizado

