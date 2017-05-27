/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

//Règles du jeu
console.log("Il s'agit de trouver le nombre mystère, qui est compris entre 1 et 100.\nPour cela vous disposez de six tentatives.\nBonne chance !\n");


var nbDeTentative = 1;//enregistre le nombre d'essais
var nbSaisi = Number(prompt("Entrez un nombre :"));//premier nombre saisi par le joueur

//Tant qu'il reste des essais ou que le nombre saisi n'est pas la solution
while (nbDeTentative <= 6 && nbSaisi !== solution) {
    
    if (solution < nbSaisi) {
        console.log(nbSaisi + " est trop grand !");
    }
    else if (solution > nbSaisi) {
        console.log(nbSaisi + " est trop petit !");
    }
    nbDeTentative++;//enregistre un essai de plus
    
    if (nbDeTentative === 6) {//au 6ème essai
        console.log("Attention ! C'est votre dernière chance !");
    }
    if (nbDeTentative < 7) {//le joueur ne peut faire plus de 6 essais
        nbSaisi = Number(prompt("Entrez un nombre :"));        
    }
}//sortie de la boucle le joueur à gagné ou perdu
    
if (nbDeTentative > 6) {
    console.log("Perdu... La solution était " + solution + ".");
}
else {
        console.log("Bravo ! La solution était " + solution + ".\nVous avez trouvé en " + nbDeTentative + " essai(s).");
    }



