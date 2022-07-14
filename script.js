// const { fetchProducts } = require('./helpers/fetchProducts');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  fetchProducts('computador');
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const createELements = async () => {
  const sectionElement = document.querySelector('.items');
  const textCarregando = createCustomElement('span', '.loading', 'carregando');
  sectionElement.appendChild(textCarregando);
  const computers = await fetchProducts('computador');
  textCarregando.innerText = '';
  computers.forEach(({ id: sku, title: name, thumbnail: image }) => {
    sectionElement.appendChild(createProductItemElement({ sku, name, image }));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemCart = async (item) => {
  const olCartItem = document.querySelector('.cart__items');
  const itemId = getSkuFromProductItem(item.target.parentElement);
  const { id: sku, title: name, price: salePrice } = await fetchItem(itemId);
  olCartItem.appendChild(createCartItemElement({ sku, name, salePrice }));
};

const btnsListener = () => {
  const myButtons = document.querySelectorAll('.item__add');
  myButtons.forEach((btn) => btn.addEventListener('click', addItemCart));
};

const removeAllCartItems = () => {
  const btnRemoveAll = document.querySelector('.empty-cart');
  btnRemoveAll.addEventListener('click', () => {
    const itemsCart = document.querySelectorAll('.cart__item');
    itemsCart.forEach((item) => item.remove());
  });
};

window.onload = async () => {
  await createELements();
  btnsListener();
  removeAllCartItems();
};
