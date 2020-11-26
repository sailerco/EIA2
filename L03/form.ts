namespace L03 {
    window.addEventListener("load", handleload);
    function handleload(_event: Event): void {
        document.getElementById("formular")?.addEventListener("change", handleChange);
    }
    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        let recipe: HTMLDivElement = <HTMLDivElement>document.getElementById("recipe");
        recipe.innerHTML = "";
        for (let entry of formData) {
            debugger;
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            console.log(item);
            if (entry[1] != null && entry[1] != "") {
                recipe.innerHTML += entry[0] + " " + entry[1] + "<br>";
            } 
        }    
    }
}