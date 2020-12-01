namespace L07_Hexenkessel {
    interface Rezept {
        _id: string;
        Trankname?: string;
        Wirkungsdauer?: string;
        Wirkung?: string;
        Nebenwirkung?: string;
        Action?: string;
        TotalPrice?: string;
    }
    export async function getData(): Promise<void> {
        let response: Response = await fetch("data.json"); 
        let content: string = await response.text();
        let data = JSON.parse(content);  
        console.log("DATA:");
        console.log(data);
        generateContent(data);    
    }
    export async function sendPotion(_event: Event): Promise<void> {
        console.log("send Potion");
        let url: string = "https://cocosailer.herokuapp.com/send";
        /* let url: string = "http://localhost:5001/send"; */
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(document.getElementById("action")?.innerText);
        url = url + "?" + query.toString();
        console.log(url);
        let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        let textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector("textarea");
        if (select)
            url += "&Wirkung=" + select.value;
        if (textarea.value != "")
            url += "&Nebenwirkungen=" + textarea.value;
        url += "&Action=" + document.getElementById("action")?.innerHTML;
        if (document.getElementById("total")?.innerText != "")
            url += "&TotalPrice=" + document.getElementById("total")?.innerText;
        let response: Response = await fetch(url);
        console.log(response);
        let responseReply: string = await response.text();
        console.log(responseReply);
        alert("Potion sent!");
    }
    export async function getPotion (_event: Event): Promise<void> {
        let url: string = "https://cocosailer.herokuapp.com/retrieve";
        /* let url: string = "http://localhost:5001/retrieve";  */  
        let response: Response = await fetch(url);
        let reply: Rezept[] = JSON.parse(await response.text());
        document.getElementById("output")!.innerHTML = "";
        for (let i: number = 0; i < reply.length; i++) {
            let div: HTMLDivElement = document.createElement("div");  
            div.setAttribute("class", "vorschau");
            let p: HTMLElement = document.createElement("p");
            p.innerHTML += "<h4>Trankname: " + reply[i].Trankname + "</h4><br>";
            if (reply[i].Nebenwirkung != undefined)
                p.innerHTML += "<b>Beschreibung, Nebenwirkungen:</b> " + reply[i].Nebenwirkung + "<br>";
            p.innerHTML += "<b>Wirkung:</b> " + reply[i].Wirkung + "<br>" + "<b>Wirkungsdauer:</b> " + reply[i].Wirkungsdauer + " min <br>";
            if (reply[i].Nebenwirkung != "")
                p.innerHTML += "<b>Anweisungen:</b> " + reply[i].Action + "<br>";   
            if (reply[i].TotalPrice != undefined)
                p.innerHTML += "<b>" + reply[i].TotalPrice + "</b><br>";
            div.appendChild(p);
            document.getElementById("output")!.appendChild(div);           
        }   
    }
    export async function deleteDatabase(_event: Event): Promise<void> {
        let url: string = "https://cocosailer.herokuapp.com/delete";
        /* let url: string = "http://localhost:5001/delete";  */  
        let response: Response = await fetch(url);
        document.getElementById("output")!.innerHTML = "";      
    }
}