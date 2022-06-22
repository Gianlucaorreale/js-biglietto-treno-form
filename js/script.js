/*Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

const name = document.getElementById('nameform');
const km = document.getElementById('fkm');
const age = document.getElementById('ageform');
const generate = document.getElementById('generate');
const undo = document.getElementById('undo');
const sentence = 'il prezzo del tuo biglietto è : ';
const prize = document.getElementById('prize');
const ticketPrize = 0.21 * km;




generate.addEventListener('click' , function() {
    prize.innerText = `${sentence} ${ticketPrize} `;   
})