/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


//Chiedo all'utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola:");



//Creo una funzione per controllare se le prime lettere sono uguali alle ultime

function palindromo(stringa){
    const lunghezza = stringa.length;

    let pal = "E' palindromo";

    for(let i=0; i<lunghezza/2; i++){
        if(stringa[i] !== stringa[lunghezza-1-i]){
            
            pal = "Non è palindromo";
        }
    }
    console.log(pal);

}

const risultato = palindromo(parolaUtente);

console.log(risultato);