

// BOUTONS DE CONNEXION

// récupère les deux boutons connexions du header
let btnConnexion = document.querySelectorAll('.btnConnexion');

for (let i = 0; i < btnConnexion.length; i++) {

    // écoute l'évènement du click sur les deux boutons l'un après l'autre grace à la boucle for
    btnConnexion[i].addEventListener('click', function() {

        let courantUrl = window.location.href;

        if (courantUrl == "http://127.0.0.1:5500/index.html") {
            window.location.href = './src/assets/screens/connexion.html';            
        } else {
            window.location.href = './connexion.html';
        }
    })
}


// BOUTON REMONTER EN HAUT DE PAGE

// Lorsque l'utilisateur fait défiler vers le bas de 20px depuis le haut du document, affichez le bouton
window.onscroll = function() {

    let btnTop = document.getElementById("btnTop");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.removeAttribute('style');
        btnTop.setAttribute('style', 'display: block;');
    } else {
        btnTop.removeAttribute('style');
        btnTop.setAttribute('style', 'display: none;');
    }
};

// Lorsque l'utilisateur clique sur le bouton, scrolle <body> jusqu'en haut du document
const topFunction = () => {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}

// export const topFunction = () => {
//     document.body.scrollTop = 0; // Pour Safari
//     document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
// }


// BARRE DE RECHERCHE

// récupére le formulaire contenant la barre de recherche et le bouton
let barreRecherche = document.querySelector('#formRecherche');

// écoute la chaine de caractère entrée dans la barre de recherche et lancer la fonction contrôleSaisie
barreRecherche.textUser.addEventListener('change', function(){
    controleSaisie(this.value);
})

// écoute 
barreRecherche.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('rediriger vers la page correspondante au texte de recherche');
})

// fonction pour contrôler si des mots sont présent dans une chaine de caractères
const controleSaisie = (text) => {
    
    if (newRegex("christelle|pailhories|carine|cârine|schiavone|celine|céline|garrigue|sud|place|louis|fontanges").test(text) == true) {
        window.location.href = './cabinetFontange.html';
    }

}

// fonction pour générer une nouvelle variable nommé regex
const newRegex = (words) => {
    const regex = new RegExp (words, "i");
    return regex;
}
