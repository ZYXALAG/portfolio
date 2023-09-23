const navbar = document.querySelector("header nav");
const navbarHeight = navbar.clientHeight;

function showReducedNavbar() {
  const scrollTop = window.scrollY;

  if (scrollTop > navbarHeight) {
    // Utilisez une classe pour contrôler l'état de la navbar réduite
    navbar.classList.add("navbar-reduced");
    
    // Ajoutez une petite temporisation pour la transition CSS
    setTimeout(() => {
      navbar.style.transform = "translateX(0)"; // Fait glisser la navbar depuis la gauche
    }, 0);
  } else {
    navbar.style.transform = "translateX(-100%)"; // Masque la navbar à gauche de l'écran
    navbar.classList.remove("navbar-reduced");
    navbar.style.transform = "translateX(0)";
  }
}

// Écoutez le défilement de la page
window.addEventListener("scroll", showReducedNavbar);

// Pas besoin d'appeler showReducedNavbar() ici car l'écouteur de scroll le fait déjà au chargement de la page
