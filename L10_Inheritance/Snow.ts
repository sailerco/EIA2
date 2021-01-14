namespace L10_Inheritance {
    export class Snow extends Moveable {
        size: number;
        constructor(_size?: number, _position?: Vector) {
            super(_position);
            this.timeslice = 1 / 50;
            if (_position == undefined) {
                this.position = new Vector(800, 600); 
                this.position.random(800, 600, 0, 0);
            }
            if (_size)
                this.size = _size;
            else
                this.size = Math.random() * (3 - 0.1) + 0.1;
            
            this.velocity.random(100, 200, 0, 0);
        }
        /* move(): void {
            super.move();
        } */
        draw(): void {
            crc2.save();
            crc2.fillStyle = "rgb(250, 250, 250)";
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }
    }
}