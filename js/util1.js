



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

