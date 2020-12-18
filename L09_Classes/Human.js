"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Human {
        constructor(_color, _position, _style) {
            this.direction = 1;
            if (_position)
                this.position = _position;
            else {
                this.position = new L09_Classes.Vector(800, 600);
                this.position.random(450, 550, 250, 250);
            }
            if (_style)
                this.style = _style;
            if (_color)
                this.color = _color;
            this.velocity = new L09_Classes.Vector(0, 0);
            this.velocity.random(20, 20, 0, 0);
        }
        draw(_height) {
            L09_Classes.crc2.save();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            if (this.style == "sitting") {
                L09_Classes.crc2.fillStyle = this.color;
                L09_Classes.crc2.beginPath();
                L09_Classes.crc2.ellipse(-5, -30 + _height, 10, _height, 0, 0, 2 * Math.PI);
                L09_Classes.crc2.fill();
                L09_Classes.crc2.closePath();
                L09_Classes.crc2.arc(-5, -30, 10, 0, 2 * Math.PI);
                L09_Classes.crc2.fill();
            }
            else {
                for (let i = 0; i <= 1; i++) {
                    L09_Classes.crc2.save();
                    L09_Classes.crc2.beginPath();
                    L09_Classes.crc2.strokeStyle = "black";
                    if (this.direction == -1) {
                        L09_Classes.crc2.moveTo(25 + 15 * i, _height - 10);
                        L09_Classes.crc2.lineTo(-25 + 15 * i, _height + 10);
                    }
                    else {
                        L09_Classes.crc2.moveTo(-25 + 15 * i, _height - 10);
                        L09_Classes.crc2.lineTo(25 + 15 * i, _height + 10);
                    }
                    L09_Classes.crc2.lineWidth = 3;
                    L09_Classes.crc2.stroke();
                    L09_Classes.crc2.restore();
                }
                L09_Classes.crc2.fillStyle = this.color;
                L09_Classes.crc2.beginPath();
                L09_Classes.crc2.ellipse(10, 5, 10, _height, 0, 0, 2 * Math.PI);
                L09_Classes.crc2.fill();
                L09_Classes.crc2.closePath();
                L09_Classes.crc2.arc(10, 5 - _height, 10, 0, 2 * Math.PI);
                L09_Classes.crc2.fill();
            }
            L09_Classes.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09_Classes.Vector(this.velocity.x * this.direction, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            let x;
            if (this.position.x > 450 && this.position.y < 300) {
                this.position.x = 450;
                this.direction = -1;
            }
            if (this.position.x < 250) {
                x = 255 - this.position.x;
                this.position.x += x;
                this.direction = 1;
            }
            if (this.position.x > 550) {
                x = this.position.x - 540;
                this.position.x -= x;
                this.direction = -1;
            }
            if (this.position.y < 250)
                this.position.y += (250 - this.position.y);
            if (this.position.y > 600) {
                this.position.y -= 350;
                this.color = L09_Classes.randomColor();
            }
        }
    }
    L09_Classes.Human = Human;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Human.js.map