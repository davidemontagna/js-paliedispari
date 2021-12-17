/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


//Chiedo all'utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola:");
parolaUtente = parolaUtente.toLowerCase();  //trasformo le maiuscole in minuscole
let frasePal = parolaUtente.replace(/\s/g, "");  // elimino gli spazi da una possibile frase
console.log(frasePal)

//Creo una funzione per controllare se le prime lettere sono uguali alle ultime

function palindromo(stringa){
    const lunghezza = stringa.length;

    let pal = "E' palindromo";

    //divido la stringa in due metà
    for(let i=0; i<lunghezza/2; i++){

        //controllo che i primi caratteri siano uguali agli ultimi
        if(stringa[i] !== stringa[lunghezza-1-i]){
            
            pal = "Non è palindromo";
        }
    }
    console.log(pal);

}

//assegno la funzione a una variabile
const risultato = palindromo(frasePal);


//stampo il risultato
console.log(risultato);