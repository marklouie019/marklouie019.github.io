const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    var logo = document.getElementById('webLogo');

    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
        var navItems = document.getElementsByClassName('nav-item');
       
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].querySelector('.nav-link').style.color = 'white';
        }
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
        const navItems = document.getElementsByClassName('nav-item');

        for (let i = 0; i < navItems.length; i++) {
            navItems[i].querySelector('.nav-link').style.color = '';
        }
    }
});

function grayScaleEffect(id) {
    var image = document.getElementById(id);
    image.style.filter = 'grayscale(0%)';
    image.style.transition = ".5s ease";
    image.style.transform = "translateY(-2px)";
    image.style.cursor = 'pointer';

}

function noGrayScaleEffect(id) {
    var image = document.getElementById(id);
    image.style.filter = 'grayscale(100%)';
    image.style.transform = "translateY(2px)";

}

var seeMoreDesc = document.getElementById('seeMoreDesc');
var moreDesc = document.getElementById('moreDesc');

seeMoreDesc.addEventListener('click', function (event) {
    event.preventDefault(); 
    if (moreDesc.classList.contains('hiddenDesc')) {
        moreDesc.classList.remove('hiddenDesc');
        seeMoreDesc.textContent = 'See less';
    } else {
        moreDesc.classList.add('hiddenDesc');
        seeMoreDesc.textContent = 'See more';
    }
});

var mode = 'dark';

function setColorMode() {
    var root = document.documentElement;
    var btnSeeMore = document.getElementById('btnSeeMore');
    var logo = document.getElementById('webLogo');

    if (mode === 'dark') {
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');
        root.style.setProperty('--yellow', '#FFDD00');
        mode = 'light';
        isDarkMode = false; 
        
        logo.src = 'assets/img/logo-light.svg';
        btnSeeMore.style.color = 'black';

    } else {
        root.style.setProperty('--black', 'black');
        root.style.setProperty('--white', 'white');
        root.style.setProperty('--yellow', '#FFE500');
        mode = 'dark';
        isDarkMode = true;  
        logo.src = 'assets/img/logo-dark.svg';
        btnSeeMore.style.color = "white";
    }
}




