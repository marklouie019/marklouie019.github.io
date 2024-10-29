// GENERAL SCRIPT

// Function to generate navbar across multiple pages
var strAgentsLink = "agentList.html";
var strMapsLink = "mapList.html";
var strWeaponsLink = "weaponList.html";
var strAboutLink = "about.html";
var externalLinks = [
    'https://valorant-api.com/',
    'https://www.riotgames.com/en',
    'https://playvalorant.com/en-us/',
];

function generateNavBar() {
  var navBar = document.getElementById('navBar');
  navBar.innerHTML += ` <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top py-3 ps-3" style="background:#101823 !important;box-shadow: 0px 4px 27.5px -3px rgba(0, 0, 0, 0.20)!important">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="assets/img/spike-wiki-logo.svg" alt="spike wiki logo" id="webLogo"></a>
          <button class="btn btn-outline-primary d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">HOME</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  GAME INFO
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="`+strAgentsLink+`">AGENTS</a></li>
                  <li><a class="dropdown-item" href="`+strMapsLink+`">MAPS</a></li>
                  <li><a class="dropdown-item" href="`+strWeaponsLink+`">ARSENAL</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="`+strAboutLink+`">ABOUT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <!-- Menu items in sidebar for mobile view -->
            <ul class="nav flex-column">
              <li class="nav-item ">
                <a class="nav-link" href="../">HOME</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="`+strAgentsLink+`">AGENTS</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="`+strMapsLink+`">MAPS</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="`+strWeaponsLink+`">ARSENAL</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="`+strAboutLink+`">ABOUT</a>
              </li>
            </ul>
        </div>
    </div> 
      `
}

generateNavBar();

// Function to generate footer across multiple pages
function generateFooter() {
  var footer = document.getElementById('footer');
  footer.innerHTML += `<footer>
        <div class="topFooter">
            <a href="index.html"><h4>VALORANT | SPIKEWIKI</h4></a>
        </div>
        <div class="extLinksContainer">
          <div class="logo1">
                <a href="`+externalLinks[0]+`"><img src="assets/img/valorant-api-logo.svg" alt="valorant api logo link"></a>
            </div>
            <div class="logo2">
                <a href="`+externalLinks[1]+`"><img src="assets/img/riot-games-logo.svg" alt="riot games logo link"></a>
            </div>
            <div class="logo3">
                <a href="`+externalLinks[2]+`"><img src="assets/img/valorant-grey-logo.svg" alt="valorant logo link"></a>
            </div>
        </div>
        <p class="text-center">&copy; 2024 Valorant | SpikeWIKI<br>
        Valorant | SpikeWIKI is a non-official wiki website and not endorsed by Riot Games in any way.<br>Riot Games, Valorant, and all  associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
    </footer>`
}

generateFooter();
