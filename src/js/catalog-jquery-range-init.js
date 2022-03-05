if (window.location.pathname === '/catalog.html') {
  let markerPriceAdd = (priceTo) => {
    if (document.querySelector('.catalog-markers__price') === null) {
      let catalogMarker = document.createElement('div');
      catalogMarker.classList.add('catalog-markers__marker');
      catalogMarker.classList.add('catalog-markers__price');
      document.querySelector('.catalog-markers__price-container').append(catalogMarker);
      document.querySelector('.catalog-markers__price-container').style.marginRight = '20px';
    }

    document.querySelector('.catalog-markers__price').innerHTML = `До ${priceTo}
    <button class="btn catalog-markers__btn">
      <svg class="catalog-markers__icon" width="24" height="24">
        <use xlink:href="img/sprite.svg#close"></use>
      </svg>
    </button>`;
  }

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 200000,
      values: [ 2000, 150000 ],
      slide: function( event, ui ) {
        $( ".catalog-price-min__input" ).val(ui.values[ 0 ]);
        $( ".catalog-price-max__input" ).val(ui.values[ 1 ]);
        $('.catalog-price-min__input').val(String($('.catalog-price-min__input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
        $('.catalog-price-max__input').val(String($('.catalog-price-max__input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));

        markerPriceAdd($('.catalog-price-max__input').val());
      }
    });
    $( ".catalog-price-min__input" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( ".catalog-price-max__input" ).val($( "#slider-range" ).slider( "values", 1 ));
    $('.catalog-price-min__input').val(String($('.catalog-price-min__input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    $('.catalog-price-max__input').val(String($('.catalog-price-max__input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));

    markerPriceAdd($('.catalog-price-max__input').val());

    document.querySelectorAll('.ui-slider-handle').forEach(item => {
      item.onfocus = () => {
        document.querySelector('.ui-widget-header').style.background = '#7033AC';
      }

      item.onblur = () => {
        document.querySelector('.ui-widget-header').style.background = '#A65CF0';
      }
    })
  } );

  document.querySelector('.catalog-price-min__input').oninput = () => {
    $('.catalog-price-min__input').val(String($('.catalog-price-min__input').val().replace(/\B(?=(\d{3})+(?!\d))/g, " ")).replace(/[^0-9.]/g,''));
    if (/^(0|-?[1-9]\d{0,5})$/.test($( ".catalog-price-min__input" ).val())) {
      if ($( ".catalog-price-min__input" ).val() > $( "#slider-range" ).slider( "values", 1)) {
        $( ".catalog-price-min__input" ).val($( "#slider-range" ).slider( "values", 1))
      }
    } else {
      $( ".catalog-price-min__input" ).val($( "#slider-range" ).slider( "option", "min" ));
    }
    $( "#slider-range" ).slider( "values", 0, $( ".catalog-price-min__input" ).val() );
    $('.catalog-price-min__input').val(String($('.catalog-price-min__input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
  }

  document.querySelector('.catalog-price-max__input').oninput = () => {
    $('.catalog-price-max__input').val(String($('.catalog-price-max__input').val().replace(/\B(?=(\d{3})+(?!\d))/g, " ")).replace(/[^0-9.]/g,''));
    if (/^(0|-?[1-9]\d{0,5})$/.test($( ".catalog-price-max__input" ).val())) {
      if ($( ".catalog-price-max__input" ).val() < $( "#slider-range" ).slider( "values", 0)) {
        $( ".catalog-price-max__input" ).val($( "#slider-range" ).slider( "values", 0))
      }
    } else {
      $( ".catalog-price-max__input" ).val($( "#slider-range" ).slider( "option", "max" ));
    }
    $( "#slider-range" ).slider( "values", 1, $( ".catalog-price-max__input" ).val() );
    $('.catalog-price-max__input').val(String($('.catalog-price-max__input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));

    markerPriceAdd($('.catalog-price-max__input').val());
  }
}
