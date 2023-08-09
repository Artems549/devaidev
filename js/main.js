// Smooth scrolling

const linksGet = document.querySelectorAll('a[href^="#"]');

linksGet.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const linkScrool = this.getAttribute('href');

    document.querySelector(linkScrool).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Location

fetch('./json/tz-cities-to-countries.json')
.then(response => response.json())
.then(data => {

var userCountry;
var userTimeZone;

if(Intl) {
  userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var tzArr = userTimeZone.split('/');
  userCity = tzArr[tzArr.length - 1];
  userCountry = data[userCity];
  // console.log('Country: ' + userCountry)
}
})

// Works carousel

$('#owl-works').owlCarousel({
    loop: true,
    dots: false,
    items: 3,
    margin: 10,
    nav: true,
    responsive:{
      0:{
          items:1
      },
      420:{
        items:2,
      },
      768:{
          items:2
      },
      960:{
        items:3,
      }
    }
});

// Reviews carousel

$('#owl-reviews').owlCarousel({
    loop: true,
    dots: false,
    items: 3,
    margin: 20,
    nav: true,
    responsive:{
      0:{
          items:1
      },
      420:{
        items:2,
      },
      768:{
          items:2
      },
      960:{
        items: 3,
      }
    }
});

// Setting navigation arrow

const owlButtonPrev = document.querySelectorAll('.owl-carousel .owl-nav button:nth-child(1)');
const owlButtonNext = document.querySelectorAll('.owl-carousel .owl-nav button:nth-child(2)');
for(let i = 0; i < owlButtonPrev.length; i++) {
  owlButtonPrev[i].innerHTML = "Назад";
  owlButtonPrev[i].className = "btn-white-main";
  owlButtonNext[i].innerHTML = "Вперед";
  owlButtonNext[i].className = "btn-white-main"
}

// Favorites

const expandButtons = document.querySelectorAll('.favorites__cards-card-button-more');

for (var i = 0; i < expandButtons.length; i++) {
  expandButtons[i].addEventListener('click', function () {
    var card = this.closest('.favorites__cards-card');
    var textElement = card.querySelector('.favorites__cards-card-text');

    textElement.classList.toggle('expand');
    if (textElement.classList.contains('expand')) {
      this.textContent = 'Скрыть описание';
    } else {
      this.textContent = 'Раскрыть описание';
    }
  });
}

function copyLink(button) {
  var link = button.getAttribute("data-link");
  var tempInput = document.createElement("input");

  tempInput.setAttribute("value", link);
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// All works
let windowWidth = window.innerWidth;
if(windowWidth >= 491 && windowWidth <= 5000) {
  document.addEventListener('DOMContentLoaded', function() {
    const buttonView = document.querySelector('.all-works__category-view-btn');
    const buttonTech = document.querySelector('.all-works__category-tech-btn');
    const categoryView = document.querySelector('.all-works__category-view');
    const categoryTech = document.querySelector('.all-works__category-technical');
    buttonView.addEventListener('click', function() {
      if(categoryView.style.display !== 'block') {
        categoryView.style.display = 'block';
        categoryTech.style.display = 'none';
        buttonView.classList.remove('btn-white-main');
        buttonView.classList.add('btn-blue-main');
        buttonTech.classList.remove('btn-blue-main');
        buttonTech.classList.add('btn-white-main')
      }
    })
    buttonTech.addEventListener('click', function() {
      if(categoryTech.style.display !== 'block') {
        categoryTech.style.display = 'block';
        categoryView.style.display = 'none';
        buttonView.classList.remove('btn-blue-main');
        buttonView.classList.add('btn-white-main');
        buttonTech.classList.remove('btn-white-main')
        buttonTech.classList.add('btn-blue-main')
      }
    })
  });
} else {
  let selectBtn = document.querySelector('.all-works__category-adapt-btn');
  let ulMain = document.querySelector('.all-works__category-adapt-items');
  let btnViewAdap = document.querySelector('.all-works__category-adapt-items-item:nth-child(1)')
  let btnTechAdap = document.querySelector('.all-works__category-adapt-items-item:nth-child(2)')
  let categoryViewAdap = document.querySelector('.all-works__category-view');
  let categoryTechAdap = document.querySelector('.all-works__category-technical');
  let allWorksWind = document.querySelector('.all-works');
  

  selectBtn.addEventListener('click', function() {
    ulMain.classList.toggle('add')
  })
  btnViewAdap.addEventListener('click', function() {
    ulMain.classList.remove('add')
    selectBtn.innerHTML = 'По видам работ';
    if(categoryViewAdap.style.display !== 'block') {
      categoryTechAdap.style.display = 'none';
      categoryViewAdap.style.display = 'block';
    }
  })
  btnTechAdap.addEventListener('click', function() {
    ulMain.classList.remove('add')
    selectBtn.innerHTML = 'По техническому';
    if(categoryTechAdap.style.display !== 'block') {
      categoryTechAdap.style.display = 'block';
      categoryViewAdap.style.display = 'none';
    }
  })
  }

// How create

const switchInput = document.getElementById('how-create__switch');
const cardTextBlocks = document.querySelectorAll('.how-create__cards-card-text');
const easyWord = document.getElementById('how-create__title-just');

function toggleCardText() {
  cardTextBlocks.forEach((block) => {
    if (switchInput.checked) {
        easyWord.innerHTML = 'подробно';
      block.classList.add('expand');
    } else {
        easyWord.innerHTML = 'просто';
      block.classList.remove('expand');
    }
  });
}
switchInput.addEventListener('change', toggleCardText);
function toggleCheckbox() {
    switchInput.checked = !switchInput.checked;
    toggleCardText();
  }
toggleCardText();


// Animation

const word1 = document.querySelector('.word-1');
const word2 = document.querySelector('.word-2');
const word3 = document.querySelector('.word-3');
const wordContainer = document.querySelector('.animation__pseudo');

let wordCount = 1;
function mouseOverClass() {
  if(wordCount === 1) {
    wordCount = 2;
    firstPart()
  } else if(wordCount === 2) {
    wordCount = 3
    secondPart();
  } else if(wordCount === 3) {
    wordCount = 1;
    thirdPart();
  }
}
function firstPart() {
  word1.classList.add('move-1');
  word2.classList.add('move-1');
  word3.classList.add('move-1');
}
function secondPart() {
  word1.classList.add('move-2');
  word2.classList.add('move-2');
  word3.classList.add('move-2');
}
function thirdPart() {
  word1.classList.add('move-3');
  word2.classList.add('move-3');
  word3.classList.add('move-3');
}
function removeClass() {
  word2.classList.remove('move-1', 'move-2', 'move-3');
  word3.classList.remove('move-1', 'move-2', 'move-3');
  word1.classList.remove('move-1', 'move-2', 'move-3');
}
wordContainer.addEventListener('mouseover', mouseOverClass)
wordContainer.addEventListener('mouseout', removeClass)

// Burger menu

const navMenu = document.getElementById('nav')
const menuBtn = document.querySelector('.header__nav-menu')
const menuBtnText = document.querySelector('.header__nav-menu-button button')
const menuClose = document.querySelector('.header__nav-close');
const menuItem = document.querySelectorAll('#nav ul li');
const changeColor = document.querySelector('.company-dev__change-color')


menuBtn.addEventListener('click', function() {
  if(navMenu.style.opacity !== 1) {
    navMenu.classList.add('active');
    changeColor.style.opacity = 1;
  }
})
menuClose.addEventListener('click', function() {
  if(navMenu.style.opacity !== 0) {
    navMenu.classList.remove('active')
    changeColor.style.opacity = 0;
  }
})
menuItem.forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
    navMenu.classList.remove('active')
    changeColor.style.opacity = 0;
  })
})


// Hide text in menu

if(windowWidth < 321) {
  menuBtnText.innerHTML = ''
}

// Open modal

const buttonOpen = document.querySelectorAll('.btn-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

buttonOpen.forEach(function(element) {
  element.addEventListener('click', function() {
    modal.style.display = 'flex';
    overlay.style.display = 'block'
  })
})
modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
  overlay.style.display = 'none'
})

overlay.addEventListener('click', function() {
  modal.style.display = 'none';
  overlay.style.display = 'none'
})

// Form validate

const form = document.getElementById('modal__form-items')
const nameError = document.querySelector('.form__name-error');
const namePlace = document.querySelector('.modal__form-items-item:nth-child(1) input')
const emailError = document.querySelector('.form__email-error');
const emailPlace = document.querySelector('.modal__form-items-item:nth-child(2) input')
const checkboxLabel = document.querySelector('.label__agreement');
const checkboxInput = document.querySelector('.agreement');

form.addEventListener('submit', formSend)

function formSend(e) {
  e.preventDefault()
  let errorValidate = formValidate(form);
  let formData = new FormData(form)

  if(errorValidate === 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll('.req')
  formRemoveError()

  for(let i = 0; i < formReq.length; i++) {
    let input = formReq[i];
    if(input.classList.contains('name') && input.value === '') {
      namePlace.classList.add('error');
      nameError.style.display = 'block';
      error++
    } else if(input.classList.contains('email') && emailTest(input) === false) {
        emailPlace.classList.add('error');
        emailError.style.display = 'block';
        error++;
      } else if (input.classList.contains('agreement') && input.checked === false) {
          checkboxLabel.classList.add('error');
          error++;
        }
  }
  return error;
}
function formRemoveError() {
  checkboxLabel.classList.remove('error')
  emailPlace.classList.remove('error')
  namePlace.classList.remove('error');
  emailError.style.display = 'none';
  nameError.style.display = 'none';
}
function emailTest(input) {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(input.value);
}