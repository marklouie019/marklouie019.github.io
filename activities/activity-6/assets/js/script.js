var isDarkMode = true;
var bgColor;
var textColor;
var accentColor = '#FFE500';

if(isDarkMode){
    bgColor = 'black';
    textColor = 'white';
} else{
    bgColor = 'white';
    textColor = 'black';
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
    image.style.filter = 'grayscale(100%)';
    image.style.transition = ".5s ease";
    image.style.transform = "translateY(-2px)";
    image.style.cursor = 'pointer';
    
}

function noGrayScaleEffect(id) {
    var image = document.getElementById(id);
    image.style.filter = 'grayscale(0%)';
    image.style.transform = "translateY(2px)";
   
}

function btnHoverEffect(btn) {
    btn.style.backgroundColor = accentColor;
    btn.style.color = bgColor;
    btn.style.borderRadius = '50px';
    btn.style.border = `2px solid transparent`;
    btn.style.cursor = 'pointer';
}

function btnHoverEffectExit(btn) {
    btn.style.backgroundColor = 'transparent';
    btn.style.color = textColor;
    btn.style.borderRadius = '50px';
    btn.style.border = `2px solid var(--white)`;
}