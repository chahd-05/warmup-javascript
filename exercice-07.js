const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

const t = titre.toLowerCase()
console.log(t)

const p = phrase.trim().split(" ").length
console.log(p)

function initiales(nomComplet) {
    const mots = nomComplet.split(" ");

    const lettres = mots.map(function(mot) {
        return mot.charAt(0).toUpperCase();
    });

    return lettres.join(".") + ".";
}
console.log(initiales("amina el idrissi"));