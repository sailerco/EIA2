"use strict";
var L03;
(function (L03) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        document.getElementById("formular")?.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        let recipe = document.getElementById("recipe");
        recipe.innerHTML = "";
        for (let entry of formData) {
            debugger;
            let item = document.querySelector("[value='" + entry[1] + "']");
            console.log(item);
            if (entry[1] != null && entry[1] != "") {
                recipe.innerHTML += entry[0] + " " + entry[1] + "<br>";
            }
        }
    }
})(L03 || (L03 = {}));
//# sourceMappingURL=form.js.map