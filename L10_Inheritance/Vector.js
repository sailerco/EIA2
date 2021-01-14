"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
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
    L10_Inheritance.Vector = Vector;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Vector.js.map