// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// 1) Chiedo all'utente di inserire una parola (minimo 3 lettere)
var word = prompt('inserisci una parola di minimo 3 lettere');

// 2) Assegno a una nuova variabile la lunghezza della parola inserita dall'utente 
var wLenght = word.length

// 3) Trasformo la parola scelta dall'utente in lower case
var wordLowCase = word.toLowerCase();

// 4) Verifico che la parola inserita abbia almeno 3 lettere
var i = 0;

while (wLenght < 3){
    word = prompt('inserisci una parola di MINIMO 3 lettere');
    i++;
}

// 6) Assegno alla variabile results la funzione wordBackwards (punto 6) con come variabile propria la parola inserita dall'utente
var results = wordBackwards(word);

console.log(results);


//6) Creo la funzione
//******** functions
function wordBackwards (wordToReverse){

    // 1) creo un'array contente le lettere della parola scelta dall'utente
    var splittedWord = wordToReverse.split("");

    // 2) creo una variabile alla quale assegno un valore vuoto
    var reverseWord = '';

    // 3) costruisco la parola al contrario sfruttando l'array creata e la dichiaro nella variabile vuota creata al punto 2
    for (var i = wLenght - 1; i >= 0; i--){
        reverseWord += splittedWord[i];
    }

    // 3) valorizzo il return della funzione
    if (reverseWord == word){
        return 'la parola è palindroma'
    } else {
        return 'la parola non è palindroma'
    }
}