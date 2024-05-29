// on récupère tout le formulaire
let form = document.getElementById('formConnexion');

// écouter la modification du champ email avec : addEventListener()-> écouter, valeur 'change'-> au changement de l'input, function(){}-> indiquer la foncion à appliquer
form.email.addEventListener('change', function(){
    // this = élément qui est écouté (form.email = email entré dans l'input)
    validEmail(this);
})

// écouter la modification du champ mot de passe
form.mp.addEventListener('change', function(){
    validMp(this);
})

// écouter l'envoi du formulaire'
form.addEventListener('submit', function(e){
    e.preventDefault();

    if ((validEmail(form.email) == true) && (validMp(form.mp) == true)) {   
        form.submit(); // on soumet le formulaire
    }
})

// ***** VALIDATION EMAIL *****
const validEmail = (email) => {

    // création de la regex validation email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,6}$', 'g') //g : marqueur global, la recherche est faite sur toute la chaine de caractères

    let testEmail = emailRegExp.test(email.value);

    // récupère l'élément small après l'élément input de l'email
    let smallEmail = document.getElementById('smallEmail');

    // if (testEmail) = if (testEmail == true)
    if (testEmail == false) {
        smallEmail.innerHTML = "Email invalide !";
        smallEmail.classList.add('text-danger');
        return false;
    } else {
        smallEmail.innerHTML = "";
        smallEmail.classList.remove('text-danger');
        return true;
    }
}

// ***** VALIDATION MOT DE PASSE *****
const validMp = (mp) => {

    let msg;
    let valid = false;

    // Au moins 8 caractères
    // Au moins 1 majuscule
    // Au moins 1 minuscule
    // Au moins 1 chiffre
    if (mp.value.length < 8) {
        msg = "le mot de passe doit contenir au moins 8 caractères";
    } else if (!(/[A-Z]/.test(mp.value))) {
        msg = "le mot de passe doit contenir au minimum 1 majuscule";
    } else if (!(/[a-z]/.test(mp.value))) {
        msg = "le mot de passe doit contenir au minimum 1 minuscule";        
    } else if (!(/[0-9]/.test(mp.value))) {
        msg = "le mot de passe doit contenir au minimum 1 chiffre";        
    } else {
        valid = true;
    }

    // récupère l'élément small après l'élément input de l'email
    let smallMp = document.getElementById('smallMp');

    if (valid == false) {
        smallMp.innerHTML = `Mot de passe invalide ! ${msg}`;
        smallMp.classList.add('text-danger');
        return false;
    } else {
        smallMp.innerHTML = "";
        smallMp.classList.remove('text-danger');
        return true;
    }
}