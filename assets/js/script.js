// NAVBAR
var customNavbar = document.getElementById('customNavbar');
customNavbar.innerHTML = `
                    <a class="nav-logo" href="../" onclick="displayMenu()" onmouseenter="applyCursorEffect()"
                        onmouseleave="revertCursorEffect()"><img src="assets/img/lo-logo-stroke.svg"></a>
                    <div class="menu-icon" id="menuIcon" onclick="displayMenu()" onmouseenter="applyCursorEffect()"
                        onmouseleave="revertCursorEffect()"></div>`;

// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// CURSOR HOVER EFFECT
const largeCursor = document.getElementById('cursor');

function applyCursorEffect() {
    largeCursor.style.mixBlendMode = 'difference';
    largeCursor.style.transform = 'scale(3)';
}

function revertCursorEffect() {
    largeCursor.style.mixBlendMode = 'normal';
    largeCursor.style.width = '20px';
    largeCursor.style.height = '20px';
    largeCursor.style.transform = 'translate(-50%, -50%)';
}

// MENU TOGGLER
var isMenuVisible = false;
var menuIcon = document.getElementById('menuIcon');
var menuDisplay = document.getElementById('menuDisplay');
var mainDisplay = document.getElementById('mainDisplay');


menuIcon.innerHTML = `<svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
        <path class="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
        <path class="line middle" d="m 30,50 h 40" />
        <path class="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
    </svg>`;

function displayMenu() {

    if (!isMenuVisible) {
        menuDisplay.style.display = 'block';
        mainDisplay.style.display = 'none';
    } else {
        menuDisplay.style.display = 'none';
        mainDisplay.style.display = 'block';
    }
    isMenuVisible = !isMenuVisible;
}

if (!isMenuVisible) {
    menuDisplay.style.display = 'none';
}

function displayHomePage() {
    isMenuVisible = false;
    menuDisplay.style.display = 'none';
    mainDisplay.style.display = 'block';

    const menuToggler = document.querySelector('.ham');
    if (menuToggler.classList.contains('active')) {
        menuToggler.classList.remove('active');
    }
}

// MENU DISPLAY GENERATOR
menuDisplay.innerHTML = `<ul>
                        <li class="menu-display option">
                            <a href="./" onclick="displayHomePage()"><span class="menu num">01</span><span
                                    class="menu opt" onmouseenter="applyCursorEffect()"
                                    onmouseleave="revertCursorEffect()">HOME</span></a>
                        </li>
                        <li class="menu-display option">
                            <a href="subjects.html"><span class="menu num">02</span><span
                                    class="menu opt" onmouseenter="applyCursorEffect()"
                                    onmouseleave="revertCursorEffect()">SUBJECTS</span></a>
                        </li>
                        <li class="menu-display option">
                            <a href="about.html"><span class="menu num">03</span><span
                                    class="menu opt" onmouseenter="applyCursorEffect()"
                                    onmouseleave="revertCursorEffect()">ABOUT</span></a>
                        </li>
                        <li class="menu-display option">
                            <a href="contact.html"><span class="menu num">04</span><span
                                    class="menu opt" onmouseenter="applyCursorEffect()"
                                    onmouseleave="revertCursorEffect()">CONTACT</span></a>
                        </li>
                    </ul>`;

// GENERATE SUBJECT LIST
const projectList = [
    {
        "name": "WEBDEV",
        "url": "subjects/webdev/projects.html",
        "subNum": "1",
        "thumbnail": "webdev-thumbnail.png",
        "description": "Web Development Projects"
    },
    {
        "name": "APPDEV",
        "url": "./subjects/appdev/projects.html",
        "subNum": "2",
        "thumbnail": "appdev-thumbnail.png",
        "description": "App Development & Emerging Tech Projects"
    }
];

var projListContainer = document.getElementById('projListContainer');
var projectsCount = document.getElementById('projectsCount');

function generateProjects() {
    projectsCount.innerHTML = projectList.length;

    for (var i = 0; i < projectList.length; i++) {

        var endingLine;
        if (i == projectList.length - 1) {
            endingLine = `<div class="line"></div><span class="ending-line fontTheme">nothing follows</span><div class="line"></div>`;
        } else {
            endingLine = `<div class="line"></div>`;
        }

        projListContainer.innerHTML += `<div class="row">
                                <div class="col-12 col-md-6 order-md-1 order-2">
                                    <div class="col-12 col-md-6 mt-3 d-flex align-items-center justify-content-center justify-content-md-start">
                                        <div class="project-title">
                                            <h4 class="fontTheme">`+ projectList[i].name + `</h4>
                                            <div class="project-desc">
                                                <p>`+ projectList[i].description + `</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="button mt-md-5 mt-2 mb-4 col-12 order-md-2 order-3">
                                                <a target="_blank" href="`+ projectList[i].url + `">
                                                    <div class="btn-redirect2 fontTheme"
                                                        onmouseenter="applyCursorEffect()"
                                                        onmouseleave="revertCursorEffect()">VISIT</div>
                                                </a>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 order-md-2 order-1 d-flex justify-content-center justify-content-md-start">
                                    <a href="`+ projectList[i].url + `"><img src="assets/img/` + projectList[i].thumbnail + `"
                                            class="project-thumbnail img-fluid" onmouseenter="applyCursorEffect()"
                                            onmouseleave="revertCursorEffect()"></a>
                                </div>
                            </div>
                            <div class="divider d-flex">
                            `+ endingLine + `
                            </div>`;
    }
}

generateProjects();


