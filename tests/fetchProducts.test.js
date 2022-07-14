require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test(' "fetchProducts" deve ser do "type function" ', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toEqual('function')
  });

  test('ao chamar a funcao "fetchProducts" com parametro "computador" fetch devera ser chamada. ', async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint correto', async () => {
    expect.assertions(1);
   await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('passado o parametro "computador" a funcao "fetchProducts" devera retornar um objeto com estrutura igual a "computadorSearch" ', async () => {
    expect.assertions(1);
   expect(await fetchProducts('computador')).toEqual(computadorSearch)
  });

  test('Ao chamar a funcao fetchProducts sem parametro deve retornar um erro', async () => {
    expect.assertions(1);
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
})
