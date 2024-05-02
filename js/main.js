
// seleziono la griglia tramite id
let griglia = document.getElementById('griglia');
// seleziono il bottone tramite id
let bottone = document.getElementById('btn');
//creo l'event listener al bottone crea quadrati e riporto la funzione crea quadrati
bottone.addEventListener('click', cicloCreazione,) // -------BONUS 2--------

let displayMode = document.getElementById('mode');





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
    // RIMUOVO TUTTE LE CLASSI AGGIUNTE NEI CLICK PRECEDENTI
    griglia.classList.remove('w-100', 'w-81', 'w-49')
    //CREO UNA VARIABILE PER IL NUMERO DI QUADRATI DA INSERIRE RISPETTO ALLA DIFFICOLTA SCELTA NEL SELECT, ---BONUS 3---
    let numQuadrati = document.getElementById('numQuadrati').value;
    // AGGIUNGO LA LARGHEZZA ALLA GRIGLIA IN BASE ALLA DIFFICOLTA (NUMERO QUADRATI)
    if (numQuadrati == 100) {
        griglia.classList.add('w-100');
        displayMode.innerHTML = '---Difficolta Easy 100 quadrati---'
    } else if (numQuadrati == 81) {
        griglia.classList.add('w-81');
        displayMode.innerHTML = '---Difficolta Medium 81 quadrati---'
    } else if (numQuadrati == 49) {
        griglia.classList.add('w-49');
        displayMode.innerHTML = '---Difficolta Hard 49 quadrati---'
    }

    console.log(numQuadrati)
    // CREO QUADRATI IN BASE ALLA DIFFICOLTA
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


