"use strict";
var L06_Hexenkessel;
(function (L06_Hexenkessel) {
    async function getData() {
        let response = await fetch("data.json");
        let content = await response.text();
        let data = JSON.parse(content);
        console.log("DATA:");
        console.log(data);
        L06_Hexenkessel.generateContent(data);
    }
    L06_Hexenkessel.getData = getData;
    async function sendPotion(_event) {
        console.log("send Potion");
        let url = "https://cocosailer.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + query.toString();
        console.log(url);
        let response = await fetch(url);
        console.log(response);
        /* let responseReply: string = await response.text();
        console.log(responseReply); */
        let reply = await response.json();
        console.log(reply);
        alert("Potion sent!");
    }
    L06_Hexenkessel.sendPotion = sendPotion;
})(L06_Hexenkessel || (L06_Hexenkessel = {}));
//# sourceMappingURL=client.js.map