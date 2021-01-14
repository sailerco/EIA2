"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Moveable {
        constructor(_position) {
            this.direction = 1;
            if (_position)
                this.position = _position;
            this.velocity = new L10_Inheritance.Vector(0, 0);
        }
        move() {
            this.offset(this.timeslice, this.direction, this.velocity);
            if (this.position.x < 0)
                this.position.x += L10_Inheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Inheritance.crc2.canvas.height;
            if (this.position.x > L10_Inheritance.crc2.canvas.width)
                this.position.x -= L10_Inheritance.crc2.canvas.width;
            if (this.position.y > L10_Inheritance.crc2.canvas.height)
                this.position.y -= L10_Inheritance.crc2.canvas.height;
            // move in sub class
        }
        offset(_timeslice, _direction, _velocity) {
            let offset = new L10_Inheritance.Vector(_velocity.x * _direction, _velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw(_height) {
            //draw in sub class
        }
    }
    L10_Inheritance.Moveable = Moveable;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Moveable.js.map