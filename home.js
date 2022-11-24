const speakers = [
  {
    speakerName: 'Susan Taslimi',
    speakerTitle: 'Actress',
    speakerDescription:
      'Susan Taslimi is an Iranian actress, film director, theatre director, and screenwriter. She emigrated from Iran in 1987, now living and working in Sweden.',
    speakerPic: './assets/01.jpg',
  },
  {
    speakerName: 'Mohammad Rasoulof',
    speakerTitle: 'Filmmaker',
    speakerDescription:
      "Mohammad Rasoulof is an Iranian independent filmmaker. He is known for several award-winning films, including his first, The Twilight; Iron Island; Manuscripts Don't Burn and There Is No Evil.",
    speakerPic: './assets/02.jpg',
  },
  {
    speakerName: 'Shohreh Aghdashloo',
    speakerTitle: 'Actress',
    speakerDescription:
      'Shohreh Aghdashloo is an Iranian and American actress. Following numerous starring roles on the stage, she made her film debut in Chess of the Wind.',
    speakerPic: './assets/03.jpg',
  },
  {
    speakerName: 'Asghar Farhadi',
    speakerTitle: 'Director',
    speakerDescription:
      'Asghar Farhadi is an Iranian film director and screenwriter. He has received critical acclaim for his international films which focus on the human condition as well as portray intimate and challenging stories of internal family conflicts.',
    speakerPic: './assets/04.jpg',
  },
  {
    speakerName: 'Jafar Panahi',
    speakerTitle: 'Director',
    speakerDescription:
      'Jafar Panahi is an Iranian film director, screenwriter, and film editor, commonly associated with the Iranian New Wave film movement.',
    speakerPic: './assets/05.jpg',
  },
  {
    speakerName: 'Golshifteh Farahani',
    speakerTitle: 'Actress',
    speakerDescription:
      'Golshifteh Farahani is an Iranian actress. She is known for her performances in M for Mother, Body of Lies, About Elly, The Patience Stone, Paterson, Girls of the Sun, and Extraction.',
    speakerPic: './assets/06.jpg',
  },
];

const speakersSection = document.getElementById('news');
const speakerH3 = document.createElement('h3');
speakerH3.className = 'main-program-title';
speakerH3.innerText = 'Featured Speakers';
const speakerHr = document.createElement('hr');
speakerHr.className = 'speakers-line';
const speakerUl = document.createElement('ul');
speakerUl.className = 'speakers-box';
speakersSection.append(speakerH3, speakerHr, speakerUl);
for (let index = 0; index <= 5; index += 1) {
  const speakerLi = document.createElement('li');
  if (index > 1) {
    speakerLi.className = 'desktop-only';
  }
  speakerUl.appendChild(speakerLi);
  const speakerArticle = document.createElement('article');
  speakerLi.appendChild(speakerArticle);
  const speakerUlParts = document.createElement('ul');
  speakerUlParts.className = 'speaker-parts';
  speakerArticle.appendChild(speakerUlParts);
  const speakerImgLi = document.createElement('li');
  speakerImgLi.className = 'speaker-img';
  speakerUlParts.appendChild(speakerImgLi);
  const speakerImg = document.createElement('img');
  speakerImg.className = 'speaker-pic';
  speakerImg.src = speakers[index].speakerPic;
  speakerImg.alt = 'speaker';
  speakerImgLi.appendChild(speakerImg);
  const speakerTextBoxLi = document.createElement('li');
  speakerTextBoxLi.className = 'speaker-text-box';
  speakerUlParts.appendChild(speakerTextBoxLi);

  const speakerUlDetails = document.createElement('ul');
  speakerUlDetails.className = 'speaker-details';
  speakerTextBoxLi.appendChild(speakerUlDetails);

  const speakerNameLi = document.createElement('li');
  speakerNameLi.className = 'speaker-name';
  speakerUlDetails.appendChild(speakerNameLi);
  speakerNameLi.innerText = speakers[index].speakerName;

  const speakerTitleLi = document.createElement('li');
  speakerTitleLi.className = 'speaker-title';
  speakerUlDetails.appendChild(speakerTitleLi);
  speakerTitleLi.innerText = speakers[index].speakerTitle;

  const speakerLine = document.createElement('hr');
  speakerLine.className = 'speaker-line';
  speakerUlDetails.appendChild(speakerLine);
  //   speakerTitleLi.innerText = speakers[index].speakerTitle;

  const speakerDescriptionLi = document.createElement('li');
  speakerDescriptionLi.className = 'speaker-description';
  speakerUlDetails.appendChild(speakerDescriptionLi);
  speakerDescriptionLi.innerText = speakers[index].speakerDescription;
}

const btnMore = document.createElement('button');
btnMore.innerText = 'More';
btnMore.className = 'btn-more';
speakersSection.append(btnMore);

function hideMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.grid-container').style.filter = '';
}

function showMobileMenu() {
  document.querySelector('.mobile-menu').style.display = 'block';
  document.querySelector('.grid-container').style.filter = 'blur(5px)';
}

const ham = document.getElementById('ham');
const x = document.getElementById('x');
ham.addEventListener('click', showMobileMenu());
x.addEventListener('click', hideMobileMenu());
