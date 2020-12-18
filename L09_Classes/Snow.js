"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Snow {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else {
                this.position = new L09_Classes.Vector(800, 600);
                this.position.random(800, 600, 0, 0);
            }
            if (_size)
                this.size = _size;
            else
                this.size = Math.random() * (3 - 0.1) + 0.1;
            this.velocity = new L09_Classes.Vector(0, 0);
            this.velocity.random(100, 200, 0, 0);
        }
        move(_timeslice) {
            let offset = new L09_Classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Classes.crc2.canvas.height;
            if (this.position.x > L09_Classes.crc2.canvas.width)
                this.position.x -= L09_Classes.crc2.canvas.width;
            if (this.position.y > L09_Classes.crc2.canvas.height)
                this.position.y -= L09_Classes.crc2.canvas.height;
        }
        draw() {
            L09_Classes.crc2.save();
            L09_Classes.crc2.fillStyle = "rgb(250, 250, 250)";
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            L09_Classes.crc2.closePath();
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
        }
    }
    L09_Classes.Snow = Snow;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Snow.js.map