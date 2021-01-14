"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    L10_Inheritance.canvas = document.querySelector("canvas");
    L10_Inheritance.crc2 = L10_Inheritance.canvas.getContext("2d");
    L10_Inheritance.canvas.width = 800;
    L10_Inheritance.canvas.height = 600;
    //#region draw 
    let skiline1 = new L10_Inheritance.Vector(450 + 7, 200 + 15); //oben links
    let skiline2 = new L10_Inheritance.Vector(650 + 10, 500 + 20); //unten links
    let skiline3 = new L10_Inheritance.Vector(450 + 45, 200 + 15); // oben rechts
    let skiline4 = new L10_Inheritance.Vector(650 + 60, 500 + 20); //unten rechts
    let mountain = new L10_Inheritance.Vector(0, 230);
    let mountainEnd = new L10_Inheritance.Vector(0, 260);
    let slopeStart = new L10_Inheritance.Vector(450, 200);
    let slopeEnd = new L10_Inheritance.Vector(650, 500);
    let skiLiftBack = new L10_Inheritance.Vector(450 / 0.75, 200 / 0.75);
    let skiLiftFront = new L10_Inheritance.Vector(650, 500);
    let move = [];
    let snow = [];
    let gondelUP = [];
    let gondelDOWN = [];
    L10_Inheritance.drawBackground();
    L10_Inheritance.drawSun(50);
    L10_Inheritance.drawMountainBack(mountain, 50, 170, "rgb(243, 243, 250)");
    L10_Inheritance.drawMountainBack(mountainEnd, 50, 170, "rgb(247, 247, 250)");
    L10_Inheritance.drawMountain();
    L10_Inheritance.drawSlope(slopeStart, slopeEnd);
    L10_Inheritance.drawTrees(20);
    drawSkiLift(skiLiftBack, 0.75);
    drawSkiLiftLine(skiline1, skiline2, true);
    drawSkiLiftLine(skiline3, skiline4, false);
    drawSkiLift(skiLiftFront, 1);
    drawStandingHumans(3);
    let imageData = L10_Inheritance.crc2.getImageData(0, 0, 800, 600);
    drawGondel(4, Math.random(), skiline1, skiline2, true);
    drawGondel(4, Math.random(), skiline3, skiline4, false);
    drawHumans(5);
    drawSnowflakes(200);
    //#endregion
    window.setInterval(animation, 20);
    //#region SNOW
    function drawSnowflakes(_number) {
        L10_Inheritance.crc2.fillStyle = "rgb(255, 255, 255)";
        for (let i = 0; i < _number; i++) {
            let snowflake = new L10_Inheritance.Snow();
            snowflake.draw();
            move.push(snowflake);
        }
    }
    function animation() {
        L10_Inheritance.crc2.putImageData(imageData, 0, 0);
        for (let human of move) {
            human.move();
            human.draw(25);
        }
        //  Snow
        for (let snowflake of snow) {
            snowflake.move();
            snowflake.draw();
        }
        //Lift
        for (let gondel of gondelDOWN) {
            gondel.move(false);
            gondel.draw();
        }
        for (let gondel of gondelUP) {
            gondel.move(true);
            gondel.draw();
        }
        let house = new L10_Inheritance.SkiLiftHouse(skiLiftFront, 1);
        house.draw();
    }
    //#region HUMAN
    function drawHumans(_number) {
        let yAxis = 250;
        for (let i = 0; i < _number; i++) {
            let v = new L10_Inheritance.Vector(450, 550);
            v.random(450, 550, 250, 250);
            v.y = yAxis;
            let human = new L10_Inheritance.Human(L10_Inheritance.randomColor(), v);
            human.draw(25);
            move.push(human);
            yAxis += 50;
        }
    }
    function drawStandingHumans(_number) {
        let x = 640 - 40 * _number;
        for (let i = 0; i < _number; i++) {
            let v = new L10_Inheritance.Vector(x, 570);
            let s = L10_Inheritance.randomColor();
            let human = new L10_Inheritance.Human(s, v);
            human.draw(25);
            x += 50;
        }
    }
    function drawSkiLift(_house, _scale) {
        let house = new L10_Inheritance.SkiLiftHouse(_house, _scale);
        house.draw();
    }
    function drawSkiLiftLine(_start, _end, _up, _drawn) {
        let line = new L10_Inheritance.SkiLift(skiline1, skiline2);
        line.drawLine();
        let line2 = new L10_Inheritance.SkiLift(skiline3, skiline4);
        line2.drawLine();
    }
    function drawGondel(_number, _space, _start, _end, _up) {
        for (let i = _space; i <= _number; i++) {
            let gondel = new L10_Inheritance.SkiLift(_start, _end, i);
            gondel.draw();
            if (_up)
                gondelUP.push(gondel);
            else
                gondelDOWN.push(gondel);
        }
        let line = new L10_Inheritance.SkiLift(skiline1, skiline2);
        line.drawLine();
        let line2 = new L10_Inheritance.SkiLift(skiline3, skiline4);
        line2.drawLine();
    }
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=main.js.map