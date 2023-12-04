/*
Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

const myButton = document.getElementById('generate-ticket');

myButton.addEventListener('click', function() {

    //-nome passeggero

    const nameInput = document.getElementById('nameInput');

    console.log('nameInput', nameInput, typeof nameInput);
    console.log('nome passegero', nameInput.value, typeof nameInput.value);

    //- Il numero di chilometri da percorrere
    
    //const kmInput = document.getElementById('kmInput');
    //const kmToTravel = parseInt(kmInput.value);

    const kmToTravel = parseInt(document.getElementById("kmInput").value);

    console.log('kmInput',kmInput , typeof kmInput);
    console.log('km da percorrere', kmToTravel, typeof kmToTravel);

    //- Età del passeggero

    //const ageInput = document.getElementById('ageInput');
    //const passengerAge = parseInt(ageInput.value);

    const passengerAge = parseInt(document.getElementById("ageInput").value);

    console.log('ageInput', ageInput, typeof ageInput);
    console.log('Età del passeggero', passengerAge, typeof passengerAge);

    
    //- il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let kmPrice = 0.21;
    let totalPrice = kmToTravel * kmPrice;

    //- va applicato uno sconto del 20% per i minorenni
    //- va applicato uno sconto del 40% per gli over 65.

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

    document.getElementById('passenger-name').innerHTML= `${nameInput.value}`;

    document.getElementById('result').innerHTML=`${totalPrice}€`;

    nameInput.value = '';
    kmInput.value = '';
    ageInput.value = '';

    document.getElementById('class-ticket').innerHTML = 'Biglietto Standard' ;
    document.getElementById('carriage').innerHTML = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    document.getElementById('code-number').innerHTML = Math.floor(Math.random() * 10000);

});


