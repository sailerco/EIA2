"use strict";
var L09_Classes;
(function (L09_Classes) {
    class SkiLiftHouse {
        constructor(_position, _scale) {
            this.position = _position;
            this.scale = _scale;
        }
        draw() {
            L09_Classes.crc2.save();
            L09_Classes.crc2.scale(this.scale, this.scale);
            L09_Classes.crc2.fillStyle = "brown";
            L09_Classes.crc2.fillRect(this.position.x, this.position.y, 70, 70);
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.moveTo(this.position.x - 15, this.position.y);
            L09_Classes.crc2.lineTo(this.position.x + 85, this.position.y);
            L09_Classes.crc2.lineTo(this.position.x + 35, this.position.y - 60);
            L09_Classes.crc2.closePath();
            L09_Classes.crc2.fill();
            L09_Classes.crc2.fillStyle = "black";
            L09_Classes.crc2.fillRect(this.position.x + 10, this.position.y + 20, 50, 50);
            L09_Classes.crc2.restore();
        }
    }
    L09_Classes.SkiLiftHouse = SkiLiftHouse;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=SkiLiftHouse.js.map