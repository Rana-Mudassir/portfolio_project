// Mobile- Menu

const btn = document.querySelector('.main_btn');

function on() {
  document.getElementById('layer').style.display = 'block';
  document.body.style.overflowY = 'hidden';
}
btn.addEventListener('click', on);

// const btn2 = document.querySelector('style-li');

// function off() {
//   document.getElementById('layer').style.display = 'none';
//   document.body.style.overflowY = 'scroll';
// }

// btn2.addEventListener('click', off);

// Popop Modal

const body = document.getElementById('body');
const cardSection = document.getElementById('Portfolio');
const myModal = document.getElementById('myModal');
const cardTitle = document.getElementById('modal-title');
const cardImage = document.getElementById('modelImg');
const cardImage2 = document.getElementById('modelImg2');
const descModal = document.getElementById('modalDes');
const demo = document.getElementById('demoLink');
const githubSrc = document.getElementById('githubSrc');

const cardsObj = [
  {
    titleCard: 'Tonic',
    cardImage: 'images/img-1.png',
    cardImage2: 'images/tonic-1.png',
    descModal:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    demo: 'https://rana-mudassir.github.io/portfolio_project/',
    descCard:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    githubSrc: 'https://github.com/Rana-Mudassir/portfolio_project',
    langs: ['html', 'javascript', 'css'],
    experience: ['Canopy', 'Back End Dev', 2015],
  },
  {
    titleCard: 'Multi-Post Stories',
    cardImage: 'images/img-2.png',
    cardImage2: 'images/prf-2.png',
    descModal:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    demo: 'https://rana-mudassir.github.io/portfolio_project/',
    descCard:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    githubSrc: 'https://github.com/Rana-Mudassir/portfolio_project',
    langs: ['html', 'javascript', 'css'],
    experience: ['Canopy', 'Back End Dev', 2015],
  },
  {
    titleCard: 'Tonic',
    cardImage: 'images/img-3.png',
    cardImage2: 'images/fb-3.png',
    descModal:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    demo: 'https://rana-mudassir.github.io/portfolio_project/',
    descCard:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    githubSrc: 'https://github.com/Rana-Mudassir/portfolio_project',
    langs: ['html', 'javascript', 'css'],
    experience: ['Canopy', 'Back End Dev', 2015],
  },
  {
    titleCard: 'Multi-Post Stories',
    cardImage: 'images/img-4.png',
    cardImage2: 'images/un-4.png',
    descModal:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    demo: 'https://rana-mudassir.github.io/portfolio_project/',
    descCard:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    githubSrc: 'https://github.com/Rana-Mudassir/portfolio_project',
    langs: ['html', 'javascript', 'css'],
    experience: ['Canopy', 'Back End Dev', 2015],
  },
];

/*  eslint-disable no-return-assign */
// eslint-disable-next-line no-return-assign

