"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    function drawBackground() {
        let gradient = L10_Inheritance.crc2.createLinearGradient(0, 0, 0, 200);
        // Add three color stops
        gradient.addColorStop(0, "#FFD7C5");
        gradient.addColorStop(.5, "#FEB59E");
        gradient.addColorStop(1, "#FF9E7A");
        L10_Inheritance.crc2.fillStyle = gradient;
        L10_Inheritance.crc2.fillRect(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height);
    }
    L10_Inheritance.drawBackground = drawBackground;
    function drawSun(_radius) {
        let position = new L10_Inheritance.Vector(150, 100);
        let crc2 = L10_Inheritance.canvas.getContext("2d");
        let crc2Gradient = crc2.createLinearGradient(0, 120, 0, 200);
        // Add three color stops
        crc2Gradient.addColorStop(0, "#FEE199");
        crc2Gradient.addColorStop(.5, "#FFBA79");
        crc2Gradient.addColorStop(1, "#FEB471");
        crc2.fillStyle = crc2Gradient;
        crc2.beginPath();
        crc2.arc(position.x, position.y, _radius, 0, 2 * Math.PI);
        crc2.fill();
    }
    L10_Inheritance.drawSun = drawSun;
    function drawMountainBack(_start, _min, _max, _color) {
        console.log("crc2s", _start, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10_Inheritance.crc2.save();
        L10_Inheritance.crc2.translate(_start.x, _start.y);
        /*         crc2.lineCap = "round"; */
        L10_Inheritance.crc2.lineJoin = "round";
        L10_Inheritance.crc2.beginPath();
        L10_Inheritance.crc2.moveTo(0, 0);
        L10_Inheritance.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_Inheritance.crc2.lineTo(x, y);
        } while (x < L10_Inheritance.crc2.canvas.width);
        L10_Inheritance.crc2.lineTo(x, 0);
        L10_Inheritance.crc2.closePath();
        L10_Inheritance.crc2.fillStyle = _color;
        L10_Inheritance.crc2.fill();
        L10_Inheritance.crc2.restore();
    }
    L10_Inheritance.drawMountainBack = drawMountainBack;
    function drawMountain() {
        let crc2 = L10_Inheritance.canvas.getContext("2d");
        crc2.save();
        crc2.fillStyle = "rgb(249, 249, 252)";
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(0, 180);
        crc2.lineTo(400, 200);
        crc2.lineTo(800, 180);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    L10_Inheritance.drawMountain = drawMountain;
    function drawTrees(_number) {
        L10_Inheritance.crc2.save();
        let yAxis = 240;
        for (let i = 0; i < _number; i++) {
            let position = new L10_Inheritance.Vector(0, 0);
            position.random(800, 600, 0, 240);
            while (position.x < 650 && position.x > 240) {
                position.random(800, 600, 0, 240);
            }
            L10_Inheritance.crc2.fillStyle = "brown";
            L10_Inheritance.crc2.fillRect(position.x, yAxis, 16, 40);
            L10_Inheritance.crc2.fillStyle = "green";
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(position.x - 25, yAxis);
            L10_Inheritance.crc2.lineTo((position.x - 20) + 61, yAxis);
            L10_Inheritance.crc2.lineTo(position.x + 8, yAxis - 50);
            L10_Inheritance.crc2.lineTo(position.x - 25, yAxis);
            L10_Inheritance.crc2.lineCap = "round";
            L10_Inheritance.crc2.strokeStyle = "darkgreen";
            L10_Inheritance.crc2.stroke();
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.fillStyle = "green";
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(position.x - 20, yAxis - 30);
            L10_Inheritance.crc2.lineTo((position.x - 20) + 56, yAxis - 30);
            L10_Inheritance.crc2.lineTo(position.x + 8, yAxis - 80);
            L10_Inheritance.crc2.lineTo(position.x - 20, yAxis - 30);
            L10_Inheritance.crc2.lineCap = "round";
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.stroke();
            L10_Inheritance.crc2.fill();
            yAxis += 15;
        }
    }
    L10_Inheritance.drawTrees = drawTrees;
    function drawSlope(_start, _end) {
        L10_Inheritance.crc2.beginPath();
        L10_Inheritance.crc2.moveTo(_start.x, _start.y + 50);
        L10_Inheritance.crc2.bezierCurveTo(_start.x - 50, _start.y + 150, _start.x - 20, _start.y + 100, _end.x, _end.y + 50);
        L10_Inheritance.crc2.lineTo(_end.x, 600);
        L10_Inheritance.crc2.lineTo(_end.x - 300, 600);
        L10_Inheritance.crc2.bezierCurveTo(_start.x - 200, _start.y + 200, _start.x - 220, _start.y + 150, _start.x - 150, _start.y + 50);
        L10_Inheritance.crc2.closePath();
        L10_Inheritance.crc2.fillStyle = "#F5F6FD";
        L10_Inheritance.crc2.fill();
    }
    L10_Inheritance.drawSlope = drawSlope;
    function randomColor() {
        let letter = "0123456789ABCDEF"; //chars for hexadezimal code
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)]; //16 weil 0-F 16 Zeichen sind
        }
        return color;
    }
    L10_Inheritance.randomColor = randomColor;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=canvas_script.js.map