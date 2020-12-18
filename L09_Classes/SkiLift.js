"use strict";
var L09_Classes;
(function (L09_Classes) {
    class SkiLift {
        constructor(_start, _end, _number) {
            if (_number) {
                this.position = this.set(_start, _end, _number);
                this.number = _number;
            }
            this.color = L09_Classes.randomColor();
            this.colorForHuman = L09_Classes.randomColor();
            this.start = _start;
            this.end = _end;
        }
        set(_start, _end, _number) {
            let x1 = _start.x + _number * 0.25 * (_end.x - _start.x);
            let y1 = _start.y + _number * 0.25 * (_end.y - _start.y);
            let v = new L09_Classes.Vector(x1, y1 + 30);
            return v;
        }
        move(_up) {
            if (_up) {
                this.position = this.set(this.start, this.end, this.number);
                this.number -= 0.009;
                if (this.position.y < 245) {
                    this.position = new L09_Classes.Vector(650 + 10, 500 + 20);
                    this.number = 4;
                }
            }
            else {
                this.position = this.set(this.start, this.end, this.number);
                this.number += 0.009;
                if (this.position.y > 520) {
                    this.position = new L09_Classes.Vector(450 + 45, 200 + 15);
                    this.number = 0;
                }
            }
        }
        draw() {
            let human = new L09_Classes.Human(this.colorForHuman, this.position, "sitting");
            human.draw(20);
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.moveTo(this.position.x, this.position.y - 30);
            L09_Classes.crc2.lineTo(this.position.x, this.position.y);
            L09_Classes.crc2.closePath();
            L09_Classes.crc2.strokeStyle = L09_Classes.crc2.fillStyle = this.color;
            L09_Classes.crc2.stroke();
            L09_Classes.crc2.ellipse(this.position.x, this.position.y, 20, 10, 0, 0, 2 * Math.PI);
            L09_Classes.crc2.fill();
        }
        drawLine() {
            let line = new Path2D();
            L09_Classes.crc2.beginPath();
            line.moveTo(this.start.x, this.start.y);
            line.lineTo(this.end.x, this.end.y);
            L09_Classes.crc2.strokeStyle = "black";
            L09_Classes.crc2.stroke(line);
        }
    }
    L09_Classes.SkiLift = SkiLift;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=SkiLift.js.map