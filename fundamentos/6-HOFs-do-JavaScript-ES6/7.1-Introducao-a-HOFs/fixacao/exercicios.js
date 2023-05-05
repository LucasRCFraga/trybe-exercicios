/*
 * PARA FIXAR *
*/

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verify = numbers.find((N) => N % 3 === 0 && N % 5 === 0);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const nfind = names.find((name) => name.length === 5);

