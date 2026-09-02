const commandes = [
{ montant: 150, statut: "standard" },
{ montant: 620, statut: "standard" },
{ montant: 1200, statut: "premium" }
];

function calculerCommande(montant, statut) {
    let pourcentageRemise;

    if (montant < 200) {
        pourcentageRemise = 0;
    } else if (montant < 500) {
        pourcentageRemise = 5;
    } else if (montant < 1000) {
        pourcentageRemise = 10;
    } else {
        pourcentageRemise = 15;
    }

    return pourcentageRemise;
}

console.log(calculerCommande(150, "standard"));
console.log(calculerCommande(620, "standard"));
console.log(calculerCommande(1200, "premium"));