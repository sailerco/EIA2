namespace L07_Hexenkessel {
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
        url += "&Action=" + document.getElementById("action")?.innerText;
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
        /* let url: string = "http://localhost:5001/retrieve"; */   
        let response: Response = await fetch(url);
        let reply: string = await response.text();
        if (reply != "") {
            let paragraph: HTMLElement = document.createElement("p");
            paragraph.innerHTML = reply;
            document.body.appendChild(paragraph);       
        }
         
    }
}