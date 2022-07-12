require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('fetchItem deve ser uma funcao', () => {
    expect(typeof fetchItem).toBe('function');
  })

  test('Testa se passado um parametro pra funcao, ele usa como endpoint da URL.', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });

  test('Testa se o retorno de fetchItem e igual a estrutura de "item" ', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  test('se chamado fetchItem sem parametro deve retornar um erro.', () => {
    expect(fetchItem()).rejects.toThrow('You must provide an url')
  })
});
