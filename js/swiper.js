document.addEventListener('DOMContentLoaded', function() {

  const heroSider = new Swiper('.hero__swiper', {
    direction: 'vertical',
    loop: true,
    spaceBetween: 25,
    autoplay: {
      delay: 1000, // Задержка перед автопрокруткой в миллисекундах
      disableOnInteraction: false // Продолжать автопрокрутку после взаимодействия пользователя с слайдером
    }
  });



  const subSlider = new Swiper('.sub__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 150,
    parallax: true,
    speed: 500
  });

  const subBtn1 = document.querySelector('#sub-nav-li-1');
  const subBtn2 = document.querySelector('#sub-nav-li-2');
  const subBtn3 = document.querySelector('#sub-nav-li-3');
  const subBtn4 = document.querySelector('#sub-nav-li-4');
  const subBtns = document.querySelectorAll('.sub-nav-list li');
  const subLineA = document.querySelector('.sub-nav-line-a');
  const subLineB = document.querySelector('.sub-nav-line-b');
  const subContainer = document.querySelector('.sub__container');
  
  subBtn1.addEventListener('click', () => {
    subBtn1.classList.add("active");
    subBtn2.classList.remove("active");
    subBtn3.classList.remove("active");
    subBtn4.classList.remove("active");
    subSlider.slideTo(0);
  });

  subBtn2.addEventListener('click', () => {
    subBtn1.classList.remove("active");
    subBtn2.classList.add("active");
    subBtn3.classList.remove("active");
    subBtn4.classList.remove("active");
    subSlider.slideTo(1);
  });

  subBtn3.addEventListener('click', () => {
    subBtn1.classList.remove("active");
    subBtn2.classList.remove("active");
    subBtn3.classList.add("active");
    subBtn4.classList.remove("active");
    subSlider.slideTo(2);
  });

  subBtn4.addEventListener('click', () => {
    subBtn1.classList.remove("active");
    subBtn2.classList.remove("active");
    subBtn3.classList.remove("active");
    subBtn4.classList.add("active");
    subSlider.slideTo(3);
  });
  
  subBtns.forEach(item => {
    const subLineBWidth = item.offsetWidth;
    subLineB.style.width = `${subLineBWidth}px`;

    item.addEventListener('mouseenter', () => {
      const itemLeft = item.getBoundingClientRect().left;
      const itemWidth = item.offsetWidth;
          
      subLineA.style.left = `${itemLeft}px`;
      subLineA.style.width = `${itemWidth}px`;
      subLineA.style.opacity = '1';
    });
    item.addEventListener('mouseleave', () => {
      subLineA.style.opacity = '0';
    });
    item.addEventListener('click', () => {
      const itemLeft = item.getBoundingClientRect().left;
      subLineB.style.left = `${itemLeft}px`;
    });
  });

  const cargoSlider = new Swiper('.helped-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      670: {
        slidesPerView: 3
      }
    },
    spaceBetween: 34,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: -20,
      slideShadows: false,
    },
  });

  var helpedSliderContainer = document.querySelector('.helped .swiper-wrapper');
  helpedSliderContainer.addEventListener('click', function(event) {
    var btn = event.target.closest('.helped-button');
    if (btn) {
      var slidePrev = btn.closest('.swiper-slide-prev');
      var slideCenter = btn.closest('.swiper-slide-active');
      var slideNext = btn.closest('.swiper-slide-next');
      var prevSlide = slidePrev ? slidePrev.previousElementSibling : null;
      var nextSlide = slideNext ? slideNext.nextElementSibling : null;
      if (nextSlide) {
        cargoSlider.slideNext(); // Переход к предыдущему слайду
      } else if (prevSlide) {
        cargoSlider.slidePrev();
      }
      if (!slideCenter) {
        setTimeout(function() {
          cargoSlider.slideNext();
        }, 100);
      }
    }
  });

});