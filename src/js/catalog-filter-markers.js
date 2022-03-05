if (window.location.pathname === '/catalog.html') {
  let markerCategoryContainer = document.querySelector('.catalog-markers__category-container'),
      markerPriceContainer = document.querySelector('.catalog-markers__price-container'),
      markerDiscountContainer = document.querySelector('.catalog-markers__discount-container'),
      markerColorContainer = document.querySelector('.catalog-markers__color-container');

  let markerRemove = () => {
    document.querySelectorAll('.catalog-markers__btn').forEach(item => {
      item.onclick = (active) => {
        document.querySelectorAll('.catalog__checkbox-label').forEach(label => {
          if (label.getAttribute('aria-label') === active.currentTarget.parentElement.getAttribute('aria-label')) {
            label.querySelector('input[type="checkbox"]').checked = false;
          }
        })
        active.currentTarget.parentElement.remove();
        console.log(markerCategoryContainer.childNodes.length);
        if (markerCategoryContainer.childNodes.length === 0) {
          markerCategoryContainer.style.marginRight = 0;
        } else {
          markerCategoryContainer.style.marginRight = '20px';
        }
        if (markerPriceContainer.childNodes.length === 0) {
          markerPriceContainer.style.marginRight = 0;
        } else {
          markerPriceContainer.style.marginRight = '20px';
        }
        if (markerDiscountContainer.childNodes.length === 0) {
          markerDiscountContainer.style.marginRight = 0;
        } else {
          markerDiscountContainer.style.marginRight = '20px';
        }
        if (markerColorContainer.childNodes.length === 0) {
          markerColorContainer.style.marginRight = 0;
        } else {
          markerColorContainer.style.marginRight = '20px';
        }

        document.querySelector('.catalog__left').style.top = (document.querySelector('.catalog__top').offsetHeight + 17) + 'px';
      }
    })
  }

  let markerAdd = (item) => {
    if (item.dataset.filter === 'category') {
      if (item.querySelector('input[type="checkbox"]').checked === true) {
        let div = document.createElement('div');
        div.classList.add('catalog-markers__marker');
        div.classList.add('catalog-markers__category');
        div.setAttribute('aria-label', item.getAttribute('aria-label'));
        markerCategoryContainer.append(div);
        div.innerHTML = `${item.getAttribute('aria-label')}
                          <button class="btn catalog-markers__btn" aria-label="Убрать фильтр">
                            <svg class="catalog-markers__icon" width="24" height="24">
                              <use xlink:href="img/sprite.svg#close"></use>
                            </svg>
                          </button>`;
        markerCategoryContainer.style.marginRight = '20px';
      } else {
        document.querySelectorAll('.catalog-markers__category').forEach(category => {
          if (category.getAttribute('aria-label') === item.getAttribute('aria-label')) {
            category.remove();
          }
        })
        if (markerCategoryContainer.childNodes.length === 0) {
          markerCategoryContainer.style.marginRight = 0;
        }
      }
    } else if (item.dataset.filter === 'discount') {
      if (item.querySelector('input[type="checkbox"]').checked === true) {
        if (document.querySelector('.catalog-markers__discount') === null) {
          let div = document.createElement('div');
          div.classList.add('catalog-markers__marker');
          div.classList.add('catalog-markers__discount');
          div.setAttribute('aria-label', item.getAttribute('aria-label'));
          markerDiscountContainer.append(div);
          div.innerHTML = `${item.getAttribute('aria-label')}
                            <button class="btn catalog-markers__btn" aria-label="Убрать фильтр">
                              <svg class="catalog-markers__icon" width="24" height="24">
                                <use xlink:href="img/sprite.svg#close"></use>
                              </svg>
                            </button>`;
        }
        else {
          document.querySelector('.catalog-markers__discount').setAttribute('aria-label', item.getAttribute('aria-label'));
          document.querySelector('.catalog-markers__discount').innerHTML = `${item.getAttribute('aria-label')}
                            <button class="btn catalog-markers__btn" aria-label="Убрать фильтр">
                              <svg class="catalog-markers__icon" width="24" height="24">
                                <use xlink:href="img/sprite.svg#close"></use>
                              </svg>
                            </button>`;
        }
        markerDiscountContainer.style.marginRight = '20px';
        document.querySelectorAll('.catalog__checkbox-label').forEach(label => {
          if (label.parentElement.classList.contains('catalog-discount__checkbox-container') === true && label.querySelector('input[type="checkbox"]').checked === true && (label.getAttribute('aria-label') !== item.getAttribute('aria-label'))) {
            label.querySelector('input[type="checkbox"]').checked = false;

          }
        })
      } else {
        document.querySelectorAll('.catalog-markers__discount').forEach(discount => {
          if (discount.getAttribute('aria-label') === item.getAttribute('aria-label')) {
            discount.remove();
          }
        })
        if (markerDiscountContainer.childNodes.length === 0) {
          markerDiscountContainer.style.marginRight = 0;
        }
      }
    } else if (item.dataset.filter === 'color') {
      if (item.querySelector('input[type="checkbox"]').checked === true) {
        let div = document.createElement('div');
        div.classList.add('catalog-markers__marker');
        div.classList.add('catalog-markers__color');
        div.setAttribute('aria-label', item.getAttribute('aria-label'));
        markerColorContainer.append(div);
        div.innerHTML = `${item.getAttribute('aria-label')}
                          <button class="btn catalog-markers__btn" aria-label="Убрать фильтр">
                            <svg class="catalog-markers__icon" width="24" height="24">
                              <use xlink:href="img/sprite.svg#close"></use>
                            </svg>
                          </button>`;
        markerColorContainer.style.marginRight = '20px';
      } else {
        document.querySelectorAll('.catalog-markers__color').forEach(color => {
          if (color.getAttribute('aria-label') === item.getAttribute('aria-label')) {
            color.remove();
          }
        })
        if (markerColorContainer.childNodes.length === 0) {
          markerColorContainer.style.marginRight = 0;
        }
      }
    }
  }

  document.querySelectorAll('.catalog__checkbox-label').forEach(item => {
    markerAdd(item);

    item.onclick = (active) => {
      markerAdd(active.currentTarget);

      document.querySelector('.catalog__left').style.top = (document.querySelector('.catalog__top').offsetHeight + 17) + 'px';
    }
  })

  $('.catalog__markers').on("DOMNodeInserted", function (event) {
    markerRemove();

    document.querySelector('.catalog__left').style.top = (document.querySelector('.catalog__top').offsetHeight + 17) + 'px';
  })

  markerRemove();
}
