namespace L10_Inheritance {
    export class Human extends Moveable {
        style: string;
        color: string;
        constructor(_color?: string, _position?: Vector, _style?: string) {
            super(_position);
            if (_position == undefined) {
                this.position = new Vector(800, 600); 
                this.position.random(450, 550, 250, 250);
            }
            this.timeslice = 1 / 20;
            if (_style)
                this.style = _style;
            if (_color)
                this.color = _color;
            this.velocity.random(25, 25, 0, 0);
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
        move(): void {
            super.offset(this.timeslice, this.direction, this.velocity);
            let x: number; 
            if (this.position.x > 420 && this.position.y < 300) {
                this.position.x = 420;
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