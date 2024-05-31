

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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
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

// récupére la chaine de caractère entrée dans la barre de recherche (et l'affiche dans la console)
barreRecherche.textUser.addEventListener('change', function(){
    console.log(this.value);
})



