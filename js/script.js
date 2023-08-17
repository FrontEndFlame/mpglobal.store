document.addEventListener('DOMContentLoaded', function() {
  
// Скролл заголовков
var heroTitles = document.querySelectorAll('.hero-titles');
var rmContainer = document.getElementById('works');

heroTitles.forEach(function(title) {
  title.addEventListener('click', function() {
    rmContainer.style.opacity = '1';
    window.scrollTo({
      top: rmContainer.offsetTop,
      behavior: 'smooth' // Плавный переход
  });
  });
});


// Форма с заявкой
const showFormBtn = document.getElementsByClassName('show-form-btn');
const formContainer = document.getElementById('form');
const closeFormBtn = document.getElementById('close-form-btn');

for (let i = 0; i < showFormBtn.length; i++) {
  showFormBtn[i].addEventListener('click', () => {
    formContainer.style.display = 'block';
  });
}

closeFormBtn.addEventListener('click', () => {
  formContainer.style.display = 'none';
});

    
// Появление контента
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

var requestId = null;

function loop() {
  requestId = null;
  reveal();
  if (!requestId) {
    requestId = requestAnimationFrame(loop);
  }
}

window.addEventListener("load", function() {
  requestId = requestAnimationFrame(loop);
});


// Услуги
const items = document.querySelectorAll(".services__accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', toggleAccordion);
}


// Как мы помогли клиентам 
const helpedBtn1 = document.querySelector('#helped-button-1');
const helpedBtn2 = document.querySelector('#helped-button-2');
const helpedBtn3 = document.querySelector('#helped-button-3');
const helpedBtn4 = document.querySelector('#helped-button-4');
const helpedBtn5 = document.querySelector('#helped-button-5');
const helpedContent1 = document.querySelector('#helped__more-block-1');
const helpedContent2 = document.querySelector('#helped__more-block-2');
const helpedContent3 = document.querySelector('#helped__more-block-3');
const helpedContent4 = document.querySelector('#helped__more-block-4');
const helpedContent5 = document.querySelector('#helped__more-block-5');
const helpedBlocks = document.querySelectorAll('.helped__block');
const helpedContentContainer = document.querySelector('.helped__more');
const contents = document.querySelectorAll('.helped__more-content');

helpedBtn1.addEventListener('click', () => {
  showContent(helpedContent1);
  helpedBtn1.classList.add("helped__block-open");
  helpedBtn2.classList.remove("helped__block-open");
  helpedBtn3.classList.remove("helped__block-open");
  helpedBtn4.classList.remove("helped__block-open");
  helpedBtn5.classList.remove("helped__block-open");
});

helpedBtn2.addEventListener('click', () => {
  showContent(helpedContent2);
  helpedBtn1.classList.remove("helped__block-open");
  helpedBtn2.classList.add("helped__block-open");
  helpedBtn3.classList.remove("helped__block-open");
  helpedBtn4.classList.remove("helped__block-open");
  helpedBtn5.classList.remove("helped__block-open");
});

helpedBtn3.addEventListener('click', () => {
  showContent(helpedContent3);
  helpedBtn1.classList.remove("helped__block-open");
  helpedBtn2.classList.remove("helped__block-open");
  helpedBtn3.classList.add("helped__block-open");
  helpedBtn4.classList.remove("helped__block-open");
  helpedBtn5.classList.remove("helped__block-open");
});

helpedBtn4.addEventListener('click', () => {
  showContent(helpedContent4);
  helpedBtn1.classList.remove("helped__block-open");
  helpedBtn2.classList.remove("helped__block-open");
  helpedBtn3.classList.remove("helped__block-open");
  helpedBtn4.classList.add("helped__block-open");
  helpedBtn5.classList.remove("helped__block-open");
});

helpedBtn5.addEventListener('click', () => {
  showContent(helpedContent5);
  helpedBtn1.classList.remove("helped__block-open");
  helpedBtn2.classList.remove("helped__block-open");
  helpedBtn3.classList.remove("helped__block-open");
  helpedBtn4.classList.remove("helped__block-open");
  helpedBtn5.classList.add("helped__block-open");
});

function showContent(content) {
  helpedBlocks.forEach((block) => {
    block.classList.add("helped__block-open");
  });

  // Скрытие всех контентов
  contents.forEach((c) => {
    c.style.display = 'none';
  });
  
  // Показываем выбранный контент
  content.style.display = 'block';

  // Перемещение контейнера вверх-вниз
  const containerRect = helpedContentContainer.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();
  const contentHeight = content.offsetHeight;

  if (contentRect.y < containerRect.y) {
    helpedContentContainer.style.paddingTop = `${contentHeight}px`;
  } else {
    helpedContentContainer.style.paddingTop = '0';
  }
}



// Перезагрузка страницы при первом запуске
$(document).ready(function() {
  // Проверяем, была ли страница уже загружена ранее на этом устройстве
  if (localStorage.getItem('pageLoaded') === null) {
    // Если страница не была загружена ранее на этом устройстве, устанавливаем флаг в локальном хранилище
    localStorage.setItem('pageLoaded', 'true');
    
    // Запускаем таймер для перезагрузки через три секунды
    setTimeout(function() {
      location.reload();
    }, 300);
  }
});
});