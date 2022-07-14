const saveCartItems = (item) => {
  if (!item) {
    throw Error('insira um item');
  }
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
