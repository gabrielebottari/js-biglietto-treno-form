/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

let kmToTravel = (prompt("Inserisci il numero di km da percorrere:"));
console.log('Km da percorrere',kmToTravel, typeof kmToTravel);
let kmToTravelNumber = parseInt(kmToTravel);
console.log('Km da percorrere',kmToTravelNumber, typeof kmToTravelNumber);

let passengerAge = (prompt("Inserisci la tua età:"));
console.log('Età',passengerAge, typeof passengerAge);
let passengerAgeNumber = parseInt(passengerAge);
console.log('Età',passengerAgeNumber, typeof passengerAgeNumber);

let kmPrice = 0.21;
let totalPrice = kmToTravel * kmPrice;

if (!isNaN(passengerAge)) {

    if (passengerAge < 18) {
    totalPrice = totalPrice * 0.8;
    } 

    else if (passengerAge >= 65) {
    totalPrice = totalPrice * 0.6;
    }

}

else {
    alert('Inserisci i dati in numero!');
}

totalPrice = totalPrice.toFixed(2);

console.log('Il prezzo del tuo biglietto è: ' + totalPrice + '€');

document.getElementById('ticket').innerHTML=`Il prezzo del tuo biglietto è: ${totalPrice}€`;