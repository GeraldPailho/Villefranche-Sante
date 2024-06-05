// FOCUS DANS LA BARRE DE RECHERCHE APRES UN CLIC SUR L'IMAGE DANS LA PAGE

// récupère l'input comportant l'image dans la page
let imgRecherche = document.getElementById('imgSearch');

imgRecherche.addEventListener('click', function(){

    // récupure une liste de noeud (listNode) avec un seul élément dans la liste [0]
    let barreRecherche = document.getElementsByName('textUser');
    barreRecherche[0].focus();

    // appel de la fonction pour scroller en haut de la page (importée d'index.js)
    topPage();
})

