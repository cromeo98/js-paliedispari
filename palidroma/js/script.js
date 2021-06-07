// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// 1) Chiedo all'utente di inserire una parola (minimo 3 lettere)
var word = prompt('inserisci una parola di minimo 3 lettere')

var i = 0

while (word.length < 3){
    word = prompt('inserisci una parola di MINIMO 3 lettere')
    i++
}
