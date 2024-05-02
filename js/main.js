
// seleziono la griglia tramite id
let griglia = document.getElementById('griglia');
// seleziono il bottone tramite id
let bottone = document.getElementById('btn');
//creo l'event listener al bottone crea quadrati e riporto la funzione crea quadrati
bottone.addEventListener('click', cicloCreazione,) // -------BONUS 2--------
// SELEZIONO UN H4 PER STAMPARE IN PAGINA LA DIFFICOLTA SCELTA DALL UTENTE
let displayMode = document.getElementById('mode');
// CREO UNA LISTA PER LE BOMBE VUOTA
let listaBombe = [];
// CREO IL PUNTEGGIO
let punteggio = 0;
// PRENDO H4 DEL PUNTEGGIO NELL HTML
let pointOnScreen = document.getElementById('punteggio');
// CREO UNA VARIABILE D'APPOGGIO PER NON ROMPERE IL GIOCO
let game = true;


// CREO LA FUNZIONE DA UTILIZZARE NEL CICLO SOTTOSTANTE PER CREARE IL QUADRATO
function creaQuadrato(index) {
    // CREO UN DIV
    nuovoQuadrato = document.createElement('div');
    // AGGIUNGO LA CLASSE SQUARE
    nuovoQuadrato.classList.add('square');
    // AGGIUNGO AL QUADRATO UN ID UNIVOCO PER OGNIUNO DI LORO PER POI RICHIAMARLI IN SEGUITO
    nuovoQuadrato.id = index
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
    // SVUOTO LA LISTA BOMBE AD OGNI CAMBIO DI DIFFICOLTA
    listaBombe = [];
    // RESETTO IL PUNTEGGIO AD OGNI CAMBIO DI DIFFICOLTA
    punteggio = 0
    //GAME TRUE NOT OVER
    game = true
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

    while (listaBombe.length <= (numQuadrati / 2 - 3)) {
        let bomba = Math.floor(Math.random() * numQuadrati) + 1;
        // SE LA LISTA NON INCLUDE LA BOMBA GENERATA LA AGGIUNGO ALTRIMENTI RIPETO IL CICLO 
        if (!listaBombe.includes(bomba)) {
            listaBombe.push(bomba);
        }
    }

    console.log(listaBombe)

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
    if (game == true) {
        this.classList.toggle('blu');
    }
    // SE HA L-ID CORRISPONDENTE AD UNA DELLE BOMBE RESETTO IL CONTATORE E IL GIOCO,
    //ALTRIMENTI AUMENTO IL PUNTEGGIO
    if (listaBombe.includes(parseInt(this.id))) {
        //CREO UNA LISTA DI QUADRATI
        listaQuadrati = document.querySelectorAll('.square');
        // MOSTRO LE BOMBE PRESENTI A FINE GAME
        game = false
        console.log('hai perso')
        //RESETTO IL PUNTEGGIO
        punteggio = 0;


        // RIMUOVO TUTTE LE CASELLE COLORATE IN CASO DI GAMEOVER E COLORO DI ROSSO LE BOMBE CHE ERANO PRESENTI
        for (let i = 0; i < listaQuadrati.length; i++) {
            if (listaQuadrati[i].classList.contains('blu')) {
                listaQuadrati[i].classList.remove('blu')
            }       // MOSTRO IN ROSSO LE BOMBE A FINE GIOCO
            if (listaBombe.includes(i)) {
                listaQuadrati[i - 1].classList.add('red')
                console.log('red')
            }

        }
        // SVUOTO LA LISTA BOMBE
        listaBombe = [];
    } else {

        if (game == true) {
            punteggio += 50;
        } //CASO DI VITTORIA SULL ULTIMO -------BONUS----------
        if (document.querySelectorAll('.blu').length >= (listaQuadrati.length / 2 - 1)) {
            alert('HAI VINTO!')
        }
    }
    console.log(parseInt(this.id), punteggio)

    pointOnScreen.innerHTML = `Il tuo punteggio: ${punteggio}`

}

