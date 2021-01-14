"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Snow extends L10_Inheritance.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.timeslice = 1 / 50;
            if (_position == undefined) {
                this.position = new L10_Inheritance.Vector(800, 600);
                this.position.random(800, 600, 0, 0);
            }
            if (_size)
                this.size = _size;
            else
                this.size = Math.random() * (3 - 0.1) + 0.1;
            this.velocity.random(100, 200, 0, 0);
        }
        /* move(): void {
            super.move();
        } */
        draw() {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.fillStyle = "rgb(250, 250, 250)";
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Snow = Snow;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Snow.js.map