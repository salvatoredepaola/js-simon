


const randomNumber = [];
while (randomNumber.length < 5) {
    const nuovonumero = getRandomNumber(1, 5);
    if (randomNumber.includes(nuovonumero)) {
    } else{
        randomNumber.push(nuovonumero)
    }
}
const testo = document.getElementById("randomNumber").innerText = randomNumber;

console.log("Random Number: ",randomNumber)

setTimeout(cancellaNumeri, 3 * 1000);

setTimeout(function () {
    
    const numeriUtente = domanda();

    const numeriIndovinati = confronto();

    


    
}, 4 * 1000);

function cancellaNumeri() {
    document.getElementById("randomNumber").innerText = "";
}

function domanda() {
    const numeriUtente = [];

    while(numeriUtente.length < 5) {

        const numeroDaInserire = numeriUtente.length + 1;
        const numero = parseInt( prompt(`Inserisci il ${numeroDaInserire}° numero` ) );

        if( numeriUtente.includes(numero)==false && numero>0 ) {
            numeriUtente.push(numero);
        }

    }

    return numeriUtente;

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min)
}

function confronto(numeriUtente, randomNumber) {

    const indovinati = [];

    for (let i = 0; i < randomNumber.length; i++) {
        const currentNumber = randomNumber[i];

        if (numeriUtente.includes(currentNumber)) {
            indovinati.push(currentNumber)
        }
        
    }

    return indovinati;

}



