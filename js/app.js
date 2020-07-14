var listaCognomi = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
// inserire cognome
do {
    var inputCognome = prompt('Inserisci il cognome');
}while(inputCognome.length < 2);
// capitalizza cognome
var cognomeUtente = inputCognome.charAt(0).toUpperCase() + inputCognome.slice(1).toLowerCase();
// mettere cognome capitalizato nella lista
listaCognomi.push(cognomeUtente);
//  lista in ordine alfabetico
listaCognomi.sort();
// cerchiamo la posizione dell'elemnto nell'array la assegno ad una var e gli aggiungiamo 1 per dargli la posizione umana. 
var indice = listaCognomi.indexOf(cognomeUtente) + 1;
// inizializziamo la variabiule i del contatore 

// creaiamo un ciclo while per aggiungere gli elementi alla <ol>
for (var i= 0; i < listaCognomi.length; i++){
    document.getElementById('cognomi').innerHTML += '<li>'+listaCognomi[i]+'</li>'; 
   
}
// scriviamo il messaggio con la posizione in cui il cognome e stato inserito 
document.getElementById('indice-cognome-utente').innerHTML ='il cognome e stato inserito alla posizione n. '+ indice;



