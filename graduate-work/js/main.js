// ==================================


// модальное окно hero-section

(function () {
    const form = document.querySelector('.form');
    const formButton = document.querySelector('.form__button');
    const modalOne = document.querySelector('.modal-one');
    const modalTwo = document.querySelector('.modal-two');
    const body = document.querySelector('.body');
    const cancel = document.querySelector('.modal__cancel');
    const cancelTwo = document.querySelector('.modal__cancel-two');
    const modalWindow = document.querySelector('.modal__window');
    const modalWindowTwo = document.querySelector('.modal__window-two');
    const nameInput = document.querySelector('.field__input');
    const phoneInput = document.querySelector('.contact__input');


    const openModalOne = () => {
        modalOne.classList.add('modal--open')
        body.classList.add('body--fixed')
    }
    const openModalTwo = () => {
        modalTwo.classList.add('modal--open')
        body.classList.add('body--fixed')
    }


    form.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON') {
            openModalOne()
        }
        if (event.target && event.target.tagName === 'BUTTON' && nameInput.value && phoneInput.value) {
            openModalTwo()
        }
    });


    const closeModal = () => {
        nameInput.value = '';
        phoneInput.value = '';
        modalTwo.classList.remove('modal--open')
        modalOne.classList.remove('modal--open')
        body.classList.remove('body--fixed')
        event.preventDefault()
    }


    cancel.addEventListener('click', closeModal);
    cancelTwo.addEventListener('click', closeModal);



    modalOne.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('modal-one')) {
            closeModal()
        }
    });
    modalTwo.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('modal-two')) {
            closeModal()
        }
    });
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            closeModal()
        }
    });

    modalWindow.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON') {
            closeModal()
        }
    });
    modalWindowTwo.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON') {
            closeModal()
        }
    });
})();
// ======================================================

// Показать больше информации hero-section

(function () {
    const extButton = document.querySelector('.extention__button');
    const textOne = document.querySelector('.extention__text-one');
    const textTwo = document.querySelector('.extention__text-two');
    const infoArrow = document.querySelector('.extention__svg');


    extButton.addEventListener('click', event => {
        if (event.target) {
            event.preventDefault()
            textOne.classList.toggle('extention__text-one--open')
            textTwo.classList.toggle('extention__text-two--open')
            infoArrow.classList.toggle('extention__svg--open')
        }
    });

    jQuery(($) => {
        if ($(window).width() < 700) {
            $('.hero__bottom').ready(function () {
                $(".hero__col-slide").slideUp();
                $(".extention__button").click(function () {
                    $(".hero__col-slide").slideToggle('slow');
                });
            });
        }
    });


})();

// ===============================================
// Слайдер номеров
(function () {
    const swiper = new Swiper('.rooms__slider', {

        // Navigation arrows
        navigation: {
            nextEl: '.sliders__next',
            prevEl: '.sliders__prev',
        },
    });
})();

// ==================================================
// Слайдер галереи
(function () {
    new Swiper('.gallery__slider', {
        spaceBetween: 10,
        slidesPerView: 1.2,
        // dynamicMainBullets: 1,
        // autoHeight: true,
        loop: true,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        autoplay: {
            delay: 5000,
        },

        breakpoints: {

            601: {
                slidesPerView: 2,
                spaceBetween: 15,
            },

            1000: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });
})();



// ============================================================
// модалное окно заявки на бронь

(function () {
    const bookingForm = document.querySelector('.booking__form');
    const modalOne = document.querySelector('.modal-one');
    const modalTwo = document.querySelector('.modal-two');
    const body = document.querySelector('.body');
    const cancel = document.querySelector('.modal__cancel');
    const cancelTwo = document.querySelector('.modal__cancel-two');
    const modalWindow = document.querySelector('.modal__window');
    const modalWindowTwo = document.querySelector('.modal__window-two');
    const nameInput = document.querySelector('.name');
    const phoneInput = document.querySelector('.phone');
    const dateInput = document.querySelector('.date');
    const nickInput = document.querySelector('.nick');


    const openModalOne = () => {
        modalOne.classList.add('modal--open')
        body.classList.add('body--fixed')
    }
    const openModalTwo = () => {
        modalTwo.classList.add('modal--open')
        body.classList.add('body--fixed')
    }


    bookingForm.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON') {
            openModalOne()
        }
        if (event.target && event.target.tagName === 'BUTTON' && nameInput.value && phoneInput.value && dateInput.value && nickInput.value) {
            openModalTwo()
        }
    });


    const closeModal = () => {
        nameInput.value = '';
        phoneInput.value = '';
        modalTwo.classList.remove('modal--open')
        modalOne.classList.remove('modal--open')
        body.classList.remove('body--fixed')
        event.preventDefault()
    }


    cancel.addEventListener('click', closeModal);
    cancelTwo.addEventListener('click', closeModal);



    modalOne.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('modal-one')) {
            closeModal()
        }
    });
    modalTwo.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('modal-two')) {
            closeModal()
        }
    });
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            closeModal()
        }
    });

    modalWindow.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON') {
            closeModal()
        }
    });
    modalWindowTwo.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON') {
            closeModal()
        }
    });
})();


// ==================================
// модальное окно виденаблюдения

(function () {
    const roomcams = document.querySelector('.roomcams');
    const modalThree = document.querySelector('.modal-three');
    const body = document.querySelector('.body');
    const cancel = document.querySelector('.modal__cancel-three');
    const submit = document.querySelector('.modal-three__submit');
    const exit = document.querySelector('.modal-three__exit');
    const inputModal = document.querySelector('.modal-three__input');
    const inputPass = document.querySelector('.modal-three__pass');


    const openModal = () => {
        modalThree.classList.add('modal--open')
        body.classList.add('body--fixed')
    }

    const cleanInput = () => {
        event.preventDefault()
        inputModal.value = '';
        inputPass.value = '';
    }



    roomcams.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'BUTTON' || event.target.tagName === 'SPAN') {
            event.preventDefault()
            openModal()

        }
    });




    const closeModal = () => {
        modalThree.classList.remove('modal--open')
        body.classList.remove('body--fixed')
        event.preventDefault()
    }


    cancel.addEventListener('click', closeModal);
    exit.addEventListener('click', closeModal);
    submit.addEventListener('click', cleanInput);


    modalThree.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('modal-three')) {
            closeModal()
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            closeModal()
        }
    });
})();
// ======================================================
// Показать больше информации видеонаблюдение адаптив

(function () {
    const roomButton = document.querySelector('.roomcams__btn');
    const roomTextOne = document.querySelector('.roomcams__text-one');
    const roomTextTwo = document.querySelector('.roomcams__text-two');
    const infoArrow = document.querySelector('.roomcams__svg');


    roomButton.addEventListener('click', event => {
        if (event.target) {
            event.preventDefault()
            roomTextOne.classList.toggle('roomcams__text-one--open')
            roomTextTwo.classList.toggle('roomcams__text-two--open')
            infoArrow.classList.toggle('roomcams__svg--open')
        }
    });
    

    jQuery(($) => {
        if ($(window).width() < 401) {
            $('.roomcams__numbers').ready(function () {
                $(".roomcams__slide").slideUp();
                $(".roomcams__btn").click(function () {
                    $(".roomcams__slide").slideToggle('1000');
                });
            });
        }
    });


})();

// ======================================================

// Показать больше информации о нас

(function () {
    const aboutButton = document.querySelector('.about__button');
    const aboutTextOne = document.querySelector('.about__text-one');
    const aboutTextTwo = document.querySelector('.about__text-two');
    const infoArrow = document.querySelector('.about__svg');


    aboutButton.addEventListener('click', event => {
        if (event.target) {
            event.preventDefault()
            aboutTextOne.classList.toggle('about__text-one--open')
            aboutTextTwo.classList.toggle('about__text-two--open')
            infoArrow.classList.toggle('about__svg--open')
        }
    });
    // .about__slide
    jQuery(($) => {
        if ($(window).width() < 601) {
            $('.about__numbers').ready(function () {
                $(".about__paragraph").slideUp();
                $(".about__button").click(function () {
                    $(".about__paragraph").slideToggle('1000');
                });
            });
        }
    });


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

// ======================================================
// Копирование ссылки по клику
(function () {
    const locLink = document.querySelector('.location__link');
    const locNav = document.querySelector('.location__nav');


    document.querySelector(".location__link").addEventListener("click", function () {
        navigator.clipboard.writeText(document.querySelector(".location__nav").innerText).then(function () {
            alert('Ссылка скопирована в буфер обмена');
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
})();


// ============================================
// Появление иконки бургера при скролле

(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 700) {
            $('.burger-icon').css('visibility', 'visible').css('opacity', '1');
        } else { //если меньше чем на 100px
            $('.burger-icon').css('visibility', 'hidden').css('opacity', '1');
        }
    });
})();
// ======================================================

// Бургер
(function () {
    const burgerIcon = document.querySelector('.burger-icon');

    const body = document.querySelector('.body');
    burgerIcon.addEventListener('click', () => {
        body.classList.toggle('body--opened-menu')
        // event.preventDefault()
    });
    const navList = document.querySelector('.burger-nav__list');
    navList.addEventListener('click', event => {
        
            body.classList.remove('body--opened-menu')
    });
})();

// ======================================================



// ============================================

// инпут телефона
(function () {
    const telInputs = document.querySelectorAll('input[type = "tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);
    telInputs.target(element => {
        element.style.transition = 2
    })
})();
