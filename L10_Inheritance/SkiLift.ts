namespace L10_Inheritance {
    export class SkiLift {
        position: Vector;
        color: string;
        colorForHuman: string;
        start: Vector;
        end: Vector;
        number: number;
        constructor(_start: Vector, _end: Vector, _number?: number) {
            if (_number) {
                this.position = this.set(_start, _end, _number);
                this.number = _number;
            }
            this.color = randomColor();
            this.colorForHuman = randomColor();
            this.start = _start;
            this.end = _end;
        }
        set(_start: Vector, _end: Vector, _number: number): Vector {
            let x1: number =  _start.x +  _number * 0.25 * (_end.x - _start.x);
            let y1: number =  _start.y +  _number * 0.25 * (_end.y - _start.y);
            let v: Vector = new Vector(x1, y1 + 30);
            return v;
        }
        move(_up: boolean): void {
            if (_up) {
                this.position = this.set(this.start, this.end, this.number);
                this.number -= 0.009;
                if (this.position.y < 245) { 
                    this.position = new Vector(650 + 10, 500 + 20);  
                    this.number = 4;
                }
            } else {
                this.position = this.set(this.start, this.end, this.number);
                this.number += 0.009;
                if (this.position.y > 520) {
                    this.position = new Vector(450 + 45, 200 + 15);  
                    this.number = 0;
                }
            }
        }
        draw(): void {
            let human: Human = new Human(this.colorForHuman, this.position, "sitting");
            human.draw(20);
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y - 30);
            crc2.lineTo(this.position.x, this.position.y);
            crc2.closePath();
            crc2.strokeStyle = crc2.fillStyle = this.color;
            crc2.stroke();
            crc2.ellipse(this.position.x, this.position.y, 20, 10, 0, 0, 2 * Math.PI);
            crc2.fill();
        }
        drawLine(): void {
            let line: Path2D = new Path2D();
            crc2.beginPath();
            line.moveTo(this.start.x, this.start.y);
            line.lineTo(this.end.x, this.end.y);
            crc2.strokeStyle = "black";
            crc2.stroke(line); 
        }

    }
}