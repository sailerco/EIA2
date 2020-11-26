"use strict";
var L03_RPG;
(function (L03_RPG) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.getElementById("formular")?.addEventListener("change", handleChange);
        document.getElementById("formular")?.addEventListener("input", bmi);
        document.getElementById("formular")?.addEventListener("input", age);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        let char = document.querySelector("div#char");
        char.innerHTML = "";
        let gender = document.querySelector("select");
        char.innerHTML += "Geschlecht : " + gender.value + "<br>";
        for (let entry of formData) {
            let attribute = document.querySelector("[value='" + entry[1] + "']");
            console.log("[value='" + entry[1] + "']");
            if (attribute != null) {
                console.log(attribute.getAttribute("value"));
                char.innerHTML += attribute.name + ": " + attribute.getAttribute("value") + "<br>";
            }
            else if (entry[0] != "birthday" && entry[1] != "") {
                char.innerHTML += entry[0] + " : " + entry[1] + "<br>";
            }
            else if (entry[0] == "birthday" && entry[1] != "") {
                char.innerHTML += entry[0] + " : " + entry[1] + "<br>";
            }
        }
    }
    function bmi(_event) {
        let height = document.getElementById("height").valueAsNumber;
        let weight = document.getElementById("weight").valueAsNumber;
        //körpergewicht kg geteilt durch größe (m) im quadrat
        height /= 100;
        let bmi = weight / Math.pow(height, 2);
        document.getElementById("BMI").value = bmi.toFixed(2);
    }
    function age(_event) {
        let birth = document.getElementById("birthdate");
        console.log(birth);
    }
})(L03_RPG || (L03_RPG = {}));
//# sourceMappingURL=rpg-script.js.map