
let div: HTMLElement = document.getElementById("text") as HTMLElement;
sayHello();
function sayHello(): void{
    let p: HTMLParagraphElement = document.createElement("p");
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