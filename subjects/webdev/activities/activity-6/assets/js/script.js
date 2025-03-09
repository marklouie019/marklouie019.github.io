var isDarkMode = true;
var primaryColor;
var secondaryColor;

var accentColor = '#FFE500';

if (isDarkMode) {
    primaryColor = 'black';
    secondaryColor = 'white';
} else {
    primaryColor = 'white';
    secondaryColor = 'black';
}

var images = [
    'impression-sunrise.jpg',
    'weeping-woman.jpg',
    'san-giorgio.jpg',
    'school-of-athens.jpg',
    'the-creation-of-adam.jpg',
    'starry-night.jpg',
];

var names = [
    'Impression Sunrise',
    'Weeping Woman',
    'San Giorgio',
    'School of Athens',
    'The Creation of Adam',
    'Starry Night'
];

for (var i = 0; i < images.length; i++) {
    var fineArtsContainer = document.getElementById("fineArtsGallery");
    fineArtsContainer.innerHTML += `
        <div class="col-lg-4 col-sm-6">
            <div class="thumbnail" id="img${i}" onmouseenter="grayScaleEffect('img${i}')" onmouseleave="noGrayScaleEffect('img${i}')">
                <div class="img-container">
                    <img src="assets/img/${images[i]}" class="image" alt="${names[i]}">
                    <div class="overlay">
                        <p class="caption">${names[i]}</p>
                    </div>
                </div>
            </div>
        </div>`;
}

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

var navEl = document.querySelector('.navbar');
var btnColorMode = document.getElementById('btnColorMode');

window.addEventListener('scroll', () => {

    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');

        navEl.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');

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




