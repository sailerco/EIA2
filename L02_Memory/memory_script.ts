namespace L02_Memory {
    window.addEventListener("load", main);

    let cardContent: string[] = ["&#9728;", "&#9730;", "&#9731;", "&#9733;", "&#9752;", "&#9775;", "&#9787;", "&#9836;", "&#9984;", "&#9785;", "&#9972;", "&#10084;", "&#9825;", "&#9992;", "&#10006;", "&#10052;", "&#8258;", "&#8602;", "&#8611;", "&#10083;", "&#9826;", "&#9861;", "&#9834;", "xD", "y"];
    let card: Array<HTMLElement>  = [];
    let player: number;
    let matches: number;
    let openCards: number = 0;
    let content: string;
    let content2: string;
    let foundMatches: number = 0;
    let playersTurn: number = 1;

    function main(_event: Event): void {
        
        playerCount();
        
        let askForMatches: number = parseFloat(prompt("how many matches (5- 25)", "5")!);
        askForMatches > 25 ? matches = 25 : matches = askForMatches;
        if (matches > 10) {
            document.getElementById("memory")?.setAttribute("class", "bigger");
        }
        if (matches < 25) {
            cardContent.splice(matches, 25 - matches);
            console.log(cardContent);
        }
        for (let i: number = 0; i < matches; i++) {
            writeOnCard(cardContent[i]);
            writeOnCard(cardContent[i]);
        }
        shuffel(card);
        for (let i: number = 0; i < card.length; i++) {
            document.getElementById("memory")?.appendChild(card[i]);
            card[i].addEventListener("click", openCard);
        }
    }
    function playerCount(): void {
        let playerDIV = document.getElementById("playerSection") as HTMLElement;
        let askForPlayer: number = parseFloat(prompt("how many players (1-4)", "2")!);
        askForPlayer > 4 ? player = 4 : player = askForPlayer;
        for (let i: number = 1; i <= player; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("id", "player" + i);
            div.innerHTML = "Spieler " + i + "<br>";
            if (i == 1)
                div.setAttribute("class", "onTurn");
            playerDIV.appendChild(div);

            let score: HTMLSpanElement = document.createElement("span");
            score.setAttribute("id", "score" + i);
            score.innerHTML = "0";
            div.appendChild(score);
        }
    }
    function writeOnCard(_cardContent: string): void {
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", "hidden");
        let span: HTMLSpanElement = document.createElement("span");
        span.innerHTML = _cardContent;
        div.appendChild(span);
        
        card.push(div);
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
    function openCard(_event: MouseEvent): void {
        let clickCard: HTMLElement = <HTMLElement>_event.target;
        if (clickCard.classList.contains("hidden") && openCards < 2) {
            if (openCards == 0)
                content = clickCard.innerHTML;
            if (openCards == 1)
                content2 = clickCard.innerHTML;
            openCards++;
            clickCard.classList.replace("hidden", "visible");
        }
        if (openCards == 2)
            setTimeout(function time(): void { compare(clickCard); }, 1000);    
        
    }
    function compare(_clickCard: HTMLElement): void {
        let visibleCards: Array<HTMLElement> = card.filter(div => div.classList.contains("visible")); 
        if (content == content2) {
            for (let i: number = 0; i < visibleCards.length; i++) 
                visibleCards[i].classList.replace("visible", "taken");
            openCards = 0;
            score();
        } else {
            for (let i: number = 0; i < visibleCards.length; i++) 
                visibleCards[i].classList.replace("visible", "hidden");
            openCards = 0;
            nextPlayer();
        }
    }
    function score(): void {
        let score: number = parseInt(document.getElementById("score" + playersTurn)?.innerHTML.toString()!);
        score++;
        document.getElementById("score" + playersTurn)!.innerHTML = score + "";
        foundMatches++;
        if (foundMatches == matches)
            winner();
    }
    function nextPlayer(): void {
        if (playersTurn < player) {
            document.getElementById("player" + playersTurn)?.setAttribute("class", "onBreak");
            playersTurn++;
            document.getElementById("player" + playersTurn)?.setAttribute("class", "onTurn");
        }
        else {
            document.getElementById("player" + playersTurn)?.setAttribute("class", "onBreak");
            playersTurn = 1;
            document.getElementById("player1")?.setAttribute("class", "onTurn");
        }
            
    }
    function winner(): void {
        let win: HTMLDivElement = document.createElement("div");
        win.setAttribute("id", "winner");
        let score1: number = parseInt(document.getElementById("score1")?.innerHTML.toString()!);
        let score2: number = parseInt(document.getElementById("score2")?.innerHTML.toString()!);
        let score3: number = parseInt(document.getElementById("score3")?.innerHTML.toString()!);
        let score4: number = parseInt(document.getElementById("score4")?.innerHTML.toString()!);
        debugger;
        if (player == 1)
            win.innerHTML = "Spieler 1 hat gewonnen";
        if (player == 2)
            score2 > score1 ? win.innerHTML = "Spieler 2 hat gewonnen" : win.innerHTML = "Spieler 1 hat gewonnen";
        if (player == 3)
            score3 > score2 && score3 > score1 ? win.innerHTML = "Spieler 3 hat gewonnen" : score2 > score1 ? win.innerHTML = "Spieler 2 hat gewonnen" : win.innerHTML = "Spierl 1 hat gewonnen";
        if (player == 4)
            score4 > score3 && score4 > score2 && score4 > score1 ? win.innerHTML = "Spieler 4 hat gewonnen" 
            : score3 > score2 && score3 > score1 ? win.innerHTML = "Spieler 3 hat gewonnen" 
            : score2 > score1 ? win.innerHTML = "Spieler 2 hat gewonnen" 
            : win.innerHTML = "Spieler 1 hat gewonnen";
        
        document.body.appendChild(win);
        let restart: HTMLButtonElement = document.createElement("button");
        restart.innerHTML = "restart";
        document.body.appendChild(restart);
        restart.addEventListener("click", reload);
        function reload(): void {
            window.location.reload();
        }
    }
}