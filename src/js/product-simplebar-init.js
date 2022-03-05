if (window.location.pathname === '/product-card.html') {
  const productSimpleBar = new SimpleBar(document.querySelector('.product__preview'), {
    scrollbarMinSize: 20,
    scrollbarMaxSize: 28,
  });
}
