namespace L10_Inheritance {
    export class Moveable {
        position: Vector;
        velocity: Vector;
        direction: number = 1;
        timeslice: number;
        constructor(_position?: Vector) {
            if (_position)
                this.position = _position;
            this.velocity = new Vector(0, 0);
        }
        move(): void {
            this.offset(this.timeslice, this.direction, this.velocity);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            // move in sub class
        }
        offset(_timeslice: number, _direction: number, _velocity: Vector): void {
            let offset: Vector = new Vector(_velocity.x * _direction, _velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);        
        }
        draw(_height?: number): void {
            //draw in sub class
        }
    }
}