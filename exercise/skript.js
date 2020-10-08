"use strict";
let div = document.getElementById("text");
sayHello();
function sayHello() {
    let p = document.createElement("p");
    let hello = prompt("Wie ist dein Name", "");
    if (hello != "" && hello != null)
        p.innerHTML = "Hallo " + hello;
    else
        p.innerHTML = "Du hast kein Name?";
    console.log(p);
    div.appendChild(p);
}
/* if (hello != "") {
    alert("Hallo " + hello);
} else {
    alert("Du hast kein Name?");
}  */ 
//# sourceMappingURL=skript.js.map