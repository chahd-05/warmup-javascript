const ventes = [
{ vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
{ vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
{ vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
{ vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
{ vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
{ vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

const total = ventes.reduce((a, b) => a + b.montant, 0)
console.log(total)

const find = ventes.reduce((a, b) => b.montant > a.montant ? b : a)
console.log(find)
