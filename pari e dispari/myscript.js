/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


function randomNum(){  //funzione per generare un numero da 1 a 5
    
    let random = parseInt(Math.floor(Math.random()*5)+1);
    return random;
}


//chiedo all'utente se sceglie pari o dispari e di inserire un numero da 1 a 5
let choose = prompt("Scegli, pari o dispari?");  
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

/*richiamo la funzione per generare un numero random e la metto in variabile
e poi sommo il numero random con il numero inserito dall'utente*/
let numPc = randomNum(); 
let addition = userNumber + numPc;

console.log(`Hai scelto: ${choose}`);
console.log(`Hai inserito il numero: ${userNumber}`);
console.log(`Il numero del computer è: ${numPc}`);
console.log(`La somma dei due numeri è pari a: ${addition}`);

//funzione con cui controllo se la somma è pari o dispari
function evenOrOdd(){

    if(addition % 2 != 0){
        addition = "dispari";
    }else{
        addition = "pari";
    }
    return addition;
}

//salvo la funzione per il controllo pari o dispari in una variabile
let check = evenOrOdd();

//controllo se l'utente ha vinto o perso e lo comunico
if(choose == check){
    console.log(`Complimeti, hai vinto!`);
}else{
    console.log(`Mi dispiace, hai perso.`);
}
