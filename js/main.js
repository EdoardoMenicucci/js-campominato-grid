
// seleziono la griglia tramite id
let griglia = document.getElementById('griglia');
// seleziono il bottone tramite id
let bottone = document.getElementById('btn');
//creo l'event listener al bottone crea quadrati e riporto la funzione crea quadrati
bottone.addEventListener('click', cicloCreazione,) // -------BONUS 2--------





// CREO LA FUNZIONE DA UTILIZZARE NEL CICLO SOTTOSTANTE PER CREARE IL QUADRATO
function creaQuadrato(index) {
    // CREO UN DIV
    nuovoQuadrato = document.createElement('div');
    // AGGIUNGO LA CLASSE SQUARE
    nuovoQuadrato.classList.add('square');
    // INNERTEXT VERRA CAMBATO CON IL VALORE PREFERITO (IN QUESTO CASO IL NUMERO DEL GIRO TRA 1 E 100)
    nuovoQuadrato.innerText = index
    // AGGIUNGO AL QUADRATO CREATO UN EVENT LISTNER CHE RIPORTA LA FUNZIONE DI CAMBIO COLORE
    nuovoQuadrato.addEventListener('click', cambioColore)
    // INSERISCO IL QUADRATO NELLA GRIGLIA IN HTML
    griglia.append(nuovoQuadrato)

    // console.log('sono nella funzione creazione quadrato')
}

// CREO LA FUNZIONE PER RIPETERE LA CREAZIONE DEL QUADRATO 100 VOLTE
function cicloCreazione() {
    // SVUOTO TUTTA LA GRIGLIA AL SECONDO PRESS DEL BOTTONE
    griglia.innerHTML = '';

    //CREO UNA VARIABILE PER IL NUMERO DI QUADRATI DA INSERIRE RISPETTO ALLA DIFFICOLTA SCELTA NEL SELECT, ---BONUS 3---
    let numQuadrati = document.getElementById('numQuadrati').value;

    console.log(numQuadrati)

    for (let i = 1; i <= numQuadrati; i++) {
        // RIPORTO LA FUNZIONE DI CREAZIONE DEL QUADRATO MA IMPOSTO IL CONTATORE DI CICLO COME INDICE
        creaQuadrato(i);

        // console.log('sono nel for')
    }
}

// CREO LA FUNZIONE CON TOGGLE PER RIMUOVERE O AGGIUNGERE LA CLASSE DEL BACKGROUND BLU
function cambioColore() {
    // DEVO IMPOSTARE COME SOGGETTO 'THIS' ALTRIMENTI MI PRENDE SOLTANTO L'ULTIMO ELEMENTO IN LISTA IL NUMERO 100
    this.classList.toggle('blu');
    // CREO UNA VARIABILE NUMERO CON L'INNERTEXT DELL ELEMENTO SCELTO
    let numero = this.innerText
    // STAMPO IN CONSOLE IL NUMERO SCELTO
    console.log(numero)
    // console.log('sono nel cambio colore');
}


