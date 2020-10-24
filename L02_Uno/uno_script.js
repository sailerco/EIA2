"use strict";
var L02_UNO;
(function (L02_UNO) {
    let cardContent = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let card = [];
    let handCard;
    let openCard = [];
    let playersHand = [];
    let pcHand = [];
    let textOfCard;
    let colorOfCard;
    let textOfCard2;
    let colorOfCard2;
    let fieldPlayer = document.getElementById("hand");
    let PC = document.getElementById("PC");
    main();
    function main() {
        handCards();
        for (let i = 0; i < cardContent.length; i++) {
            writeOnCard(cardContent[i]);
            if (cardContent[i].toString() != "0")
                writeOnCard(cardContent[i]);
        }
        shuffel(card);
        handOutCards();
        openCard.push(card.shift());
        document.getElementById("uno")?.appendChild(openCard[0]).setAttribute("class", "open");
        document.getElementById("uno")?.appendChild(card[0]).setAttribute("class", "closed");
        card[0].addEventListener("click", play);
        /* card[0].addEventListener("click", draw); */
        //#region game
    }
    function handCards() {
        let askForCards = parseFloat(prompt("how many players (4-12)", "5"));
        askForCards > 12 ? handCard = 12 : handCard < 4 ? handCard = 4 : handCard = askForCards;
    }
    function writeOnCard(_cardContent) {
        for (let size of ["red", "green", "blue", "yellow"]) {
            let div = document.createElement("div");
            div.setAttribute("color", size);
            let span = document.createElement("span");
            span.innerHTML = _cardContent;
            div.appendChild(span);
            card.push(div);
        }
    }
    function shuffel(_card) {
        let random;
        for (let i = 0; i < _card.length; i++) {
            random = Math.floor(Math.random() * (i + 1));
            [_card[i], _card[random]] = [_card[random], _card[i]]; //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        }
        console.log(_card);
        return _card;
    }
    function handOutCards() {
        let content;
        for (let i = 0; i < handCard; i++) {
            content = card.shift();
            content.setAttribute("class", "player");
            playersHand.push(content);
            playersHand[i].addEventListener("click", play);
            fieldPlayer.appendChild(playersHand[i]);
            content = card.shift();
            content.setAttribute("class", "PC");
            pcHand.push(content);
            PC.appendChild(pcHand[i]);
        }
        console.log(playersHand);
        console.log(card);
    }
    function play(_event) {
        let clickCard = _event.target;
        if (clickCard.classList.contains("player")) {
            textOfCard = clickCard.innerHTML;
            colorOfCard = clickCard.getAttribute("color");
            textOfCard2 = openCard[0].innerHTML;
            colorOfCard2 = openCard[0].getAttribute("color");
            if (textOfCard == textOfCard2 || colorOfCard == colorOfCard2) {
                clickCard.classList.replace("player", "open");
                playersHand.splice(playersHand.indexOf(clickCard), 1);
                fieldPlayer.removeChild(clickCard);
                openCard.unshift(clickCard);
                document.getElementById("uno")?.replaceChild(openCard[0], openCard[1]);
                if (playersHand.length == 0) {
                    let win = true;
                    gewonnen(win);
                }
                else {
                    setTimeout(function time() { pcTurn(); }, 1000);
                }
            }
        }
        if (clickCard.classList.contains("closed")) {
            clickCard.classList.replace("closed", "player");
            playersHand.push(card.shift());
            fieldPlayer.appendChild(clickCard);
            document.getElementById("uno")?.appendChild(card[0]).setAttribute("class", "closed");
            card[0].addEventListener("click", play);
            setTimeout(function time() { pcTurn(); }, 1000);
        }
    }
    function pcTurn() {
        console.log("Pc: " + pcHand);
        /* debugger; */
        for (let i = 0; i < pcHand.length; i++) {
            if (pcHand[i].innerHTML == openCard[0].innerHTML || pcHand[i].getAttribute("color") == openCard[0].getAttribute("color")) {
                pcHand[i].setAttribute("class", "open");
                PC.removeChild(pcHand[i]);
                openCard.unshift(pcHand[i]);
                document.getElementById("uno")?.replaceChild(openCard[0], openCard[1]);
                pcHand.splice(i, 1);
                console.log("Legt:" + pcHand);
                break;
            }
            else if (i == pcHand.length - 1 && pcHand[i].innerHTML != openCard[0].innerHTML && pcHand[i].getAttribute("color") != openCard[0].getAttribute("color")) {
                pcHand.push(card.shift());
                pcHand[i + 1].setAttribute("class", "PC");
                PC.appendChild(pcHand[i + 1]);
                document.getElementById("uno")?.appendChild(card[0]).setAttribute("class", "closed");
                card[0].addEventListener("click", play);
                console.log("No:" + pcHand);
                break;
            }
        }
        console.log(pcHand);
        if (pcHand.length == 0) {
            let win = false;
            gewonnen(win);
        }
    }
    function gewonnen(_win) {
        let div = document.createElement("div");
        div.setAttribute("id", "container");
        let h1 = document.createElement("h1");
        h1.setAttribute("id", "winner");
        if (_win == true)
            h1.innerHTML = "Du hast gewonnen!";
        else
            h1.innerHTML = "PC hat gewonnen!";
        let reload = document.createElement("button");
        reload.innerHTML = "REMATCH";
        reload.setAttribute("id", "rematch");
        reload.addEventListener("click", load);
        document.body.replaceChild(div, document.getElementById("field"));
        div.appendChild(h1);
        div.appendChild(reload);
    }
    function load() {
        window.location.reload();
    }
})(L02_UNO || (L02_UNO = {}));
//# sourceMappingURL=uno_script.js.map