namespace L10_Inheritance {
    export class SkiLiftHouse {
        position: Vector;
        scale: number;    
        constructor(_position: Vector, _scale: number) {
            this.position = _position;
            this.scale = _scale;
        }
        draw(): void {
            crc2.save();        
            crc2.scale(this.scale, this.scale);
            crc2.fillStyle = "brown";
            crc2.fillRect(this.position.x, this.position.y, 70, 70);
            crc2.beginPath();
            crc2.moveTo(this.position.x - 15, this.position.y);
            crc2.lineTo(this.position.x + 85, this.position.y);
            crc2.lineTo(this.position.x + 35, this.position.y - 60);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "black";
            crc2.fillRect(this.position.x + 10, this.position.y + 20, 50, 50);
            crc2.restore();
        }
    }
}