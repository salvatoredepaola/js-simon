





const testo = document.getElementById("randomNumber").innerText = numeri(2,5);
console.log(testo)

setTimeout(stop, 3 * 1000);

function stop() {
    document.getElementById("randomNumber").innerText = "";
}

setTimeout(domanda, 3.1 * 1000);

function domanda() {
    let domanda = parseInt(prompt("Quali numeri erano apparsi?"));
    console.log(domanda)
    if (domanda == testo) {
        console.log("bravo")
    } else{
        console.log("no")
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min)
}

function numeri(quantità, numeromassimo) {
    let randomNumber = [];
    while (randomNumber.length < quantità) {
        let nuovonumero = getRandomNumber(1, numeromassimo);
        if (randomNumber.includes(nuovonumero)) {
        } else{
            randomNumber.push(nuovonumero)
        }
    }
    return randomNumber;
}



