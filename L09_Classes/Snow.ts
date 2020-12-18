namespace L09_Classes {
    export class Snow {
        position: Vector;
        velocity: Vector;
        size: number;
        
        constructor(_size?: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else {
                this.position = new Vector(800, 600); 
                this.position.random(800, 600, 0, 0);
            }
            if (_size)
                this.size = _size;
            else
                this.size = Math.random() * (3 - 0.1) + 0.1;
            
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200, 0, 0);
        }
        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
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