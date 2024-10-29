console.log('ciao');

const fullName = require("./names.js")
console.log(fullName('Pietro', 'Ponte'));

const hobbiesList = require("./hobbies.js")
console.log(hobbiesList('Calcio', 'Nuoto', 'Leggere'));

/* Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. */

function people() {
    return person = {
        "firstName": fullName('Pietro', 'Ponte').firstName,
        "lastName": fullName('Pietro', 'Ponte').lastName,
        "hobbies": hobbiesList('Calcio', 'Nuoto', 'Leggere').hobbies
    }
        
}

console.log(people());
