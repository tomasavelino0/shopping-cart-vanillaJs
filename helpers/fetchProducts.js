const fetchProducts = async (url) => {
  if (url === undefined) {
    throw new Error('You must provide an url');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${url}`);
  const result = await response.json();
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
