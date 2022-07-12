const fetchItem = async (endpoint) => {
  const url = `https://api.mercadolibre.com/items/${endpoint}`;
  if (endpoint === undefined) {
    throw new Error('You must provide an url');
  }
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

console.log(fetchItem('MLB1615760527'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
