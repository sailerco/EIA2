namespace L09_Classes {
    export class Human {
        position: Vector;
        style: string;
        velocity: Vector;
        color: string;
        direction: number = 1;
        constructor(_color?: string, _position?: Vector, _style?: string) {
            if (_position)
                this.position = _position;
            else {
                this.position = new Vector(800, 600); 
                this.position.random(450, 550, 250, 250);
            }
            if (_style)
                this.style = _style;
            if (_color)
                this.color = _color;
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 20, 0, 0);
        }
        draw(_height: number): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            if (this.style == "sitting") {
                crc2.fillStyle = this.color;
                crc2.beginPath();
                crc2.ellipse(-5, -30 + _height, 10, _height, 0, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                crc2.arc(-5, -30, 10, 0, 2 * Math.PI);
                crc2.fill();
            } else {
                for (let i: number = 0; i <= 1; i++) {
                    crc2.save();
                    crc2.beginPath();
                    crc2.strokeStyle = "black";
                    if (this.direction == -1) {
                        crc2.moveTo(25 + 15 * i, _height - 10);
                        crc2.lineTo(-25 + 15 * i, _height + 10);
                    } else {
                        crc2.moveTo(-25 + 15 * i, _height - 10);
                        crc2.lineTo(25 + 15 * i, _height + 10);
                    }
                    crc2.lineWidth = 3;
                    crc2.stroke();
                    crc2.restore();
                }
                crc2.fillStyle = this.color;
                crc2.beginPath();
                crc2.ellipse(10, 5, 10, _height, 0, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                crc2.arc(10, 5 - _height, 10, 0, 2 * Math.PI);
                crc2.fill();  
            }
            crc2.restore();
        }
        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x * this.direction, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            let x: number; 
            if (this.position.x > 450 && this.position.y < 300) {
                this.position.x = 450;
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
                this.color = randomColor();
            }
        }
    }
}