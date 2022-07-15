const saveCartItems = (item) => {
  if (!item) {
    throw new Error('insira um item');
  }
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
