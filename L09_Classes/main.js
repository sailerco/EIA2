"use strict";
var L09_Classes;
(function (L09_Classes) {
    L09_Classes.canvas = document.querySelector("canvas");
    L09_Classes.crc2 = L09_Classes.canvas.getContext("2d");
    L09_Classes.canvas.width = 800;
    L09_Classes.canvas.height = 600;
    //#region draw 
    let skiline1 = new L09_Classes.Vector(450 + 7, 200 + 15); //oben links
    let skiline2 = new L09_Classes.Vector(650 + 10, 500 + 20); //unten links
    let skiline3 = new L09_Classes.Vector(450 + 45, 200 + 15); // oben rechts
    let skiline4 = new L09_Classes.Vector(650 + 60, 500 + 20); //unten rechts
    let mountain = new L09_Classes.Vector(0, 230);
    let mountainEnd = new L09_Classes.Vector(0, 260);
    let slopeStart = new L09_Classes.Vector(450, 200);
    let slopeEnd = new L09_Classes.Vector(650, 500);
    let skiLiftBack = new L09_Classes.Vector(450 / 0.75, 200 / 0.75);
    let skiLiftFront = new L09_Classes.Vector(650, 500);
    let snow = [];
    let humans = [];
    let gondelUP = [];
    let gondelDOWN = [];
    L09_Classes.drawBackground();
    L09_Classes.drawSun(50);
    L09_Classes.drawMountainBack(mountain, 50, 170, "rgb(243, 243, 250)");
    L09_Classes.drawMountainBack(mountainEnd, 50, 170, "rgb(247, 247, 250)");
    L09_Classes.drawMountain();
    L09_Classes.drawSlope(slopeStart, slopeEnd);
    L09_Classes.drawTrees(20);
    drawSkiLift(skiLiftBack, 0.75);
    drawSkiLiftLine(skiline1, skiline2, true);
    drawSkiLiftLine(skiline3, skiline4, false);
    drawSkiLift(skiLiftFront, 1);
    drawStandingHumans(3);
    let imageData = L09_Classes.crc2.getImageData(0, 0, 800, 600);
    drawGondel(4, Math.random(), skiline1, skiline2, true);
    drawGondel(4, Math.random(), skiline3, skiline4, false);
    drawHumans(5);
    drawSnowflakes(200);
    //#endregion
    window.setInterval(animation, 20);
    //#region SNOW
    function drawSnowflakes(_number) {
        L09_Classes.crc2.fillStyle = "rgb(255, 255, 255)";
        for (let i = 0; i < _number; i++) {
            let snowflake = new L09_Classes.Snow();
            snowflake.draw();
            snow.push(snowflake);
        }
    }
    function animation() {
        L09_Classes.crc2.putImageData(imageData, 0, 0);
        for (let human of humans) {
            human.move(1 / 20);
            human.draw(25);
        }
        //  Snow
        for (let snowflake of snow) {
            snowflake.move(1 / 50);
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
        let house = new L09_Classes.SkiLiftHouse(skiLiftFront, 1);
        house.draw();
    }
    //#region HUMAN
    function drawHumans(_number) {
        let yAxis = 250;
        for (let i = 0; i < _number; i++) {
            let v = new L09_Classes.Vector(450, 550);
            v.random(450, 550, 250, 250);
            v.y = yAxis;
            let s = L09_Classes.randomColor();
            let human = new L09_Classes.Human(s, v);
            human.draw(25);
            humans.push(human);
            yAxis += 50;
        }
    }
    function drawStandingHumans(_number) {
        let x = 640 - 40 * _number;
        for (let i = 0; i < _number; i++) {
            debugger;
            let v = new L09_Classes.Vector(x, 570);
            let s = L09_Classes.randomColor();
            let human = new L09_Classes.Human(s, v);
            human.draw(25);
            x += 50;
        }
    }
    function drawSkiLift(_house, _scale) {
        let house = new L09_Classes.SkiLiftHouse(_house, _scale);
        house.draw();
    }
    function drawSkiLiftLine(_start, _end, _up, _drawn) {
        let line = new L09_Classes.SkiLift(skiline1, skiline2);
        line.drawLine();
        let line2 = new L09_Classes.SkiLift(skiline3, skiline4);
        line2.drawLine();
    }
    function drawGondel(_number, _space, _start, _end, _up) {
        for (let i = _space; i <= _number; i++) {
            let gondel = new L09_Classes.SkiLift(_start, _end, i);
            gondel.draw();
            if (_up)
                gondelUP.push(gondel);
            else
                gondelDOWN.push(gondel);
        }
        let line = new L09_Classes.SkiLift(skiline1, skiline2);
        line.drawLine();
        let line2 = new L09_Classes.SkiLift(skiline3, skiline4);
        line2.drawLine();
    }
    /* function shootSnowball(_event: MouseEvent): void {
        let hotspot: Vector = new Vector (_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let hit: Vector | null = getHit(hotspot);
        if(hit)
            humanFall(hit);
    }
    function getHit(_hotspot: Vector): Vector {
        let v: Vector = new Vector(100, 100);
        return v;
    }
    function humanFall(_vector: Vector): void {

    } */
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=main.js.map