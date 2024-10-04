document.addEventListener("DOMContentLoaded", function () {
    // Liste d'images dans le dossier "fond"
    const fondImageList = [
        "fond/1.png", "fond/2.png", "fond/3.png", "fond/4.png", "fond/5.png", "fond/6.png",
        "fond/7.png", "fond/8.png", "fond/9.png", "fond/10.png", "fond/11.png", "fond/12.png",
        "fond/13.png", "fond/14.png", "fond/15.png", "fond/16.png", "fond/17.png", "fond/18.png",
        "fond/19.png", "fond/20.png", "fond/21.png", "fond/22.png", "fond/23.png", "fond/24.png",
        "fond/25.png", "fond/26.png", "fond/27.png", "fond/28.png", "fond/29.png", "fond/30.png",
        "fond/31.png", "fond/32.png", "fond/33.png", "fond/34.png", "fond/35.png", "fond/36.png",
        "fond/37.png", "fond/38.png", "fond/39.png", "fond/40.png", "fond/41.png", "fond/42.png",
        "fond/43.png",
        "fond/44.png",
        "fond/45.png",
        "fond/46.png",
        "fond/47.png",
        "fond/48.png",
        "fond/49.png",
        "fond/50.png",
        "fond/51.png",
        "fond/52.png",
        "fond/53.png",
        "fond/54.png",
        "fond/55.png",
        "fond/56.png",
        "fond/57.png",
        "fond/58.png",
        "fond/59.png",
        "fond/60.png",
        "fond/61.png",
        "fond/62.png",
        "fond/63.png",
        "fond/64.png",
        "fond/65.png",
        "fond/66.png",
        "fond/67.png",
        "fond/68.png",
        "fond/69.png",
        "fond/70.png",
        "fond/71.png",
        "fond/72.png",
        "fond/73.png",
        "fond/74.png",
        "fond/75.png",
        "fond/76.png",
        "fond/77.png",
        "fond/78.png",
        /* "fond/79.png",
         "fond/80.png",
         "fond/81.png",
         "fond/82.png",
         "fond/83.png",
         "fond/84.png",
         "fond/85.png",
         "fond/86.png",
         "fond/87.png",
         "fond/88.png",
         "fond/89.png",
         "fond/90.png",
         "fond/91.png",
         "fond/92.png",
         "fond/93.png",
         "fond/94.png",
         "fond/95.png",
         "fond/96.png",
         "fond/97.png",
         "fond/98.png",
         "fond/99.png",
         "fond/100.png",
         "fond/101.png",
         "fond/102.png",
         "fond/103.png",
         "fond/104.png",
         "fond/105.png",
         "fond/106.png",
         "fond/107.png",
         "fond/108.png",
         "fond/109.png",
         "fond/110.png",
         "fond/111.png",
         "fond/112.png",
         "fond/113.png",
         "fond/114.png",
         "fond/115.png",
         "fond/116.png",
         "fond/117.png",
         "fond/118.png",
         "fond/119.png",
         "fond/120.png",
         "fond/121.png" **/

    ];

    const fondGallery = document.getElementById("fondGallery");

    // Ajout dynamique des images à la galerie avec un conteneur et bouton de téléchargement pour chaque image
    fondImageList.forEach(imagePath => {
        // Conteneur de l'image et du bouton
        const fondContainer = document.createElement("div");
        fondContainer.className = "fond-image-container";

        // Élément d'image
        const fondImgElement = document.createElement("img");
        fondImgElement.src = imagePath;
        fondImgElement.alt = "Fond d'écran";

        // Bouton de téléchargement
        const downloadButton = document.createElement("a");
        downloadButton.href = imagePath;  // Lien vers l'image
        downloadButton.download = imagePath.split('/').pop();  // Nom du fichier à télécharger
        downloadButton.className = "download-btn";
        downloadButton.textContent = "Download";

        // Ajout de l'image et du bouton dans le conteneur
        fondContainer.appendChild(fondImgElement);
        fondContainer.appendChild(downloadButton);

        // Ajout du conteneur complet à la galerie
        fondGallery.appendChild(fondContainer);
    });
});



// Fonction pour récupérer les paramètres d'URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Récupérer l'ID du PDF depuis les paramètres d'URL
const pdfId = getQueryParam('pdf');
if (pdfId) {
    const pdfContainer = document.getElementById('pdf-container');
    const pdfFrame = document.getElementById('pdf-frame');

    // Construire l'URL du visualiseur Google Drive pour ce fichier PDF
    const pdfUrl = `https://drive.google.com/file/d/${pdfId}/preview`;

    // Affiche le conteneur PDF et charge le PDF dans l'iframe Google
    pdfContainer.style.display = 'block';
    pdfFrame.src = pdfUrl;
} else {
    console.error("Aucune URL PDF trouvée dans les paramètres d'URL.");
}


// 4. Fonction pour rechercher un manga par son nom
function rechercherManga() {
    let input = document.getElementById("recherche-input").value.toLowerCase();
    let mangas = document.querySelectorAll(".manga-item");

    mangas.forEach(function (manga) {
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
document.getElementById("recherche-btn").addEventListener("click", function (event) {
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

