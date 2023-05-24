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

$('#owl-works').owlCarousel({
    loop: true,
    dots: false,
    items: 3,
    margin: 10,
});
$('#owl-reviews').owlCarousel({
    loop: true,
    dots: false,
    items: 3,
    margin: 20,
});

// Favorites

const showMoreText = document.getElementById('favorites__cards-card-button-more');
const expandButtons = document.querySelectorAll('#favorites__cards-card-button-more');

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
      console.log(true)
      categoryTech.style.display = 'block';
      categoryView.style.display = 'none';
      buttonView.classList.remove('btn-blue-main');
      buttonView.classList.add('btn-white-main');
      buttonTech.classList.remove('btn-white-main')
      buttonTech.classList.add('btn-blue-main')
    }
  })
});



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

document.addEventListener('DOMContentLoaded', function() {
  const word1 = document.querySelector('.word-1');
  const word2 = document.querySelector('.word-2');
  const word3 = document.querySelector('.word-3')
  word1.style.zInex = 

  word1.addEventListener('mouseover', function() {
    word1.classList.add('move-2');
    word2.classList.add('move-2');
    word3.classList.add('move-2');
    word2.removeEventListener('mouseover');
    word3.removeEventListener('mouseover');
  })
  word1.addEventListener('mouseout', function() {
    word1.classList.remove('move-2');
    word2.classList.remove('move-2');
    word3.classList.remove('move-2');
  })

  word2.addEventListener('mouseover', function() {
      word1.classList.add('move-1');
      word2.classList.add('move-1');
      word3.classList.add('move-1');
      word1.removeEventListener('mouseover');
      word3.removeEventListener('mouseover');
  });
  word2.addEventListener('mouseout', function() {
      word1.classList.remove('move-1');
      word2.classList.remove('move-1');
      word3.classList.remove('move-1');
  });

  word3.addEventListener('mouseover', function() {
      word1.classList.add('move-3');
      word2.classList.add('move-3');
      word3.classList.add('move-3');
      word1.removeEventListener('mouseover');
      word3.removeEventListener('mouseover');
  })
  word3.addEventListener('mouseout', function() {
    word1.classList.remove('move-3');
    word2.classList.remove('move-3');
    word3.classList.remove('move-3');
  })


  
});

