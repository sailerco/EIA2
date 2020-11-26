namespace L03_Hexenkessel {
    document.getElementById("formular")?.addEventListener("change", handleChange);
    document.getElementById("time")?.addEventListener("input", slider);
    document.getElementById("heatTime")?.addEventListener("input", slider);
    document.getElementById("endTime")?.addEventListener("input", slider);
    document.getElementById("echse_value")?.addEventListener("input", slider);
    document.getElementById("unicorn_value")?.addEventListener("input", slider);
    document.getElementById("flubberwurmschleim_value")?.addEventListener("input", slider);
    document.getElementById("gift_value")?.addEventListener("input", slider);
    
    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        let total: number = 0; 
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#recipe");
        recipe.innerHTML = "<h1>Rezept</h1>";
        let basic: HTMLSpanElement = document.createElement("span");
        basic.innerHTML = "<h2>Allgemein</h2>";
        recipe.appendChild(basic);
        let zutaten: HTMLSpanElement = document.createElement("span");
        zutaten.innerHTML = "<h2>Zutaten</h2>";
        recipe.appendChild(zutaten);
        let span: HTMLSpanElement = document.createElement("span");
        span.innerHTML = "<h2>Anweisungen</h2>";
        recipe.appendChild(span);
        /* let inputs: NodeListOf<HTMLSelectElement> = document.querySelectorAll("select");
        console.log(inputs); */
        let name: boolean = false;
        console.log(name);
        let textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector("textarea");
        let select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        let stir: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#stir");
        for (let entry of formData) {
            console.log(JSON.stringify(entry));
            /* debugger; */
            let attribute: HTMLInputElement = <HTMLInputElement>document.querySelector("[name='" + entry[0] + "']");
            if (entry[0] == "ingredients") {
                attribute = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                let anzahl: string = (<HTMLInputElement>document.getElementById(attribute.getAttribute("id") + "_value")).value;
                let price: number = parseInt(anzahl) * parseInt(attribute.getAttribute("price")!);

                if (attribute.id == "rat" || attribute.id == "spider" || attribute.id == "aal" || attribute.id == "blutegel")
                    zutaten.innerHTML +=  anzahl + " x ";
                else
                    zutaten.innerHTML +=  anzahl + " ml ";
                zutaten.innerHTML += attribute.getAttribute("value")! + " " + "<i>" + priceInCurrency(price) + "</i><br>";
                total += price;
            } else if (entry[0] == "Zaubertrank" && entry[1] != "") {
                console.log("wow");
                name = true;
                basic.innerHTML += entry[0] + " : " + entry[1] + "<br>";
                basic.innerHTML += "Risiken und Nebenwirkungen <br>" + textarea.value + "<br>";
                basic.innerHTML += "Wirkung: " + select.value + "<br>";
            }
            else if (entry[0] == "Wirkungsdauer" && entry[1] != "") {
                basic.innerHTML += entry[0] + " : " + entry[1] + "<br>";
            }
            /* else if (entry[1] == "") {

            }  */else if (entry[1] != "" ) {
                if (entry[0] == "Rührdauer")
                    span.innerHTML += " Rührart: " + stir.value + "<br>";    
                span.innerHTML += entry[0] + " : " + entry[1] + "<br>";
            }  else if (attribute != null) {
                span.innerHTML += attribute.name + ": " + attribute.getAttribute("value")! + "<br>";
            }  
        }
        zutaten.innerHTML += "Gesamtpreis: " + priceInCurrency(total);
    }
    function slider(_event: Event): void {
        let x: string = (<HTMLInputElement>_event.target).value;
        let y: string = (<HTMLInputElement>_event.target).id;
        console.log(x);
        (<HTMLInputElement>document.getElementById("bubble" + y)).value = x;
    }
    function priceInCurrency(_price: number): string { //price in Knuts
        let knut: string;
        let sickel: string;
        let gallonen: string;
        if (_price < 29) {
            return _price.toString() + " Knut ";
        } else if (_price < 493) {
            sickel = (_price / 29).toFixed(0) + " Sickel ";  
            knut = (_price % 29).toFixed(0) + " Knut ";
            return sickel + knut;
        } else {
            gallonen = (_price / 493).toFixed(0) + " Gallonen ";
            _price %= 493;
            sickel = (_price / 29).toFixed(0) + " Sickel ";
            knut = (_price % 29).toFixed(0) + " Knut ";
            return gallonen + sickel + knut;
        }
    }
}  