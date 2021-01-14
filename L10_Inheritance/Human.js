"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Human extends L10_Inheritance.Moveable {
        constructor(_color, _position, _style) {
            super(_position);
            if (_position == undefined) {
                this.position = new L10_Inheritance.Vector(800, 600);
                this.position.random(450, 550, 250, 250);
            }
            this.timeslice = 1 / 20;
            if (_style)
                this.style = _style;
            if (_color)
                this.color = _color;
            this.velocity.random(25, 25, 0, 0);
        }
        draw(_height) {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(this.position.x, this.position.y);
            if (this.style == "sitting") {
                L10_Inheritance.crc2.fillStyle = this.color;
                L10_Inheritance.crc2.beginPath();
                L10_Inheritance.crc2.ellipse(-5, -30 + _height, 10, _height, 0, 0, 2 * Math.PI);
                L10_Inheritance.crc2.fill();
                L10_Inheritance.crc2.closePath();
                L10_Inheritance.crc2.arc(-5, -30, 10, 0, 2 * Math.PI);
                L10_Inheritance.crc2.fill();
            }
            else {
                for (let i = 0; i <= 1; i++) {
                    L10_Inheritance.crc2.save();
                    L10_Inheritance.crc2.beginPath();
                    L10_Inheritance.crc2.strokeStyle = "black";
                    if (this.direction == -1) {
                        L10_Inheritance.crc2.moveTo(25 + 15 * i, _height - 10);
                        L10_Inheritance.crc2.lineTo(-25 + 15 * i, _height + 10);
                    }
                    else {
                        L10_Inheritance.crc2.moveTo(-25 + 15 * i, _height - 10);
                        L10_Inheritance.crc2.lineTo(25 + 15 * i, _height + 10);
                    }
                    L10_Inheritance.crc2.lineWidth = 3;
                    L10_Inheritance.crc2.stroke();
                    L10_Inheritance.crc2.restore();
                }
                L10_Inheritance.crc2.fillStyle = this.color;
                L10_Inheritance.crc2.beginPath();
                L10_Inheritance.crc2.ellipse(10, 5, 10, _height, 0, 0, 2 * Math.PI);
                L10_Inheritance.crc2.fill();
                L10_Inheritance.crc2.closePath();
                L10_Inheritance.crc2.arc(10, 5 - _height, 10, 0, 2 * Math.PI);
                L10_Inheritance.crc2.fill();
            }
            L10_Inheritance.crc2.restore();
        }
        move() {
            super.offset(this.timeslice, this.direction, this.velocity);
            let x;
            if (this.position.x > 420 && this.position.y < 300) {
                this.position.x = 420;
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
                this.color = L10_Inheritance.randomColor();
            }
        }
    }
    L10_Inheritance.Human = Human;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Human.js.map