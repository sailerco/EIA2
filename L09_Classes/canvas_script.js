"use strict";
var L09_Classes;
(function (L09_Classes) {
    function drawBackground() {
        let gradient = L09_Classes.crc2.createLinearGradient(0, 0, 0, 200);
        // Add three color stops
        gradient.addColorStop(0, "#FFD7C5");
        gradient.addColorStop(.5, "#FEB59E");
        gradient.addColorStop(1, "#FF9E7A");
        L09_Classes.crc2.fillStyle = gradient;
        L09_Classes.crc2.fillRect(0, 0, L09_Classes.crc2.canvas.width, L09_Classes.crc2.canvas.height);
    }
    L09_Classes.drawBackground = drawBackground;
    function drawSun(_radius) {
        let position = new L09_Classes.Vector(150, 100);
        let crc2 = L09_Classes.canvas.getContext("2d");
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
    L09_Classes.drawSun = drawSun;
    function drawMountainBack(_start, _min, _max, _color) {
        console.log("crc2s", _start, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09_Classes.crc2.save();
        L09_Classes.crc2.translate(_start.x, _start.y);
        /*         crc2.lineCap = "round"; */
        L09_Classes.crc2.lineJoin = "round";
        L09_Classes.crc2.beginPath();
        L09_Classes.crc2.moveTo(0, 0);
        L09_Classes.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Classes.crc2.lineTo(x, y);
        } while (x < L09_Classes.crc2.canvas.width);
        L09_Classes.crc2.lineTo(x, 0);
        L09_Classes.crc2.closePath();
        L09_Classes.crc2.fillStyle = _color;
        L09_Classes.crc2.fill();
        L09_Classes.crc2.restore();
    }
    L09_Classes.drawMountainBack = drawMountainBack;
    function drawMountain() {
        let crc2 = L09_Classes.canvas.getContext("2d");
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
    L09_Classes.drawMountain = drawMountain;
    function drawTrees(_number) {
        L09_Classes.crc2.save();
        let yAxis = 240;
        for (let i = 0; i < _number; i++) {
            let position = new L09_Classes.Vector(0, 0);
            position.random(800, 600, 0, 240);
            while (position.x < 650 && position.x > 240) {
                position.random(800, 600, 0, 240);
            }
            L09_Classes.crc2.fillStyle = "brown";
            L09_Classes.crc2.fillRect(position.x, yAxis, 16, 40);
            L09_Classes.crc2.fillStyle = "green";
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.moveTo(position.x - 25, yAxis);
            L09_Classes.crc2.lineTo((position.x - 20) + 61, yAxis);
            L09_Classes.crc2.lineTo(position.x + 8, yAxis - 50);
            L09_Classes.crc2.lineTo(position.x - 25, yAxis);
            L09_Classes.crc2.lineCap = "round";
            L09_Classes.crc2.strokeStyle = "darkgreen";
            L09_Classes.crc2.stroke();
            L09_Classes.crc2.closePath();
            L09_Classes.crc2.fill();
            L09_Classes.crc2.fillStyle = "green";
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.moveTo(position.x - 20, yAxis - 30);
            L09_Classes.crc2.lineTo((position.x - 20) + 56, yAxis - 30);
            L09_Classes.crc2.lineTo(position.x + 8, yAxis - 80);
            L09_Classes.crc2.lineTo(position.x - 20, yAxis - 30);
            L09_Classes.crc2.lineCap = "round";
            L09_Classes.crc2.closePath();
            L09_Classes.crc2.stroke();
            L09_Classes.crc2.fill();
            yAxis += 15;
        }
    }
    L09_Classes.drawTrees = drawTrees;
    function drawSlope(_start, _end) {
        L09_Classes.crc2.beginPath();
        L09_Classes.crc2.moveTo(_start.x, _start.y + 50);
        L09_Classes.crc2.bezierCurveTo(_start.x - 50, _start.y + 150, _start.x - 20, _start.y + 100, _end.x, _end.y + 50);
        L09_Classes.crc2.lineTo(_end.x, 600);
        L09_Classes.crc2.lineTo(_end.x - 300, 600);
        L09_Classes.crc2.bezierCurveTo(_start.x - 200, _start.y + 200, _start.x - 220, _start.y + 150, _start.x - 150, _start.y + 50);
        L09_Classes.crc2.closePath();
        L09_Classes.crc2.fillStyle = "#F5F6FD";
        L09_Classes.crc2.fill();
    }
    L09_Classes.drawSlope = drawSlope;
    function randomColor() {
        let letter = "0123456789ABCDEF"; //chars for hexadezimal code
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)]; //16 weil 0-F 16 Zeichen sind
        }
        return color;
    }
    L09_Classes.randomColor = randomColor;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=canvas_script.js.map