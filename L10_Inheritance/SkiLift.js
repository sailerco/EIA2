"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class SkiLift {
        constructor(_start, _end, _number) {
            if (_number) {
                this.position = this.set(_start, _end, _number);
                this.number = _number;
            }
            this.color = L10_Inheritance.randomColor();
            this.colorForHuman = L10_Inheritance.randomColor();
            this.start = _start;
            this.end = _end;
        }
        set(_start, _end, _number) {
            let x1 = _start.x + _number * 0.25 * (_end.x - _start.x);
            let y1 = _start.y + _number * 0.25 * (_end.y - _start.y);
            let v = new L10_Inheritance.Vector(x1, y1 + 30);
            return v;
        }
        move(_up) {
            if (_up) {
                this.position = this.set(this.start, this.end, this.number);
                this.number -= 0.009;
                if (this.position.y < 245) {
                    this.position = new L10_Inheritance.Vector(650 + 10, 500 + 20);
                    this.number = 4;
                }
            }
            else {
                this.position = this.set(this.start, this.end, this.number);
                this.number += 0.009;
                if (this.position.y > 520) {
                    this.position = new L10_Inheritance.Vector(450 + 45, 200 + 15);
                    this.number = 0;
                }
            }
        }
        draw() {
            let human = new L10_Inheritance.Human(this.colorForHuman, this.position, "sitting");
            human.draw(20);
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(this.position.x, this.position.y - 30);
            L10_Inheritance.crc2.lineTo(this.position.x, this.position.y);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.strokeStyle = L10_Inheritance.crc2.fillStyle = this.color;
            L10_Inheritance.crc2.stroke();
            L10_Inheritance.crc2.ellipse(this.position.x, this.position.y, 20, 10, 0, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fill();
        }
        drawLine() {
            let line = new Path2D();
            L10_Inheritance.crc2.beginPath();
            line.moveTo(this.start.x, this.start.y);
            line.lineTo(this.end.x, this.end.y);
            L10_Inheritance.crc2.strokeStyle = "black";
            L10_Inheritance.crc2.stroke(line);
        }
    }
    L10_Inheritance.SkiLift = SkiLift;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=SkiLift.js.map