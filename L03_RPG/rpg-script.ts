namespace L03_RPG {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        document.getElementById("formular")?.addEventListener("change", handleChange);
        document.getElementById("formular")?.addEventListener("input", bmi); 
        document.getElementById("formular")?.addEventListener("input", age); 
        
    }
    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        let char: HTMLDivElement = <HTMLDivElement>document.querySelector("div#char");
        char.innerHTML = "";
        let gender: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        char.innerHTML += "Geschlecht : " + gender.value + "<br>";
        for (let entry of formData) {
                let attribute: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
                console.log("[value='" + entry[1] + "']");
                if (attribute != null) {
                    console.log(attribute.getAttribute("value"));
                    char.innerHTML += attribute.name + ": " + attribute.getAttribute("value")! + "<br>";
                } else if (entry[0] != "birthday" && entry[1] != "") {
                    char.innerHTML += entry[0] + " : " + entry[1] + "<br>";
                } else if (entry[0] == "birthday" && entry[1] != "") {
                    char.innerHTML += entry[0] + " : " + entry[1] + "<br>";
                }
        }
    }
    function bmi(_event: Event): void {
        let height: number = (<HTMLInputElement>document.getElementById("height")).valueAsNumber;
        let weight: number = (<HTMLInputElement>document.getElementById("weight")).valueAsNumber;
        //körpergewicht kg geteilt durch größe (m) im quadrat
        height /= 100;
        let bmi: number = weight / Math.pow(height, 2);
        (<HTMLOutputElement>document.getElementById("BMI")).value = bmi.toFixed(2);
    }
    function age(_event: Event): void {
        let birth = (<HTMLInputElement>document.getElementById("birthdate")); 
        console.log(birth);
    }  
}