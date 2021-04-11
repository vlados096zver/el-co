$(document).ready(function() {

  if ($('[data-js-scroll]').length > 0) {

    let $s1 = $('#s1'),
      $s2 = $('s2'),
      $scroll_btn = $('[data-js-scroll]'),
      scroll_position = $(window).scrollTop(),
      scroll_dir = getScrDir(), //определяем направление скрола
      scrolling = false; // происходит ли скроллинг 

    $(window).scroll((e) => {
      scroll_dir = getScrDir();
      scroll_position = $(window).scrollTop();

      let s1_offset_top = $s1.offset().top,
        s1_height = $s1.height(),
        full_offset = s1_offset_top + s1_height;

      if (scroll_dir === 'bottom' && scroll_position < full_offset && !scrolling) {
        animateScroll(full_offset);
        $('.main-header').addClass('main-header--fixed');
      } else if (scroll_dir === 'top' && scroll_position < full_offset && !scrolling) {
        animateScroll(s1_offset_top);
        $('.main-header').removeClass('main-header--fixed');
      }
    })

    $scroll_btn.click((e) => {
      let $this = $(e.currentTarget),
        target = $this.data('target'),
        $target = $('[data-anchor="' + target + '"]');

      if ($target.length) {
        let target_affset_top = $target.offset().top;
        animateScroll(target_affset_top);
        $('.main-header').addClass('main-header--fixed');
      }
    })

    function animateScroll(scroll_pos) {
      scrolling = true;
      $('html, body').animate({
        scrollTop: scroll_pos
      }, 500, 'swing', function() {
        scrolling = false;
      });
    }

    function getScrDir() {
      curren_position = $(window).scrollTop();

      if (curren_position > scroll_position) {
        return 'bottom';
      } else {
        return 'top';
      }
    }

  }

  $('.main-header__button button').on('click', function(e) {
    $('.main-header__input').trigger('focus');
    $('.main-header__search').addClass('main-header__search-active');
  });

  $('html').on('click', function(e) {
    if (!$(e.target).is('.main-header__button button, .main-header__input, main-header__search-wrap, main-header__search-wrap, main-header__search-btn')) {
      $('.main-header__search').removeClass('main-header__search-active');
    }
  });

  const info = $('.info__wrap');
  info.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 1,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: false,
    dots: true,
    dotsClass: 'info__dots-list',
    appendDots: $('.info__inner'),
    customPaging: function(slider, i) {
      return `<img src="${$(slider.$slides[i]).attr('data-bg')}">`;
    },
  });

  const product = $('.product .product__wrap');
  product.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 4,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    rows: 2,
    arrows: false,
    dots: false,
    dotsClass: 'product__dots-list',
    responsive: [{
        breakpoint: 1351,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  const product__similar = $('.product--similar .product__wrap');
  product__similar.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 4,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: false,
    dots: false,
    dotsClass: 'product__dots-list',
    responsive: [{
        breakpoint: 1351,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  const partners = $('.partners__wrap');
  partners.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 4,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: false,
    //dots: true,
    dots: false,
    dotsClass: 'partners__dots-list',
    responsive: [{
        breakpoint: 1351,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      }
    ]
  });

  const blog = $('.blog .blog__wrap');
  blog.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 3,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: false,
    dots: false,
    dotsClass: 'blog__dots-list',
    responsive: [{
        breakpoint: 1351,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  function changeSlideClick(button, slider) {
    $(button).on('click', function() {
      $(slider).slick('slickNext');
    });
  }

  changeSlideClick('.product__arrow--dir_right', '.product__wrap');
  changeSlideClick('.partners__arrow--dir_right', '.partners__wrap');
  changeSlideClick('.blog__arrow--dir_right', '.blog__wrap');

  $(".tabs__box").click(function() {
    $(".tabs__box").removeClass("tabs__box--active").eq($(this).index()).addClass("tabs__box--active");
    var index = $(this).index();
    $(".tabs__item").hide().eq(index).fadeIn()
  });

  (function() {
    var product__single = $('.single__big');
    var product__gallery = $('.single__gallery');

    var overlay_gallery = $('.popup__gallery');
    var overlay_gallery_slider = $('.popup__gallery .overlay-slider');


    product__single.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      draggable: true,
      //focusOnSelect: true,
      asNavFor: '.single__gallery',
    });

    // product__gallery
    product__gallery.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      draggable: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      focusOnSelect: true,
      asNavFor: '.single__big',
      responsive: [{
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 566,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });

    overlay_gallery_slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      draggable: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });

    product__single.find('.single__block').on('click', function() {

      let index = $(this).data('slick-index');
      overlay_gallery_slider.slick('slickGoTo', index, true);
      overlay_gallery.addClass('popup--active')
    });

    $('.overlay-close').click(function() {
      var overlay = $(this).parents('.popup');
      overlay.removeClass('popup--active');

    });

  })();


  $('.basket__input, .single__input').on('change, input', function() {
    $(this).val(
      $(this).val().replace(/^0|\D/, '') || 1
    );
  })

  $('.basket__input, .single__input').on('focus', function() {
    $(this).data("before", $(this).val())
  })

  $('input[data-together-input]').on('change, input', function() {
    $('input[data-together-input]').val($(this).val());
  })


  $('.basket__input').on('blur', function() {
    let v = /\d+/.exec($(this).val())
    if (!v || !parseInt(v)) v = $(this).data("before")
    $(this).val(v)
    $(this).trigger('input')
  })

  function InitProduct() {

    $('.single__box--content').each(function(i, e) {
      e = $(e);

      let quantity = e.find('.single__input');


      var recount = new RecountProduct({
        summ: e.find('.single__count'),
        quantity: quantity,
        price: e.find('.single__input').attr('data-price'),
      })

      quantity.on('input', function() {
        recount.updateSumm()
      })

      e.find('.single__btn--decrement').click(function() {
        recount.update('minus')
      });

      e.find('.single__btn--increment').click(function() {
        recount.update('plus')
      });


    });

    //basket

    $('.basket__item').each(function(i, e) {
      e = $(e);

      let quantity = e.find('.basket__input');

      var recount = new RecountProduct({
        summ: e.find('.basket__sum span'),
        quantity: quantity,
        price: e.find('.basket__input').attr('data-price'),
        fun: updateTotalSumm,
        decimalSeparator: ''
      })

      quantity.on('input', function() {
        recount.updateSumm()
      })

      e.find('.basket__btn--decrement').click(function() {
        recount.update('minus')
      });

      e.find('.basket__btn--increment').click(function() {
        recount.update('plus')
      });

      e.find('.basket__close').click(function() {
        e.remove();
        recount.updateSumm()
      });

      recount.updateSumm(false)
    });


    updateTotalSumm()
  }



  // summ - jq узел общей стоимости продуктов
  // quantity - jq узел количества продукта
  // price - стоимости продукта
  // after - строка, которая прибавится к общей стоимости
  // fun - функция, которая вызывается после пересчета стоимости

  function RecountProduct(param) {
    this.summ = param.summ;
    this.quantity = param.quantity;
    this.price = parseFloat(param.price);
    this.after = param.after || "";
    this.fun = param.fun;
    this.decimalSeparator = param.decimalSeparator;

    // обновления количества товара
    // action - флаг: 'plus' || 'minus'

    this.update = function(action) {
      var value = this.getQuantity();
      var together = this.quantity.data('together-input');
      console.log(together);

      if (action == 'plus') {
        value += 1;
      } else if (action == 'minus' && value != 1) {
        value -= 1;
      }

      if (together !== undefined) {
        $('[data-together-input="' + together + '"]').val(value).trigger('input');
      }

      this.quantity.val(value);
      this.updateSumm()
    }

    // обновление общей стоимости товара
    // если total == true будет запущен пересчёт общей суммы

    this.updateSumm = function(total = true) {
      var num = (this.getQuantity() * this.price)

      this.summ.text(num);
      if (total && typeof this.fun === "function") this.fun()
    }

    // возвращает количество товара

    this.getQuantity = function() {
      return parseInt(this.quantity.val()) || 0
    }

    this.format = function(v) {
      return String(v).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    }
  }


  // Пересчёт общей суммы

  function updateTotalSumm() {
    var val = 0;
    var singleCount = 0;

    $('.basket__sum span').each(function(i, e) {
      val += parseFloat($(e).text().replace(/ /g, "") || 0);
    })

    $('.basket__count').text(val);

    $('.basket__input').each(function(i, e) {
      singleCount += Number($(e).val());
    })

    $('.basket__product').text(singleCount);
  }


  InitProduct();

  function validate(input, length, regExp, error, phone) {

    $(input).on('blur keyup', function() {
      var value = $(this).val();
      var that = $(this);

      regExp = regExp == '' ? /./ : regExp;

      if (phone === true) {
        bool_reg = !regExp.test(value);
      } else {
        bool_reg = regExp.test(value);
      }

      if (value.length > length && value !== '' && bool_reg) {
        that.removeClass('form-fail').addClass('form-done');
        $(error).slideUp();
      } else {
        that.removeClass('form-done').addClass('form-fail');
        $(error).slideDown();
      }
    });

  }

  // деакцивация кнопки если есть поле с ошибкой

  function disBtn(input, btn, bool) {
    var input = $(input);
    input.on('blur keyup', function() {

      if (input.hasClass('form-fail') || bool == true) {
        $(btn).attr('disabled', 'disabled');
      } else {
        $(btn).removeAttr('disabled');
      }

    });

  }

  // для проверки при нажатии

  function valClick(input, length, regExp, error, btn, phone) {
    var value = $(input).val();

    regExp = regExp == '' ? /./ : regExp;

    if (phone === true) {
      bool_reg = regExp.test(value);
    } else {
      bool_reg = !regExp.test(value);
    }

    if (value.length < length && value === '' && bool_reg) {
      $(input).addClass('form-fail');
      $(error).slideDown();
    }
  }

  //  деакцивация кнопки при нажатии

  function disBtnClick(input, btn) {
    var input = $(input);

    if (input.hasClass('form-fail')) {
      $(btn).attr('disabled', 'disabled');
      return false;
    } else {
      return true;
    }

  }

  function validateCheck(input) {
    $(input).on('change', function() {
      var check = $(this).prop('checked');
      var that = $(this);

      if (check) {
        that.removeClass('input-fail').addClass('input-done');
      } else {
        that.removeClass('input-done').addClass('input-fail');
      }
    });
  }

  $('input[type="tel"]').mask("+38 (999) 999-99-99");

  var regName = /^[a-zA-Zа-яА-ЯёЁ]+/;
  var regPhone = /[_]/i;
  var regEmail = /.+@.+\..+/i;
  var regNumber = /^\d{1,}$/;

  validate('#c_name', 1, regName, '.contacts .contacts__fail--name');

  validate('#c_msg', 1, regName, '.contacts .contacts__fail--msg');

  disBtn('#c_name, #c_msg', '#btn--contact');

  validate('#o_name', 1, regName, '.personal .contacts__fail--name');

  validate('#o_msg', 1, regName, '.personal .contacts__fail--msg');
  validate('#o_city', 1, regName, '.delivery .contacts__fail--city');

  disBtn('#o_name, #o_msg, #o_city', '#btn--order');

  validate('.reqcall__input', 1, regPhone, '.reqcall__error', true);

  disBtn('.reqcall__input', '.reqcall__btn');


  var select_obj = {};

  (function() {

    $('.select__wrap').each(function() {
      var id = $(this).attr('id');
      checkActive(this);
      var placeholder = $(this).find('.select__placeholder').html();
      select_obj[id] = placeholder;

    });

    $('.select__wrap').on('click', '.select__placeholder', function() {
      $('.select__list').removeClass('select__list--active');
      $('.select__placeholder').removeClass('changed');
      $(this).next().toggleClass('select__list--active');
      $(this).toggleClass('changed');

    });

    $('.select__wrap').on('click', '.select__item', function(e) {
      if ($(e.target).is('.select__item--disabled')) {

        return false;
      } else {

        if ($(e.target).is('.select__input')) return false;
        var container = $(this).parents('.select__wrap').attr('id');
        if ($('#' + container + ' .select__item--active').length == 1) {

          if (!$(this).hasClass('select__item--active')) {
            $('#' + container + ' .select__item').removeClass('select__item--active');
            $(this).addClass('select__item--active');
            setPlaceholder(this);
          }

        } else {
          setPlaceholder(this);
          $(this).toggleClass('select__item--active');
        }
        $(this).parent().removeClass('select__list--active');
        $(this).parents('.select__wrap').find('.select__placeholder').removeClass('changed');
      }
    });

    $('.select__input').on('input', function(e) {
      $(e.target).parent().siblings('li').each((i, el) => {
        $(el).css("display", $(el).data("value").toLowerCase().indexOf(e.target.value.toLowerCase()) != -1 ? "block" : "none");
      });
    })

    $('body').on('click', function(e) {
      if (!$(e.target).is('.changed, .select__list, .select__item')) {
        $('.select__list').removeClass('select__list--active');
      }
    });

    function setPlaceholder(self) {
      var value = $(self).data('value');
      var value_pl = $(self).html();
      $(self).parents('.select__wrap').find('.select__placeholder').html(value_pl);
    }

    function checkActive(self) {
      var text = $(self).find('.select__item--active').text();
      if (text === undefined || text === '') {
        text = $(self).find('.select__item:not(.select__item--disabled):eq(0)').addClass('select__item--active').text();
      }
      $(self).find('.select__placeholder').html(text);
    }

  })();

  function toggleSelect(id, value) {
    $(id).find('.select__item').removeClass('select__item--active');
    $(id).find('.select__item[data-value="' + value + '"]').addClass('select__item--active');
    $(id).find('.select__placeholder').html(value);
  }

  function getSelValue(id) {
    return $(id).find('.select__item--active').data('value');
  }

  $('body').on('click', function(e) {
    if ($(e.target).is('.popup__reqcall, .popup__close, .popup__category, .overlay-close, .popup__menu, .popup__desc, .popup__filter')) {
      $('.popup__reqcall').removeClass('popup--active');
      $('.popup__category').removeClass('popup--active');
      $('.popup__menu').removeClass('popup--active');
      $('.popup__block').removeClass('popup__block--active');
      $('.popup__filter').removeClass('popup--active');
    }
  });

  $('.btn--popup').on('click', function() {
    $('.popup__menu').addClass('popup--active');
    $('.popup__block').addClass('popup__block--active');
  });

  $('.btn--consult').on('click', function(e) {
    $('.popup__reqcall').addClass('popup--active');
  });

  $('.catalog__item--category').on('click', function(e) {
    $('.popup__category').addClass('popup--active');
  })

  $('.catalog__item--filter').on('click', function(e) {
    $('.popup__filter').addClass('popup--active');
  })

  $('.filter__box').each(function(index, item) {
    $(item).on('click', '.filter__name', function() {
      if (!$(item).hasClass('filter__box--no-active')) {
        $(item).addClass('filter__box--no-active');
      } else {
        $(item).removeClass('filter__box--no-active');
      }
      $(this).next().slideToggle();
    })
  })

  var date = new Date();
  var hours = date.getHours();

  var minHours = '08';

  var sDay = getSelValue('#select__day');
  if (sDay == 'Сегодня' && hours >= 21) {
    $('#select__day').find('.select__item:eq(0)').addClass('select__item--disabled').removeClass('select__item--active');
    $('#select__day').find('.select__item:eq(1)').addClass('select__item--active');
    var newDay = $('#select__day').find('.select__item:eq(1)').data('value');
    $('#select__day').find('.select__placeholder').html(newDay);

    toggleSelect('#select__hour', minHours);
  } else if (sDay == 'Сегодня' && hours < 21) {
    sHours = hours + 2;
    sHours = sHours < 10 ? '0' + sHours : sHours;
    toggleSelect('#select__hour', sHours);
  }

});


//return `<div><img src="${i.dataset.bg}" alt=""></div>`;*/
function InitCustomRange(param = {}) {
  let $ranges = document.querySelectorAll(typeof param.selector != "undefined" ? param.selector : ".custom-range");
  let customRanges = [];
  let dragging = false;
  let activRange = null;
  let startX, startLayerX;
  let rangeOfValues;
  let formating = typeof param.formating != "undefined" ? param.formating : true;

  // init

  $ranges.forEach(function($range) {
    let selector = `[data-id-custom-range="${$range.dataset.idCustomRange}"]`;
    let $min = document.querySelector(`.custom-range__min${selector}`);
    let $max = document.querySelector(`.custom-range__max${selector}`);
    let $maxVal = document.querySelector(`.custom-range__max-value${selector}`);
    let $minVal = document.querySelector(`.custom-range__min-value${selector}`);
    let data = {
      $range,
      $min,
      $max,
      $maxVal,
      $minVal,
      min: parseInt($minVal.dataset.min || getValueToNode($min)),
      max: parseInt($maxVal.dataset.max || getValueToNode($max)),
      persentMin: 0,
      persentMax: 100,
    }

    if ($min) setValueToNode($min, data.min);
    if ($max) setValueToNode($max, data.max);

    data.rangeOfValues = data.max - data.min;

    initValue.call(data, $minVal);
    initValue.call(data, $maxVal);
    updateRange.call(data);

    let style = getComputedStyle($range);
    data.paddingLeft = parseInt(style.getPropertyValue('padding-left'));
    data.paddingRight = parseInt(style.getPropertyValue('padding-right'));

    customRanges.push(data);

    // events

    let onMouseDown_ = onMouseDown.bind(data);
    let onKeyDown_ = onKeyDown.bind(data);
    let onInput_ = debounceTwo(onInput.bind(data), 1000);
    let input_ = function(event) {
      if (event.inputType == "insertReplacementText" || event.inputType == undefined) {
        onInput_.forcedСall.apply(this, arguments);
      } else {
        onInput_.debounce.apply(this, arguments);
      }
    }
    let inputRange_ = function(text) {
      if (text) setValueToNode(this, text);

      let event = document.createEvent('Event');
      event.initEvent('inputrange', true, true);

      this.dispatchEvent(event);
    }

    addListenerMulti([$range], "mousedown touchstart", onMouseDown_, {
      passive: false
    });
    addListenerMulti([$range], "keydown", onKeyDown_);

    if ($minVal.tagName == "INPUT") addListenerMulti([$minVal], "input", input_);
    if ($maxVal.tagName == "INPUT") addListenerMulti([$maxVal], "input", input_);

    // возможность установить или обновить значение слайдера
    addListenerMulti([$minVal, $maxVal], "inputrange", input_);
    $minVal.inputRange = inputRange_;
    $maxVal.inputRange = inputRange_;

    // возможность удалить обрабочики

    data.unInstall = function() {
      removeListenerMulti([$range], "mousedown touchstart", onMouseDown_, {
        passive: false
      });
      removeListenerMulti([$range], "keydown", onKeyDown_);
      removeListenerMulti([$minVal, $maxVal], "input", input_);
      removeListenerMulti([$minVal, $maxVal], "inputrange", input_);
      delete $minVal.inputRange;
      delete $maxVal.inputRange;
    }
  })

  return customRanges;


  /* 
    Обработчик события зажатия мыши на слайдере (mousedown, touchstart) 
    this: объект слайдера
  */

  function onMouseDown(event) {
    event.preventDefault();
    event.target.focus();

    addMouseListeners();
    dragging = true;
    activRange = this;
    startX = getPropsEvent(event, "pageX");

    let box = this.$range.getBoundingClientRect();
    startLayerX = startX - box.left + pageXOffset;

    let realX = startLayerX - this.paddingLeft;
    let realWidth = this.$range.clientWidth - this.paddingLeft - this.paddingRight;
    let persent = minMax((realX / realWidth) * 100, 0, 100);
    let m1 = Math.abs(this.persentMin - persent);
    let m2 = Math.abs(this.persentMax - persent);

    if (m1 < m2 || m1 == m2 && this.persentMin > persent) {
      this.control = "min";
      this.persentMin = persent;
    } else {
      this.control = "max";
      this.persentMax = persent;
    }

    updateRange.call(this);
  }


  /* 
    Обработчик события перемещения курсора по document (mousemove, touchmove) 
  */

  function onMouseMove(event) {
    if (!dragging) return;

    event.preventDefault();

    let realX = (startLayerX + getPropsEvent(event, "pageX") - startX) - activRange.paddingLeft;
    let realWidth = activRange.$range.clientWidth - activRange.paddingLeft - activRange.paddingRight;
    let persent = minMax((realX / realWidth) * 100, 0, 100);

    switch (activRange.control) {
      case "min":
        activRange.persentMin = minMax(persent, 0, activRange.persentMax);
        break

      case "max":
        activRange.persentMax = minMax(persent, activRange.persentMin, 100);
        break
    }

    updateRange.call(activRange);
  }


  /* 
    Обработчик события (mouseup, touchend) на document 
  */

  function onMouseUp(event) {
    removeMouseListeners();
    dragging = false;
  }


  /* 
    Обработчик события input на элементах ввода 
    this: объект слайдера
  */

  function onInput(event) {
    initValue.call(this, event.target);
    updateRange.call(this);
  }


  /* 
    Обработчик события keydown на слайдере 
    this: объект слайдера
  */

  function onKeyDown(event) {
    let inc = 0;
    if (event.keyCode == '39') {
      inc = 1;
    } else if (event.keyCode == '37') {
      inc = -1;
    } else {
      return;
    }

    let node = activRange.control == "min" ? this.$minVal : this.$maxVal;
    setValueToNode(node, parseInt(getValueToNode(node)) + inc);

    initValue.call(this, node);
    updateRange.call(this);
  }


  /* 
    Достаёт из event (объект события mouse или touch) значение параметра name 
  */

  function getPropsEvent(event, name) {
    return event[name] ? event[name] : (event.touches !== undefined ? event.touches[0][name] : 0);
  }


  /* 
    Вписывает числовое значение value в диапазон между min and max 
  */

  function minMax(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }


  /* 
    Корректирует value [0 - 100] так, чтобы его значение соответствовало целому числу диапазона range 
  */

  function stepping(value, range) {
    return (Math.round((value / 100) * range) / range) * 100;
  }


  /* 
    Обновляет значение в input и css variables 
    this: объект слайдера
  */

  function updateRange() {
    this.persentMin = stepping(this.persentMin, this.rangeOfValues);
    this.persentMax = stepping(this.persentMax, this.rangeOfValues);

    let minVal = this.min + Math.round((this.persentMin / 100) * this.rangeOfValues);
    setValueToNode(this.$minVal, minMax(minVal, this.min, this.max));

    let maxVal = this.min + Math.round((this.persentMax / 100) * this.rangeOfValues);
    setValueToNode(this.$maxVal, minMax(maxVal, this.min, this.max));

    this.$range.style.setProperty('--persent-min', this.persentMin + "%");
    this.$range.style.setProperty('--persent-max', this.persentMax + "%");
  }


  /* 
    Извлекает данные из input и переводит в проценты 
    this: объект слайдера
    target: input node
  */

  function initValue(target) {
    switch (target) {
      case this.$minVal:
        this.persentMin = ((getValueToNode(this.$minVal) - this.min) / this.rangeOfValues) * 100;
        this.persentMin = minMax(this.persentMin, 0, this.persentMax);
        break;

      case this.$maxVal:
        this.persentMax = ((getValueToNode(this.$maxVal) - this.min) / this.rangeOfValues) * 100;
        this.persentMax = minMax(this.persentMax, this.persentMin, 100);
        break;
    }
  }


  /* 
    Получает значение узла
  */

  function getValueToNode(node) {
    return (node.tagName == "INPUT" ? node.value : node.textContent).replace(/\D/g, '');
  }


  /* 
    Устанавливает значение узлу
  */

  function setValueToNode(node, value) {
    if (formating && node.type != "number") value = value.toLocaleString();
    node.tagName == "INPUT" ? node.value = value : node.textContent = value;
  }


  /* 
    Установка обработчиков событий на document 
  */

  function addMouseListeners() {
    addListenerMulti([document], "mousemove touchmove", onMouseMove, {
      passive: false
    });
    addListenerMulti([document], "mouseup touchend", onMouseUp);
  }


  /* 
    Удаление обработчиков событий с document 
  */

  function removeMouseListeners() {
    removeListenerMulti([document], "mousemove touchmove", onMouseMove, {
      passive: false
    });
    removeListenerMulti([document], "mouseup touchend", onMouseUp);
  }


  /* 
    Создаёт объект с debounce функкцией для fn, 
    которую можно принудительно выполнить с помощью forcedСall
  */

  function debounceTwo(fn, timeout) {
    let timer;

    return {
      debounce: function() {
        let args = arguments,
          ctx = this;

        clearTimeout(timer);

        timer = setTimeout(function() {
          fn.apply(ctx, args);
          timer = null;
        }, timeout);
      },

      forcedСall: function() {
        fn.apply(this, arguments);

        clearTimeout(timer);
      }
    }
  }


  /* 
    Добавление обработчика (fn) для нескольких событий (s), 
    указанных строкой через пробел на узел (node) 
  */

  function addListenerMulti(node, s, fn, options = false) {
    node.forEach(n => s.split(' ').forEach(e => n.addEventListener(e, fn, options)));
  }


  /* 
    Удаление обработчика (fn) для нескольких событий (s), 
    указанных строкой через пробел на узел (node) 
  */

  function removeListenerMulti(node, s, fn, options = false) {
    node.forEach(n => s.split(' ').forEach(e => n.removeEventListener(e, fn, options)));
  }
}

InitCustomRange();

let btnClear = document.querySelector('.btn--clear');

if (btnClear != null) {
  btnClear.addEventListener('click', function() {

    let items = document.querySelectorAll('.filter__submenu--range');

    for (let item of items) {
      let $minVal = item.querySelector(".custom-range__min-value");
      let $maxVal = item.querySelector(".custom-range__max-value");

      $minVal.inputRange($minVal.dataset.baseValue);
      $maxVal.inputRange($maxVal.dataset.baseValue);
    }

  })

}
