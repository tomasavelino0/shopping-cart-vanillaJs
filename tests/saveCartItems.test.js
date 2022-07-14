const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('retorna um erro se nao enserir um item como pametro a funcao saveCartItems', () => {
    expect.assertions(1);
    expect(() => saveCartItems()).toThrow('insira um item');
  });  
  test('Testa ao executar a funcao saveCartItems com o parametro "<ol><li>Item</li></ol>" o metodo localStorage.setItem e chamado.', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('Ao executar saveCartItems com o parametro "<ol><li>Item</li></ol>" o metodo "localStorage.setItem" deve ser chamado com 2 parametros , o primeiro "cartItems" e o segundo sendo como argumento para sabeCartItems.', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
