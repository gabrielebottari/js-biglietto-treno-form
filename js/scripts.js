/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

const myButton = document.getElementById('generate-ticket');

myButton.addEventListener('click', function() {

    const nameInput = document.getElementById('nameInput');

    console.log('nameInput', nameInput, typeof nameInput);
    console.log('nome passegero', nameInput.value, typeof nameInput.value);

    //const kmInput = document.getElementById('kmInput');
    //const kmToTravel = parseInt(kmInput.value);

    const kmToTravel = parseInt(document.getElementById("kmInput").value);

    console.log('kmInput',kmInput , typeof kmInput);
    console.log('km da percorrere', kmToTravel, typeof kmToTravel);

    //const ageInput = document.getElementById('ageInput');
    //const passengerAge = parseInt(ageInput.value);

    const passengerAge = parseInt(document.getElementById("ageInput").value);

    console.log('ageInput', ageInput, typeof ageInput);
    console.log('Età del passeggero', passengerAge, typeof passengerAge);

    

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

    document.getElementById('result').innerHTML=`Il prezzo del tuo biglietto è: ${totalPrice}€`;

    nameInput.value = '';
    kmInput.value = '';
    ageInput.value = '';

});


