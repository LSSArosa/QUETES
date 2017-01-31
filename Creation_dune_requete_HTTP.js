// https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/interrogez-un-serveur-web


// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);



var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);


// Voici notre code d'exemple intégrant une gestion assez basique des erreurs:

var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);

// On distingue deux principaux cas d'erreur :

// 1) La requête n'a pas réussi à atteindre le serveur (nom du serveur incorrect, 
// erreur réseau, etc). Ces erreurs déclenchent l'apparition d'un événement 
// de typeerrorsur la requête. Le gestionnaire associé affiche le message 
// "Erreur réseau" dans la console.
// 2) La requête a atteint le serveur, mais son traitement a échoué 
// (ressource demandée non trouvée, problème interne au serveur, etc). 
// C'est le code de retour HTTP de la requête, contenu dans sa propriétéstatus,
//  qui indique son résultat. Un code supérieur ou égal à 200 et 
//  strictement inférieur à 400 signale la réussite de la requête.


