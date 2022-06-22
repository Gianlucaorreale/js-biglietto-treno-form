/*Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/



const prize = document.getElementById('prize');
const identity = document.getElementById('identity');
const generation = document.getElementById('generation');
const discount = document.getElementById('discount');


const sentenceName = 'Nome passeggero : '
const sentenceDiscount = 'Hai diritto ad uno sconto pari al : ';
const discount20 = '20%';
const discount40 = '40%';
const sentencePrize = 'il prezzo del tuo biglietto è : ';
const sentenceGeneration = 'la tua fascia di età è : ';
const euro = '€';


generate.addEventListener('click' , function() {

    const name = document.getElementById('fname').value;
    const km = document.getElementById('fkm').value;
    const age = document.getElementById('ageform').value;
    const generate = document.getElementById('generate');
    const undo = document.getElementById('undo');
    const ticketPrize = 0.21 * km;
    const overDiscount = ticketPrize * 0.60;
    const minorDiscount = ticketPrize * 0.80;
    prize.innerText = `${sentencePrize} ${ticketPrize}${euro} `;
    identity.innerText = `${sentenceName} ${name} `;
    generation.innerText = `${sentenceGeneration} ${age} `;
    console.log(km);
    console.log(name);
    console.log(age);
    
    if (age === 'over65') {
        prize.innerText = `${sentencePrize} ${overDiscount}${euro} `;
        discount.innerText = `${sentenceDiscount} ${discount40}`;  
    }
    else if (age === 'minorenne') {
        prize.innerText = `${sentencePrize} ${minorDiscount}${euro} `;
        discount.innerText = `${sentenceDiscount} ${discount20}`;   
    }
})

undo.addEventListener('click' , function(){
    const name = document.getElementById('fname').value;
    const km = document.getElementById('fkm').value;
    const age = document.getElementById('ageform').value;

    name.value = '';
    km.value = '';
    age.value = '';
})