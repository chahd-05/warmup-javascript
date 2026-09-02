const panier = [
{ nom: "Souris", prix: 150, quantite: 2 },
{ nom: "Casque", prix: 400, quantite: 1 },
{ nom: "Tapis", prix: 60, quantite: 3 },
{ nom: "Webcam", prix: 520, quantite: 1 }
];

const pan = panier.map(e => e.nom)
console.log(pan)

const total = panier.map(e => e.prix * e.quantite)
console.log(total)

const rec = panier.filter(e => e.prix > 100).map(e => e.nom)
console.log(rec)

const calcul = panier.reduce((a, b) => a + b.prix * b.quantite, 0)
console.log(calcul)

const somme = panier.reduce((a, b) => a + b.quantite, 0)
console.log(somme)
