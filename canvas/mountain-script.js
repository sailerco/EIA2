"use strict";
var mountain;
(function (mountain_1) {
    let canvas = document.querySelector("canvas");
    drawBackground();
    drawSun();
    let mountain = canvas.getContext("2d");
    drawMountain({ x: 0, y: 300 }, 50, 200, "#533950", "#543c52");
    drawMountain({ x: 0, y: 350 }, 100, 200, "#4f2d48", "#4f2d48");
    drawMountain({ x: 0, y: 300 }, 20, 50, "#482641", "#553053");
    drawMountain({ x: 0, y: 400 }, 100, 300, "#391732", "#532c51");
    drawMountain({ x: 0, y: 500 }, 100, 300, "#2d0b27", "#391034");
    drawMountain({ x: 0, y: 500 }, 50, 100, "#2d0b27", "#260420");
    function drawBackground() {
        let crc2 = canvas.getContext("2d");
        let gradient = crc2.createLinearGradient(0, 20, 0, 200);
        // Add three color stops
        gradient.addColorStop(0, "#FFD7C5");
        gradient.addColorStop(.5, "#FEB59E");
        gradient.addColorStop(1, "#FF9E7A");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun() {
        let sun = canvas.getContext("2d");
        let sunGradient = sun.createLinearGradient(0, 120, 0, 200);
        // Add three color stops
        sunGradient.addColorStop(0, "#FEE199");
        sunGradient.addColorStop(.5, "#FFBA79");
        sunGradient.addColorStop(1, "#FEB471");
        sun.fillStyle = sunGradient;
        sun.strokeStyle = sunGradient;
        sun.beginPath();
        sun.arc(200, 150, 50, 0, 2 * Math.PI);
        sun.stroke();
        sun.fill();
    }
    function drawMountain(_position, _min, _max, _light, _dark) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        mountain.save();
        mountain.translate(_position.x, _position.y);
        /*         mountain.lineCap = "round"; */
        mountain.lineJoin = "round";
        mountain.beginPath();
        mountain.moveTo(0, 0);
        mountain.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            mountain.lineTo(x, y);
        } while (x < mountain.canvas.width);
        mountain.lineTo(x, 0);
        mountain.closePath();
        let grad = mountain.createLinearGradient(0, -_max, 0, 0);
        grad.addColorStop(0, _light);
        grad.addColorStop(0.5, _light);
        grad.addColorStop(1, _dark);
        mountain.fillStyle = grad;
        mountain.fill();
        mountain.restore();
    }
})(mountain || (mountain = {}));
//# sourceMappingURL=mountain-script.js.map