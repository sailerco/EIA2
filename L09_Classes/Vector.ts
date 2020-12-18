namespace L09_Classes {
    export class Vector {
        x: number = 0;
        y: number = 0;
        
        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }
        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_maxX: number, _maxY: number, _minX: number, _minY: number): void {
            this.x = Math.random() * (_maxX - _minX) + _minX;
            this.y = Math.random() * (_maxY - _minY) + _minY;
        }
    }
}