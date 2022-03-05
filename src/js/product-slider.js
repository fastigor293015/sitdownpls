if (window.location.pathname === '/product-card.html') {
  let productBig = document.querySelector('.product__big'),
      productSlider = document.querySelector('.product__slider'),
      productPreviewArr = document.querySelectorAll('.product-preview__img'),
      productBigImg = document.querySelector('.product-big__img'),
      productBigSrc = productBigImg.getAttribute('src'),
      productSliderPreviewArr = document.querySelectorAll('.product-slider__img_preview'),
      productSliderBigImg = document.querySelector('.product-slider-big__img'),
      productSliderBigSrc = productBigImg.getAttribute('src');

  productBig.onclick = () => {
    productSliderBigImg.setAttribute('src', productSliderBigSrc);
    document.body.classList.add('no-scroll');
    productSlider.classList.add('product__modal_display');
    setTimeout(() => {
      productSlider.classList.add('product__modal_visible');
    }, 200)
    document.querySelector('.product-slider__big').scrollIntoView({block: "center", behavior: "smooth"});
  }

  productPreviewArr.forEach(item => {
    item.onclick = () => {
      let src = event.currentTarget.dataset.src;
      if (productBigImg.getAttribute('src') === src) {
        productBigImg.setAttribute('src', productBigSrc);
      } else {
        productBigImg.setAttribute('src', src);
      }
    }
  })

  productSliderPreviewArr.forEach(item => {
    item.onclick = () => {
      let src = event.currentTarget.dataset.src;
      if (productSliderBigImg.getAttribute('src') === src) {
        productSliderBigImg.setAttribute('src', productSliderBigSrc);
      } else {
        productSliderBigImg.setAttribute('src', src);
      }
    }
  })
}
