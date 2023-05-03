const { error } = require('console');
const createItem = require('../src/createItem');

describe('a função createItem', () => {
  const arr = ['bola', 2, 14.24, 55];
  const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
  const n = 'banana';
  const u = 'kg'
  const p = 1.99;
  const q = 20;

  it('1- cria um item válido', () => {
    expect(createItem(n,u,p,q)).toEqual(expected);
  });

  it('2- utiliza zero como quantidade padrão', () => {
    expect(createItem(n,u,p)).toHaveProperty('quantity', 0);
  });
  

  it('3- Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

  it('4- Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(23,u,p,q)).toThrowError('O nome do item deve ser uma string');
  });

  it('5- Lança um erro se o preço é negativo', () => {
    expect(() => createItem(n,u,-3,q)).toThrow(Error);
  });

//   it('6- Lança um erro se o preço é zero', () => {
//     expect(createItem(n,u,p,q)).toBe(expected);
//   });

});