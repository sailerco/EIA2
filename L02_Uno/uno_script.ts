namespace L02_UNO {
    let cardContent: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let card: Array<HTMLElement>  = [];
    let handCard: number;
    let openCard: Array<HTMLElement>  = [];
    let playersHand: Array<HTMLElement> = [];
    let pcHand: Array<HTMLElement> = [];
    let textOfCard: string;
    let colorOfCard: string;
    let textOfCard2: string;
    let colorOfCard2: string;

    let fieldPlayer: HTMLElement = document.getElementById("hand") as HTMLElement;
    let PC: HTMLElement = document.getElementById("PC") as HTMLElement;
    main();
    function main(): void {
        handCards();
        for (let i: number = 0; i < cardContent.length; i++) {
            writeOnCard(cardContent[i]);
            if (cardContent[i].toString() != "0")
                writeOnCard(cardContent[i]);
        }
        shuffel(card);
        handOutCards();
        openCard.push(card.shift()!);
        document.getElementById("uno")?.appendChild(openCard[0]).setAttribute("class", "open");
        document.getElementById("uno")?.appendChild(card[0]).setAttribute("class", "closed");
        card[0].addEventListener("click", play);
        /* card[0].addEventListener("click", draw); */
        //#region game
    }
    function handCards(): void {
        let askForCards: number = parseFloat(prompt("how many players (4-12)", "5")!);
        askForCards > 12 ? handCard = 12 : handCard < 4 ? handCard = 4 : handCard = askForCards;
    }
    function writeOnCard(_cardContent: string): void {
        for (let size of ["red", "green", "blue", "yellow"]) {
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("color", size);
            let span: HTMLSpanElement = document.createElement("span");
            span.innerHTML = _cardContent;
            div.appendChild(span);
            card.push(div);
        }
    }
    function shuffel(_card: Array<HTMLElement>): Array<HTMLElement> {
        let random: number;
        for (let i: number = 0; i < _card.length; i++) {
            random = Math.floor(Math.random() * (i + 1));
            [_card[i], _card[random]] = [_card[random], _card[i]]; //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        }
        console.log(_card);
        return _card;
    }
    function handOutCards(): void {
        let content: HTMLElement;
        for (let i: number = 0; i < handCard; i++) {
            content = card.shift()!;
            content.setAttribute("class", "player");
            playersHand.push(content);
            playersHand[i].addEventListener("click", play);
            fieldPlayer.appendChild(playersHand[i]);
            
            content = card.shift()!;
            content.setAttribute("class", "PC");
            pcHand.push(content);
            PC.appendChild(pcHand[i]);
        }
        console.log(playersHand);
        console.log(card);
    }

    function play(_event: MouseEvent): void {
        let clickCard: HTMLElement = <HTMLElement>_event.target;
        if (clickCard.classList.contains("player")) {
            textOfCard = clickCard.innerHTML;
            colorOfCard = clickCard.getAttribute("color")!;
            textOfCard2 = openCard[0].innerHTML;
            colorOfCard2 = openCard[0].getAttribute("color")!;

            if (textOfCard == textOfCard2 || colorOfCard == colorOfCard2) {
                clickCard.classList.replace("player", "open");

                playersHand.splice(playersHand.indexOf(clickCard), 1);
                fieldPlayer.removeChild(clickCard);

                openCard.unshift(clickCard);
                document.getElementById("uno")?.replaceChild(openCard[0], openCard[1]);

                if (playersHand.length == 0) {
                    let win: boolean = true;
                    gewonnen(win);
                } else {
                    setTimeout(function time(): void { pcTurn(); }, 1000);
                }
            }
        }
        if (clickCard.classList.contains("closed")) {
            clickCard.classList.replace("closed", "player");
            playersHand.push(card.shift()!);
            fieldPlayer.appendChild(clickCard);
            document.getElementById("uno")?.appendChild(card[0]).setAttribute("class", "closed");
            card[0].addEventListener("click", play);
            
            setTimeout(function time(): void { pcTurn(); }, 1000);
        }
    }
    function pcTurn(): void {
        console.log("Pc: " + pcHand);
        /* debugger; */
        for (let i: number = 0; i < pcHand.length; i++) {
            if (pcHand[i].innerHTML == openCard[0].innerHTML || pcHand[i].getAttribute("color")! == openCard[0].getAttribute("color")!) {
                pcHand[i].setAttribute("class", "open");
                PC.removeChild(pcHand[i]);
                openCard.unshift(pcHand[i]);
                document.getElementById("uno")?.replaceChild(openCard[0], openCard[1]);
                pcHand.splice(i, 1); 
                console.log("Legt:" + pcHand);
                break;
            }
            else if (i == pcHand.length - 1 && pcHand[i].innerHTML != openCard[0].innerHTML && pcHand[i].getAttribute("color")! != openCard[0].getAttribute("color")!) {
                pcHand.push(card.shift()!);
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
            let win: boolean = false;
            gewonnen(win);
        }
    }
    function gewonnen(_win: boolean): void {
        let div: HTMLElement = document.createElement("div");
        div.setAttribute("id", "container");
        let h1: HTMLElement = document.createElement("h1");
        h1.setAttribute("id", "winner");
        if (_win == true)
            h1.innerHTML = "Du hast gewonnen!";
        else
            h1.innerHTML = "PC hat gewonnen!";
        
        let reload: HTMLButtonElement = document.createElement("button");
        reload.innerHTML = "REMATCH";
        reload.setAttribute("id", "rematch");
        reload.addEventListener("click", load);

        document.body.replaceChild(div, document.getElementById("field")!);
        div.appendChild(h1);
        div.appendChild(reload);
    }
    function load(): void {
        window.location.reload();
    }
}