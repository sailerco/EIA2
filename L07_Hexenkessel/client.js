"use strict";
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    async function getData() {
        let response = await fetch("data.json");
        let content = await response.text();
        let data = JSON.parse(content);
        console.log("DATA:");
        console.log(data);
        L07_Hexenkessel.generateContent(data);
    }
    L07_Hexenkessel.getData = getData;
    async function sendPotion(_event) {
        console.log("send Potion");
        let url = "https://cocosailer.herokuapp.com/send";
        /* let url: string = "http://localhost:5001/send"; */
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        console.log(document.getElementById("action")?.innerText);
        url = url + "?" + query.toString();
        console.log(url);
        let select = document.querySelector("select");
        let textarea = document.querySelector("textarea");
        if (select)
            url += "&Wirkung=" + select.value;
        if (textarea.value != "")
            url += "&Nebenwirkungen=" + textarea.value;
        url += "&Action=" + document.getElementById("action")?.innerText;
        if (document.getElementById("total")?.innerText != "")
            url += "&TotalPrice=" + document.getElementById("total")?.innerText;
        let response = await fetch(url);
        console.log(response);
        let responseReply = await response.text();
        console.log(responseReply);
        alert("Potion sent!");
    }
    L07_Hexenkessel.sendPotion = sendPotion;
    async function getPotion(_event) {
        let url = "https://cocosailer.herokuapp.com/retrieve";
        /* let url: string = "http://localhost:5001/retrieve"; */
        let response = await fetch(url);
        let reply = await response.text();
        if (reply != "") {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = reply;
            document.body.appendChild(paragraph);
        }
    }
    L07_Hexenkessel.getPotion = getPotion;
})(L07_Hexenkessel || (L07_Hexenkessel = {}));
//# sourceMappingURL=client.js.map