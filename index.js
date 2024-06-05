// REDIRIGE LA PAGE INDEX VERS LA PAGE ACCUEIL

const pageAccueil = () =>{
    if (window.location.href == 'http://127.0.0.1:5500/index.html') {
        window.location.href = './src/assets/screens/accueil.html';
    }
}

window.onload = pageAccueil();


// BOUTONS DE CONNEXION

// récupère les deux boutons connexions du header
let btnConnexion = document.querySelectorAll('.btnConnexion');

for (let i = 0; i < btnConnexion.length; i++) {

    // écoute l'évènement du click sur les deux boutons l'un après l'autre grace à la boucle for
    btnConnexion[i].addEventListener('click', function() {

        window.location.href = './connexion.html';
    })
}


// BOUTON REMONTER EN HAUT DE PAGE

let btnTop = document.getElementById("btnTop");

// Lorsque l'utilisateur fait défiler vers le bas de 20px depuis le haut du document, affichez le bouton
window.onscroll = function() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.removeAttribute('style');
        btnTop.setAttribute('style', 'display: block;');
    } else {
        btnTop.removeAttribute('style');
        btnTop.setAttribute('style', 'display: none;');
    }
};

btnTop.addEventListener('click', function () {
    topPage();
})

// Scrolle le <body> jusqu'en haut du document
const topPage = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// BARRE DE RECHERCHE

let barreRecherche = document.querySelector('#formRecherche');

// textUser : valeur du name de l'input
barreRecherche.textUser.addEventListener('change', function(){
    controleSaisie(this.value);
})

barreRecherche.btnSearch.addEventListener('click', function(){
    controleSaisie(barreRecherche.textUser.value);
})

// Contrôler si des mots sont présent dans une chaine de caractères
const controleSaisie = (text) => {
    
    if (newRegex("favoris").test(text) == true) {
        window.location.href = './favoris.html';
    }
    if (newRegex("connexion").test(text) == true) {
        window.location.href = './connexion.html';
    }
    if (newRegex("compte").test(text) == true) {
        window.location.href = './compte.html';
    }
    if (newRegex("rdv|rendez-vous").test(text) == true) {
        window.location.href = './rdv.html';
    }
    if (newRegex("accueil").test(text) == true) {
        window.location.href = './accueil.html';
    }
    if (newRegex("infirmier|infirmiere|infirmiers|infirmieres").test(text) == true) {
        window.location.href = './infirmierDomicile.html';
    }
    if (newRegex("christelle|pailhories|carine|cârine|schiavone|celine|céline|garrigue|sud|place|louis|fontanges").test(text) == true) {
        window.location.href = './cabinetFontange.html';
    }
}

// Génère une nouvelle variable nommé regex
const newRegex = (words) => {
    const regex = new RegExp (words, "i");
    return regex;
}

