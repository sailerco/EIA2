"use strict";
let hello = prompt("Wie ist dein Name", "");
/* if (hello != "") {
    alert("Hallo " + hello);
} else {
    alert("Du hast kein Name?");
}  */
let div = document.getElementById("text");
if (hello != "") {
    let p = document.createElement("p").innerHTML = "aaa";
    div.appendChild(p);
}
else {
    /* alert("Du hast kein Name?"); */
}
//# sourceMappingURL=skript.js.map