const getElement = document.querySelector.bind(document);
const getElements = document.querySelectorAll.bind(document);

const navPc = getElement('.navigation-pc');
const btnsText = getElements('.information-text-left h2');
const textItem = getElements('.information-text-right .item-text');
const btnsNavPc = getElements('.navigation-pc .nav-item');

function handleEvent() {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 184.8) {
            navPc.classList.add('fixed');
        } else {
            navPc.classList.remove('fixed');
        }
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

    btnsNavPc.forEach(btn => {
        btn.addEventListener('click', () => {
            getElement('.nav-item.active').classList.remove('active');
            btn.classList.add('active');
        })
    })

}

handleEvent();