// Бургер
(function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const body = document.querySelector('.body');
    if (document.documentElement.clientWidth > 900) return
    burgerIcon.addEventListener('click', () => {
        body.classList.toggle('body--opened-menu')
        window.scrollTo(0, 0)
    });
    const navList = document.querySelector('.nav__list');
    navList.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'A')
            body.classList.remove('body--opened-menu')
    });
})();

// ======================================================
// Модалка
(function () {
    const imgButton = document.querySelector('.about__img-button');
    const modal = document.querySelector('.modal');
    const body = document.querySelector('.body');
    const cancel = document.querySelector('.modal__cancel');
    const modalWindow = document.querySelector('.modal__window');
    const input = document.querySelector('.field__input');

    const openModal = () => {
        modal.classList.add('body--opened-modal')
        body.classList.add('body--fixed')
    }
    imgButton.addEventListener('click', openModal);

    const closeModal = () => {
        modal.classList.remove('body--opened-modal')
        body.classList.remove('body--fixed')
    }
    cancel.addEventListener('click', closeModal);

    modal.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('modal')) {
            closeModal()
        }
    });
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            closeModal()
        }
    });
    modalWindow.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON' && input.value.includes('@')) {
            closeModal()
        }
    });
})();
// ========================================================================
// Табы
(function () {
    const tabControls = document.querySelector('.tab-controls');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(event) {

        // убеждаемся что нажатие произведено именно на ссылку
        const tabControl = event.target.closest('.tab-controls__link')

        // если клик не на ссылку функция завершается
        if (!tabControl) return

        // отменяем дефолтное поведение ссылки
        event.preventDefault()

        // условие при котором в случае если ссылка активна функция завершается( если tabControl на который кликнули содержит в себе класс tab-controls__link--active)
        if (tabControl.classList.contains('tab-controls__link--active')) return


        // задаем переменную обращающуюся к атрибуту href ссылки
        const tabContentID = tabControl.getAttribute('href')

        // закрываем открытую вкладку .tab-content--show (по умолчанию этот класс должен стоять у одной из вкладок)
        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        // и открываем на её месте ту на которую произведен клик
        document.querySelector(tabContentID).classList.add('tab-content--show')

        // делаем подобное же со стилями ссылки (по умолчанию стили стоят у одной из ссылок)
        document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')

        tabControl.classList.add('tab-controls__link--active')
    }
})();

// =======================================================================
//  Аккордеон
(function () {
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', event => {

            const accordionOpenedItem = event.currentTarget.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = event.currentTarget.querySelector('.accordion-list__item--opened .accordion-list__content')


            const accordionControl = event.target.closest('.accordion-list__control')
            if (!accordionControl) return
            event.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });
})();

// Слайдер галлерея

(function () {
    new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            // when window width is >= 601px
            451: {
                slidesPerView: 2,
            },
            // when window width is >= 601px
            601: {
                slidesPerView: 3,
            },
            // when window width is >= 801px
            801: {
                spaceBetween: 32,
            },
            // when window width is >= 1101px
            1101: {
                slidesPerView: 4,
            },
        }
    });
})();

// Слайдер отзывы
(function () {
    const swiper = new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,


        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },

            1201: {
                slidesPerView: 2.1,
            },
        }
    });
})();
    // Маска для телефона
    (function () {
        const telInputs = document.querySelectorAll('input[type = "tel"]');
        const im = new Inputmask('+7 (999) 999-99-99');
        im.mask(telInputs);
    })();