    var anchors = document.querySelectorAll('a[href*="#"]');
    var number = document.getElementById('phone');
    var call = document.querySelector('.page-header__link');
    var popup = document.querySelector('.popup');
    var popupToggle = document.querySelector('.popup__toggle');
    var siteList = document.querySelector('.sections-site__list');
    var siteListToggle = document.querySelector('.sections-site__toggle');
    var officeList = document.querySelector('.office__list');
    var officeToggle = document.querySelector('.office__toggle');
    var popupInputName = document.querySelector ('[name=name]');
    var popupInputPhone = document.querySelector ('[name=phone]');
    var popupInputMessage = document.querySelector ('[name=message]');
    var form = document.querySelector('.popup-form');
    var body = document.querySelector('body');
    var popupBackground = document.querySelector('.popup-background')

    form.addEventListener("submit", function () {
      localStorage.setItem("name", popupInputName.value);
      localStorage.setItem("phone", popupInputPhone.value);
      localStorage.setItem("message", popupInputMessage.value);
    });

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        var blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      })
    }

    call.addEventListener('click', function () {
      popup.classList.add('popup--active');
      popupBackground.classList.add('popup-background--active')
      popupInputName.focus();
    });

    siteListToggle.addEventListener('click', function () {
      if (siteListToggle.classList.contains('sections-site__toggle--closed')) {
        siteListToggle.classList.remove('sections-site__toggle--closed');
        siteList.classList.remove('sections-site__list--closed');
      } else {
        siteListToggle.classList.add('sections-site__toggle--closed');
        siteList.classList.add('sections-site__list--closed');
      }
    });

    officeToggle.addEventListener('click', function () {
      if (officeToggle.classList.contains('office__toggle--closed')) {
        officeToggle.classList.remove('office__toggle--closed');
        officeList.classList.remove('office__list--closed');
      } else {
        officeToggle.classList.add('office__toggle--closed');
        officeList.classList.add('office__list--closed');
      }
    });

       window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove('popup--active');
        popupBackground.classList.remove('popup-background--active');
      }
    });

    popupToggle.addEventListener('click', function () {
      popup.classList.remove('popup--active');
      popup.classList.add('popup--closed');
      popupBackground.classList.remove('popup-background--active')
    });

    jQuery(function($){
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var popup = $(".popup"); // тут указываем ID элемента
        var call = $(".page-header__link");
        var popupBackground = $(".popup-background");
        if (!popup.is(e.target)
            && !call.is(e.target) // если клик был не по нашему блоку
            && popup.has(e.target).length === 0) { // и не по его дочерним элементам
          popup.removeClass('popup--active'); // скрываем его
          popupBackground.removeClass('popup-background--active');
        }
      });
    });


