const prenom = "Amina";
const ville = "Casablanca";
let age = 22;
let estEnFormation = true

let status;

if(age >= 18){
    status = "majeur"
}
else{
    status = "mineur"
}
// Amina, 22 ans, habite a Casablanca.
// Statut : majeur.
// Formation en cours : true
console.log(`${prenom}, ${age} ans, habit a ${ville}.`)
console.log(`Status: ${status}.`)
console.log(`Formation en cours: ${estEnFormation}`)