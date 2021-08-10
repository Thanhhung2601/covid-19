const getElement = document.querySelector.bind(document);
const getElements = document.querySelectorAll.bind(document);

const navPc = getElement('.navigation-pc');
const btnsText = getElements('.information-text-left h2');
const textItem = getElements('.information-text-right .item-text');
const btnsNavPc = getElements('.navigation-pc .nav-item');
const sections = getElements('section');
const btnHome = getElement('.home');
const darkMode = getElement('.darkmode-btn .label');
const header = getElement('.header');
const iconBars = getElement('.icon-bars');
const overlay = getElement('.overlay');
const navMb = getElement('.navigation-mb');
const iconTimes = getElement('.icon-times');
const iconSearch = getElement('.search-location');
const formCovid = getElement('.form-covid');
const formSubmit = getElement('.form-covid form');
const timesForm = getElement('.form-covid>i');
const render_ = getElement('.render');

const searchInput = getElement('.form-covid .form input');

function handleEvents() {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 120) {
            navPc.classList.add('fixed');

        } else {
            navPc.classList.remove('fixed');


        }
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset > (sectionTop - sectionHeight / 6)) {
                current = section.getAttribute('id');
            }
        })
        btnsNavPc.forEach(btn => {
            btn.classList.remove('active')
            if (btn.classList.contains(current)) {
                btn.classList.add('active');
            }
        })
    });

    btnsText.forEach((item, index) => {
        const content = textItem[index]
        item.addEventListener('click', () => {
            getElement('.item-text.active').classList.remove('active');
            getElement('h2.active').classList.remove('active');
            item.classList.add('active');
            content.classList.add('active');
        })
    });

    darkMode.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');

        getElements('.inverted').forEach(item => {
            item.classList.toggle('invert')
        })

    });

    iconBars.addEventListener('click', () => {
        navMb.classList.add('active');
        overlay.classList.add('active');

    });

    iconTimes.addEventListener('click', () => {
        navMb.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        navMb.classList.remove('active');
        formCovid.classList.remove('active');
    });

    iconSearch.addEventListener('click', () => {
        formCovid.classList.add('active');
        overlay.classList.add('active');
    });

    timesForm.addEventListener('click', () => {
        formCovid.classList.remove('active');
        overlay.classList.remove('active');
    });

    formSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        render_.innerHTML = '<p class="loading">Loading . . .</p>'
        const location = searchInput.value;
        getApi(location, render)
    })
}


function getApi(location, data) {
    const apiCovid = `https://api.covid19api.com/live/country/${location}`;

    fetch(apiCovid)
        .then((response) => {
            return response.json()
        })
        .then(data)
}

function render(data) {
    const currentDay = data[data.length - 1];
    const html = `
    <h2>Country: ${currentDay.Country} </h2>
    <p>Confirmed : ${currentDay.Confirmed} cases <i class="fas fa-virus change-vr"></i></p>
    <p>Deaths : ${currentDay.Deaths} </p>
    <p>Date : ${currentDay.Date.slice(0,10)}</p>
    `
    render_.innerHTML = html;
    console.log(currentDay)
}

handleEvents();