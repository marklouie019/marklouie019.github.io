// GENERAL SCRIPT

// Function to generate navbar across multiple pages
function generateNavBar(){
    var navBar = document.getElementById('navBar');
    navBar.innerHTML += ` <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top py-3 ps-3" style="background:#101823 !important;box-shadow: 0px 4px 27.5px -3px rgba(0, 0, 0, 0.20)!important">
        <div class="container-fluid">
          <a class="navbar-brand" href="../"><img src="assets/img/spike-wiki-logo.svg" alt="spike wiki logo" id="webLogo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="../">HOME</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  GAME INFO
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="agentList.html">AGENTS</a></li>
                  <li><a class="dropdown-item" href="mapList.html">MAPS</a></li>
                  <li><a class="dropdown-item" href="weaponList.html">ARSENAL</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
}

generateNavBar();

// Function to generate footer across multiple pages
function generateFooter(){
    var footer = document.getElementById('footer');
    footer.innerHTML += `<footer class="py-4">
        <p class="text-center">&copy; 2024 Valorant | SpikeWIKI<br>
        Valorant | SpikeWIKI is a non-official wiki website and not endorsed by Riot Games in any way.<br>Riot Games, Valorant, and all  associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
    </footer>`
}

generateFooter();