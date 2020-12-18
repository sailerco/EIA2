"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Vector {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_maxX, _maxY, _minX, _minY) {
            this.x = Math.random() * (_maxX - _minX) + _minX;
            this.y = Math.random() * (_maxY - _minY) + _minY;
        }
    }
    L09_Classes.Vector = Vector;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Vector.js.map