// 1. Vérification de l'âge avec un formulaire d'informations supplémentaires
function verifierAge() {
    let age = prompt("Entrez votre âge :");
    if (age >= 18) {
        alert("Vous êtes autorisé à accéder au contenu.");
    } else {
        alert("Vous devez avoir au moins 18 ans pour accéder à ce contenu.");
        window.location.href = "index.html"; // Redirection vers la page d'accueil
    }
}

// 2. Fonction pour télécharger un fichier PDF sans l'ouvrir
function telechargerPDF(cheminPDF) {
    const lien = document.createElement("a");
    lien.href = cheminPDF;
    lien.download = cheminPDF.split('/').pop(); // Télécharger avec le nom de fichier
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
}

// 3. Fonction pour ouvrir un fichier PDF dans le navigateur
function ouvrirPDF(cheminPDF) {
    window.open(cheminPDF, "_blank"); // Ouvrir le fichier PDF dans un nouvel onglet
}

// 4. Fonction pour rechercher un manga par son nom
function rechercherManga() {
    let input = document.getElementById("recherche-input").value.toLowerCase();
    let mangas = document.querySelectorAll(".manga-item");

    mangas.forEach(function(manga) {
        let titre = manga.querySelector(".manga-title").textContent.toLowerCase();
        if (titre.includes(input)) {
            manga.style.display = "block"; // Afficher le manga si le nom correspond
        } else {
            manga.style.display = "none"; // Masquer le manga sinon
        }
    });
}

// 5. Ajout d'un événement pour déclencher la recherche lorsqu'un utilisateur saisit du texte
document.getElementById("recherche-input").addEventListener("input", rechercherManga);

// 6. Ajouter un événement pour déclencher la recherche lorsque l'utilisateur clique sur le bouton de recherche
document.getElementById("recherche-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut
    rechercherManga();
});







    // Vérification de l'âge avec un formulaire d'informations supplémentaires
    const ageVerified = sessionStorage.getItem("ageVerified");
    if (!ageVerified) {
        document.getElementById("blur-overlay").style.display = "flex";
    }

    document.getElementById("verify-age").addEventListener("click", function () {
        const age = parseInt(document.getElementById("age").value);
        if (age >= 18) {
            sessionStorage.setItem("ageVerified", true);
            document.getElementById("blur-overlay").style.display = "none";
        } else {
            alert("Vous devez avoir 18 ans ou plus pour accéder à ce site.");
        }
    });




document.addEventListener("DOMContentLoaded", function () {




    // Menu de superposition
    const menuButton = document.querySelector('.menu-button');
    const menuPage = document.getElementById('menuPage');
    const closeMenu = document.getElementById('closeMenu');

    menuButton.addEventListener('click', () => {
        menuPage.style.display = 'flex';
    });

    closeMenu.addEventListener('click', () => {
        menuPage.style.display = 'none';
    });

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

});
