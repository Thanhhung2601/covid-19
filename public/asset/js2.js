const getElement = document.querySelector.bind(document);
const getElements = document.querySelectorAll.bind(document);

const navPc = getElement('.navigation-pc');
const btnsText = getElements('.information-text-left h2');
const textItem = getElements('.information-text-right .item-text');
const btnsNavPc = getElements('.navigation-pc .nav-item');
const sections = getElements('section');
const btnHome = getElement('.home');
const darkMode = getElement('.darkmode-btn .label');


function handleEvent() {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 184.8) {
            navPc.classList.add('fixed');

        } else {
            navPc.classList.remove('fixed');

        }
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset > (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        })
        btnsNavPc.forEach(btn => {
            btn.classList.remove('active')
            if (btn.classList.contains(current)) {
                btn.classList.add('active')
            }
        })
    })

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
    })

}

handleEvent();