const themeToggler = document.getElementById('theme-toggler');
const togglerCircle = document.getElementById('theme-circle');
const togglerLabel = document.getElementById('theme-toggler-label');
const cards = document.getElementById('cards');

// Managing Theme
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark');
  themeToggler.checked = true;
} else {
  themeToggler.checked = false;
}

if (themeToggler.checked) {
  togglerCircle.classList.add('translate-x-6');
  togglerLabel.style.backgroundColor = '#CACFFF';
}

themeToggler.addEventListener('change', () => {
  togglerCircle.classList.toggle('translate-x-6');

  if (themeToggler.checked) {
    togglerLabel.style.backgroundColor = '#CACFFF';
    document.querySelector('html').classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    togglerLabel.style.backgroundColor = '#FFFFFF';
    document.querySelector('html').classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Storing card info
const jobCards = [
  {
    company: 'So Digital Inc.',
    logo: '../assets/company-logos/so-digital.svg',
    postingTime: '5h ago',
    type: 'Full Time',
    title: 'Senior Software Engineer',
    locations: 'Remote, Seoul, Tokyo, Mountain View, San Francisco',
  },
  {
    company: 'National Wildlife',
    logo: '../assets/company-logos/national-wildlife.svg',
    postingTime: '20h ago',
    type: 'Part Time',
    title: 'Haskell and PureScript Dev',
    locations: 'Columbus, OH',
  },
  {
    company: 'Photosnap Ltd.',
    logo: '../assets/company-logos/photosnap.svg',
    postingTime: '1d ago',
    type: 'Part Time',
    title: 'Midlevel Back End Engineer',
    locations: 'Russia',
  },
  {
    company: 'Extreme Division',
    logo: '../assets/company-logos/extreme-division.svg',
    postingTime: '2d ago',
    type: 'Full Time',
    title: 'Senior Application Engineer',
    locations: 'Anywhere',
  },
  {
    company: 'Multifold',
    logo: '../assets/company-logos/multifold.svg',
    postingTime: '2d ago',
    type: 'Part Time',
    title: 'Remote Devops Engineer',
    locations: 'Berlin',
  },
  {
    company: 'Hardsoft Computing',
    logo: '../assets/company-logos/hardsoft-computing.svg',
    postingTime: '4d ago',
    type: 'Part Time',
    title: 'Desktop Support Manager',
    locations: 'Columbus, OH',
  },
  {
    company: 'Blocksoft',
    logo: '../assets/company-logos/blocksoft.svg',
    postingTime: '1w ago',
    type: 'Full Time',
    title: 'iOS Engineer',
    locations: 'Columbus, OH',
  },
  {
    company: 'Color Logic',
    logo: '../assets/company-logos/color-logic.svg',
    postingTime: '1w ago',
    type: 'Full Time',
    title: 'Senior EJB Engineer',
    locations: 'Toronto, Ontario - Remote',
  },
  {
    company: 'Outerwest International',
    logo: '../assets/company-logos/outerwest-international.svg',
    postingTime: '1w ago',
    type: 'Part Time',
    title: 'Senior Software Engineer',
    locations: 'Sofia, Bulgaria',
  },
  {
    company: 'Almost Yellow',
    logo: '../assets/company-logos/almost-yellow.svg',
    postingTime: '2w ago',
    type: 'Full Time',
    title: 'App and Website Designer',
    locations: 'Dallas, Tx or Scottsdale, Az',
  },
  {
    company: 'Density',
    logo: '../assets/company-logos/density.svg',
    postingTime: '1mo ago',
    type: 'Part Time',
    title: 'Fullstack Developer',
    locations: 'Remote, New York',
  },
  {
    company: 'Synoid Inc.',
    logo: '../assets/company-logos/synoid-inc.svg',
    postingTime: '4d ago',
    type: 'Part Time',
    title: 'Technical Lead Engineer',
    locations: 'Remote, New York',
  },
];

// Injecting the cards
jobCards.forEach(card => {
  const currentCard = document.createElement('div');
  currentCard.classList.add('job-card');
  currentCard.innerHTML = `
      <img
        src="${card.logo}"
        alt="${card.company} logo"
        class="company-image"
      />

      <div class="job-details">
        <span class="mr-3">${card.postingTime}</span>
        <div class="circle"></div>
        <span class="ml-3">${card.type}</span>
      </div>

      <header class="job-title">${card.title}</header>

      <div class="company-name">${card.company}</div>

      <div class="job-locations">
        ${card.locations}
      </div>
    `;

  cards.appendChild(currentCard);
});
