/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
    "use strict";
  
    /**
     * Header toggle
     */
    const headerToggleBtn = document.querySelector('.header-toggle');
  
    function headerToggle() {
      document.querySelector('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }
    headerToggleBtn.addEventListener('click', headerToggle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
          headerToggle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
    /**
     * Init typed.js
     */
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  
    /**
     * Initiate Pure Counter
     */
    new PureCounter();
  
    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function(direction) {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
  
      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });
  
      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });
  
    });
  
    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  
    window.addEventListener("load", initSwiper);
  
    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function(e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  
    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');
  
    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);




// Fonction pour afficher le pop-up de vérification de l'âge
function afficherPopupVerificationAge() {
  document.getElementById("blur-overlay").style.display = "block"; // Afficher l'overlay avec le formulaire
}

// Fonction pour masquer le pop-up après la vérification
function masquerPopupVerificationAge() {
  document.getElementById("blur-overlay").style.display = "none"; // Masquer l'overlay
}

// Fonction pour vérifier l'âge à la soumission du formulaire
document.getElementById("age-verification-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche la soumission du formulaire par défaut

  let age = document.getElementById("age").value; // Récupère la valeur de l'âge

  if (age >= 18) {
      alert("Merci d'avoir confirmé votre âge.");
      masquerPopupVerificationAge(); // Masquer le pop-up si l'âge est correct
  } else {
      alert("Vous devez avoir au moins 18 ans pour accéder à ce contenu.");
      window.location.href = "index.html"; // Redirection vers la page d'accueil si l'utilisateur est mineur
  }
});

// Appeler la fonction pour afficher le pop-up au chargement de la page
window.onload = function () {
  afficherPopupVerificationAge();
};



// Fonction pour mettre à jour les étoiles en fonction de la note actuelle
function updateStars(item, rating) {
  const stars = item.querySelectorAll('.star');
  stars.forEach((star, index) => {
      star.classList.toggle('active', index < Math.round(rating));
  });
}

// Fonction pour mettre en surbrillance les étoiles au survol
function highlightStars(item, rating) {
  const stars = item.querySelectorAll('.star');
  stars.forEach((star, index) => {
      star.classList.toggle('active', index < rating);
  });
}

// Gestion de l'évaluation des mangas
const mangaItems = document.querySelectorAll('.manga-item');
mangaItems.forEach(item => {
  const stars = item.querySelectorAll('.star');
  const ratingCount = item.querySelector('.rating-count');
  let currentRating = 20;
  let totalRatings = 0;

  stars.forEach(star => {
      star.addEventListener('click', () => {
          const rating = parseInt(star.getAttribute('data-rating'));
          currentRating = (currentRating * totalRatings + rating) / (totalRatings + 1);
          totalRatings++;
          updateStars(item, currentRating);
          ratingCount.textContent = `(${totalRatings})`;

          // Envoi de la nouvelle note au serveur (code AJAX)
          // fetch('/api/rate-manga', {
          //   method: 'POST',
          //   body: JSON.stringify({ mangaId: item.dataset.id, rating: rating }),
          //   headers: { 'Content-Type': 'application/json' }
          // });
      });

      star.addEventListener('mouseover', () => {
          const rating = parseInt(star.getAttribute('data-rating'));
          highlightStars(item, rating);
      });

      star.addEventListener('mouseout', () => {
          updateStars(item, currentRating);
      });
  });
});

// Fonction pour ouvrir le fichier PDF dans le navigateur
const openButtons = document.querySelectorAll('.open-btn');
openButtons.forEach(button => {
  button.addEventListener('click', function() {
      const pdfUrl = this.getAttribute('data-pdf');
      if (pdfUrl) {
          // Ouvre le fichier PDF dans un nouvel onglet
          window.open(pdfUrl, '_blank');
      }
  });
});

// Fonction pour télécharger le fichier PDF sans l'ouvrir
const downloadLinks = document.querySelectorAll('a[download]');
downloadLinks.forEach(link => {
  link.addEventListener('click', function(event) {
      const pdfUrl = this.getAttribute('href');
      if (pdfUrl) {
          // Télécharge le fichier PDF directement
          const anchor = document.createElement('a');
          anchor.href = pdfUrl;
          anchor.download = pdfUrl.split('/').pop(); // Le nom du fichier sera pris à partir de l'URL
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);

          // Empêche le comportement par défaut (qui pourrait ouvrir le PDF dans certains navigateurs)
          event.preventDefault();
      }
  });
});


// Fonction pour rechercher un manga par son nom
function rechercherManga(nomManga) {
// Récupérer tous les éléments .manga-item
const mangaItems = document.querySelectorAll('.manga-item');

// Parcourir les éléments .manga-item
mangaItems.forEach((item) => {
  // Récupérer l'élément .manga-title
  const mangaTitle = item.querySelector('.manga-title');

  // Vérifier si le nom du manga correspond
  if (mangaTitle.textContent.toLowerCase().includes(nomManga.toLowerCase())) {
      // Si le nom correspond, afficher le manga
      item.style.display = 'block';
  } else {
      // Sinon, masquer le manga
      item.style.display = 'none';
  }
});
}

// Ajouter un événement pour déclencher la recherche lorsque l'utilisateur saisit du texte dans le champ de recherche
const rechercheInput = document.getElementById('recherche-input');
rechercheInput.addEventListener('input', () => {
  const nomManga = rechercheInput.value;
  rechercherManga(nomManga);
});

// Ajouter un événement pour déclencher la recherche lorsque l'utilisateur clique sur le bouton de recherche
const rechercheBtn = document.getElementById('recherche-btn');
rechercheBtn.addEventListener('click', () => {
  const nomManga = rechercheInput.value;
  rechercherManga(nomManga);
});    



  
  })
  
  ();