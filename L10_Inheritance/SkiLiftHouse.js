"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class SkiLiftHouse {
        constructor(_position, _scale) {
            this.position = _position;
            this.scale = _scale;
        }
        draw() {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.scale(this.scale, this.scale);
            L10_Inheritance.crc2.fillStyle = "brown";
            L10_Inheritance.crc2.fillRect(this.position.x, this.position.y, 70, 70);
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(this.position.x - 15, this.position.y);
            L10_Inheritance.crc2.lineTo(this.position.x + 85, this.position.y);
            L10_Inheritance.crc2.lineTo(this.position.x + 35, this.position.y - 60);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.fillStyle = "black";
            L10_Inheritance.crc2.fillRect(this.position.x + 10, this.position.y + 20, 50, 50);
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.SkiLiftHouse = SkiLiftHouse;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=SkiLiftHouse.js.map