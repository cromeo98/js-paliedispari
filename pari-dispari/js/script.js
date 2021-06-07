// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// 1) Chiedo all'utente di scegliere tra pari e dispari
var userEvenOdd = prompt('Scegli.. pari o dispari?')

// 2) Trasformo la scelta in lower case
var userEvenOddLowCase = userEvenOdd.toLowerCase()

// 3) Verifico che l'utente abbia effetivamente scritto pari o dispari
var i = 0

while (userEvenOddLowCase != pari || userEvenOddLowCase != dispari){
    word = prompt('Scrivi pari o dispari!');
    i++;
}
