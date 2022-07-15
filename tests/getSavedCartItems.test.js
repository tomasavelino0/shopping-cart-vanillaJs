const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Testar se ao chamar a funcao getSavedCartItems, o metodo localStorage.getItem e chamado.', () => {
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('Ao executar a funcao "getSavedCartItems", o metodo localStorage.getItem e chamado com "cartItems" como parametro.', () => {
    expect.assertions(1);
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
