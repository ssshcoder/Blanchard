



// Скролл
new SimpleBar(document.getElementById('scroll-1'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('scroll-2'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('scroll-3'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('scroll-4'), {
  scrollbarMaxSize: 28,
});

new SimpleBar(document.getElementById('scroll-5'), {
  scrollbarMaxSize: 28,
});
// Array.prototype.forEach.call(
//   document.querySelectorAll('.scroll'),
//   el => new SimpleBar()
// );


// Селект
const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    position: 'bottom',
  });


//    Первый свайпер
 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: false ,
  speed: 600   ,
  spaceBetween: 34,
  watchSlidesProgress: true,
  hashNavigation: true,
  slidesPerGroup: 1,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 1500px
    1800: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,

    },
    // when window width is >= 480px
    1025: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    930: {
      slidesPerView: 3,
      spaceBetween: 34,
      slidesPerGroup: 3,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
  }

});

// Второй свайпер
const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: false,
  speed: 300   ,
  spaceBetween: 50,
  watchSlidesProgress: true,
  hashNavigation: true,
  slidesPerGroup: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next_2',
    prevEl: '.swiper-button-prev_2',
  },

  pagination: {
    el: '.swiper-pagination-2',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 1500px
    1023: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,

    },
    // when window width is >= 480px
    600: {
      spaceBetween: 27,
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    220: {
      spaceBetween: 27,
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
  }

});

//    Третий свайпер
const swiper3 = new Swiper('.swiper-3', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: false,
  speed: 600   ,
  spaceBetween: 50,
  watchSlidesProgress: true,
  hashNavigation: true,
  slidesPerGroup: 3,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next_3',
    prevEl: '.swiper-button-prev_3',
  },

  breakpoints: {
    // when window width is >= 1500px
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,

    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  }

});


// АККОДЕОН
$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
} );


// КАРТА
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75846806898367, 37.60108849999989],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        controls: ['geolocationControl','zoomControl']
    });

    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/Placemark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark)
}

// Валидация формы
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимальная длина три символа',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Номер должен содержать 11 символов',
    },
  ]);

// выпадающие окна меню
// let dropdownItems = document.querySelectorAll('.dropdown');
// let menuItems = document.querySelectorAll('.hero__menu-item')

// menuItems.forEach(function(el){
//   el.addEventListener('click', function(e){
//     const path = e.currentTarget.dataset.path

//     console.log(path)

//     menuItems.forEach(function(menuItem){
//       menuItem.classList.remove('menu-is-active')
//     })
//     el.classList.add('menu-is-active')

//     dropdownItems.forEach(function(dropdownItem){
//       dropdownItem.classList.remove('dropdown--active')
//     })
//     document.querySelector(`[data-target="${path}"]`).classList.add('dropdown--active')

//   })
// })


const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

setMenuListener();


// Табы в аккордионе
let artists = document.querySelectorAll('.artist-container');
let nameBtns = document.querySelectorAll('.accordion__list-button')

nameBtns.forEach(function(el){
  el.addEventListener('click', function(e){
    const artistName = e.currentTarget.dataset.artistname

    console.log(artistName)

    nameBtns.forEach(function(nameBtn){
      nameBtn.classList.remove('name--active')
    })
    el.classList.add('name--active')

    artists.forEach(function(artist){
      artist.classList.remove('artist-container--active')
    })
    document.querySelector(`[data-artist="${artistName}"]`).classList.add('artist-container--active')

  })
})

// Попапы
let popup = document.querySelectorAll('.projects__popup')
let tooltip = document.querySelectorAll('.projects__tooltip')

tooltip.forEach (function (el){
  el.addEventListener('click', function(e){
    const tooltipNum = e.currentTarget.dataset.tooltipnumber
    // popup-number
    console.log(tooltipNum)

    document.querySelector(`[data-popup-number="${tooltipNum}"]`).classList.toggle('popup--active')

    e.currentTarget.classList.toggle('tooltip--active')
  })
})

// Кнопка поиска в хедере
let searchBtn = document.querySelector('.header-search__button')
let searchInput = document.querySelector('.header-search__input')
let searchForm = document.querySelector('.header-search')
let pageWidth = document.documentElement.scrollWidth

searchBtn.addEventListener('click', function(){
  searchInput.classList.toggle('header-search__input--active')
  // console.log(pageWidth)
  if (pageWidth <= 650)
    searchForm.classList.toggle('mobile--active')
  else
    console.log('ширина экрана больше 630px')
})


// Кнопка бургер
let burgerBtn = document.querySelector('.burger')
let burgerMenu = document.querySelector('.burger-nav')

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('burger--active')
  burgerMenu.classList.toggle('burger-nav--active')
})
