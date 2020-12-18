"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    let skiline1 = { x: 450 + 7, y: 200 + 15 }; //oben links
    let skiline2 = { x: 650 + 10, y: 500 + 20 }; //unten links
    let skiline3 = { x: 450 + 45, y: 200 + 15 }; // oben rechts
    let skiline4 = { x: 650 + 60, y: 500 + 20 }; //unten rechts
    drawBackground();
    drawSun({ x: 150, y: 100 }, 50);
    drawMountainBack({ x: 0, y: 230 }, 50, 170, "rgb(243, 243, 250)");
    drawMountainBack({ x: 0, y: 260 }, 50, 170, "rgb(247, 247, 250)");
    drawMountain();
    drawSlope({ x: 450, y: 200 }, { x: 650, y: 500 });
    drawTrees(20);
    drawSkiLift({ x: (450 / 0.75), y: (200 / 0.75) }, 0.75);
    drawSkiLiftLine(skiline1, skiline2);
    drawSkiLiftLine(skiline3, skiline4);
    drawSkiLift({ x: 650, y: 500 }, 1);
    drawSnowflakes(300);
    drawHumans(5);
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, 200);
        // Add three color stops
        gradient.addColorStop(0, "#FFD7C5");
        gradient.addColorStop(.5, "#FEB59E");
        gradient.addColorStop(1, "#FF9E7A");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position, _radius) {
        let crc2 = canvas.getContext("2d");
        let crc2Gradient = crc2.createLinearGradient(0, 120, 0, 200);
        // Add three color stops
        crc2Gradient.addColorStop(0, "#FEE199");
        crc2Gradient.addColorStop(.5, "#FFBA79");
        crc2Gradient.addColorStop(1, "#FEB471");
        crc2.fillStyle = crc2Gradient;
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, _radius, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawMountainBack(_start, _min, _max, _color) {
        console.log("crc2s", _start, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_start.x, _start.y);
        /*         crc2.lineCap = "round"; */
        crc2.lineJoin = "round";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.restore();
    }
    function drawMountain() {
        let crc2 = canvas.getContext("2d");
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
    function drawTrees(_number) {
        crc2.save();
        let yAxis = 240;
        for (let i = 0; i < _number; i++) {
            let position = getVector(800, 0, 600, 240, true, false, 650, 250);
            //add a while loop, if there is already a crc2, place it somewhere else
            crc2.fillStyle = "brown";
            crc2.fillRect(position.x, yAxis, 16, 40);
            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.moveTo(position.x - 25, yAxis);
            crc2.lineTo((position.x - 20) + 61, yAxis);
            crc2.lineTo(position.x + 8, yAxis - 50);
            crc2.lineTo(position.x - 25, yAxis);
            crc2.lineCap = "round";
            crc2.strokeStyle = "darkgreen";
            crc2.stroke();
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.moveTo(position.x - 20, yAxis - 30);
            crc2.lineTo((position.x - 20) + 56, yAxis - 30);
            crc2.lineTo(position.x + 8, yAxis - 80);
            crc2.lineTo(position.x - 20, yAxis - 30);
            crc2.lineCap = "round";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            yAxis += 15;
        }
    }
    function drawSkiLift(_house, _scale) {
        crc2.save();
        crc2.scale(_scale, _scale);
        crc2.fillStyle = "brown";
        crc2.fillRect(_house.x, _house.y, 70, 70);
        crc2.beginPath();
        crc2.moveTo(_house.x - 15, _house.y);
        crc2.lineTo(_house.x + 85, _house.y);
        crc2.lineTo(_house.x + 35, _house.y - 60);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "black";
        crc2.fillRect(_house.x + 10, _house.y + 20, 50, 50);
        crc2.restore();
    }
    function drawSkiLiftLine(_start, _end) {
        //let line: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d"); 
        let line = new Path2D();
        crc2.beginPath();
        line.moveTo(_start.x, _start.y);
        line.lineTo(_end.x, _end.y);
        crc2.strokeStyle = "black";
        crc2.stroke(line);
        drawGondel(line, 4, Math.random(), _start, _end);
    }
    function drawGondel(_line, _number, _space, _start, _end) {
        for (let i = _space; i <= _number; i++) {
            debugger;
            let x1 = _start.x + i * 0.25 * (_end.x - _start.x);
            let y1 = _start.y + i * 0.25 * (_end.y - _start.y);
            drawHuman({ x: x1, y: y1 + 30 }, 20, true);
            crc2.beginPath();
            crc2.moveTo(x1, y1);
            crc2.lineTo(x1, y1 + 30);
            crc2.closePath();
            crc2.strokeStyle = crc2.fillStyle = randomColor();
            crc2.stroke();
            crc2.ellipse(x1, y1 + 30, 20, 10, 0, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
    function drawHumans(_number) {
        let yAxis = 250;
        for (let i = 0; i < _number; i++) {
            let v = getVector(450, 250, 550, 250); //ersetze zahlen
            v = { x: v.x, y: yAxis };
            drawHuman(v, 25, false);
            yAxis += 50;
        }
        let y = 570;
        let x = 450;
        for (let i = 0; i < 5; i++) {
            let v = { x: x, y: y };
            drawHuman(v, 25, false);
            x += 50;
        }
    }
    function drawHuman(_position, _height, _sitting) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        if (_sitting == false) {
            for (let i = 1; i <= 2; i++) {
                crc2.save();
                crc2.rotate(-45);
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.moveTo(-10 * i, 25);
                crc2.lineTo(-10 * i, -25);
                crc2.lineWidth = 3;
                crc2.lineCap = "round";
                crc2.closePath();
                crc2.stroke();
                crc2.restore();
            }
            crc2.fillStyle = randomColor();
            crc2.beginPath();
            crc2.ellipse(-5, -30 + _height, 10, _height, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            console.log("HALLO");
            crc2.arc(-5, -30, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        else {
            crc2.fillStyle = randomColor();
            crc2.beginPath();
            crc2.ellipse(-5, -30 + _height, 10, _height, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            console.log("HALLO");
            crc2.arc(-5, -30, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }
    function drawSnowflakes(_number) {
        crc2.save();
        crc2.fillStyle = "rgb(255, 255, 255)";
        for (let i = 0; i < _number; i++) {
            let snowPostition = getVector(800, 0, 600, 0);
            crc2.beginPath();
            crc2.arc(snowPostition.x, snowPostition.y, getNumber(3, 0.1), 0, 2 * Math.PI);
            crc2.fill();
        }
    }
    function drawSlope(_start, _end) {
        crc2.beginPath();
        crc2.moveTo(_start.x, _start.y + 50);
        crc2.bezierCurveTo(_start.x - 50, _start.y + 150, _start.x - 20, _start.y + 100, _end.x, _end.y + 50);
        crc2.lineTo(_end.x, 600);
        crc2.lineTo(_end.x - 300, 600);
        crc2.bezierCurveTo(_start.x - 200, _start.y + 200, _start.x - 220, _start.y + 150, _start.x - 150, _start.y + 50);
        crc2.closePath();
        crc2.fillStyle = "#F5F6FD";
        crc2.fill();
    }
    function getVector(_maxX, _minX, _maxY, _minY, _tree, _space, _spaceMax, _spaceMin) {
        let x = Math.random() * (_maxX - _minX) + _minX;
        let y = Math.random() * (_maxY - _minY) + _minY;
        let i = Math.round(Math.random() * Math.floor(1));
        if (_tree == true && x < _spaceMax && x > _spaceMin) {
            if (i == 1)
                x = Math.random() * (_spaceMin - 0) + 0;
            else
                x = Math.random() * (800 - _spaceMax) + _spaceMax;
        }
        if (_tree == false && _space == true && (x > _spaceMax || x < _spaceMin)) {
            x = Math.random() * (_spaceMax - _spaceMin) + _spaceMin;
        }
        return { x, y };
    }
    function getNumber(_max, _min) {
        let x = Math.random() * (_max - _min) + _min;
        return x;
    }
    function randomColor() {
        let letter = "0123456789ABCDEF"; //chars for hexadezimal code
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)]; //16 weil 0-F 16 Zeichen sind
        }
        return color;
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=canvas_script.js.map