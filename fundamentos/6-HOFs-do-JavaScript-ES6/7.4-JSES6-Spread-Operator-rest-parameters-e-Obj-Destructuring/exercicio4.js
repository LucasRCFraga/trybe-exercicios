/**
 * Escreva uma função filterPeople que, dada uma lista de 
 * pessoas, retorna todas as pessoas australianas que 
 * nasceram no século 20:
 */

const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
    // bornIn: nascido em
];

// escreva filterPeople abaixo
const filter = (people) => {
   return people.filter((nat) => nat.nationality === 'Australian' && nat.bornIn > 1900 & nat.bornIn <= 2000);
}

console.log(filter(people));

// * Resposta abaixo utiliza o Obj destructuring dentro do parametro do .filter()

const filterPeople = (arr) => {
    return people.filter(({ nationality, bornIn }) => {
      return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
    });
}

console.log(filterPeople(people));