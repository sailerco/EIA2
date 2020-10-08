let hello = prompt("Wie ist dein Name", "");
/* if (hello != "") {
    alert("Hallo " + hello);
} else {
    alert("Du hast kein Name?");
}  */
let div: HTMLElement = document.getElementById("text") as HTMLElement;
if (hello != "") {
    let p: HTMLElement = document.createElement("p").innerHTML = "aaa";
    div.appendChild(p);
} else {
    /* alert("Du hast kein Name?"); */
} 