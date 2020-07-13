var listaCognomi = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
// inserire cognome
var inputCognome = prompt('Inserisci il cognome');
// capitalizza cognome
var cognomeUtente = inputCognome.charAt(0).toUpperCase() + inputCognome.slice(1).toLowerCase();
// mettere cognome capitalizato nella lista
listaCognomi.push(cognomeUtente);
//  lista in ordine alfabetico
listaCognomi.sort();
// cerchiamo la posizione dell'elemnto nell'array la assegno ad una var e gli aggiungiamo 1 per dargli la posizione umana. 
var indice = listaCognomi.indexOf(cognomeUtente) + 1;
// inizializziamo la variabiule i del contatore 
var i = 0;
// creaiamo un ciclo while per aggiungere gli elementi alla <ol>
while (i < listaCognomi.length){
    document.getElementById('cognomi').innerHTML += '<li>'+listaCognomi[i]+'</li>'; 
    i++;
}
// scriviamo il messaggio con la posizione in cui il cognome e stato inserito 
document.getElementById('indice-cognome-utente').innerHTML ='il cognome e stato inserito alla posizione n. '+ indice;



