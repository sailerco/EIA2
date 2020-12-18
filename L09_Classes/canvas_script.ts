namespace L09_Classes {
    export function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 200);
        // Add three color stops
        gradient.addColorStop(0, "#FFD7C5");
        gradient.addColorStop(.5, "#FEB59E");
        gradient.addColorStop(1, "#FF9E7A");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    export function drawSun(_radius: number): void {
        let position: Vector = new Vector (150, 100);
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d"); 
        let crc2Gradient: CanvasGradient = crc2.createLinearGradient(0, 120, 0, 200);
        
        // Add three color stops
        crc2Gradient.addColorStop(0, "#FEE199");
        crc2Gradient.addColorStop(.5, "#FFBA79");
        crc2Gradient.addColorStop(1, "#FEB471");
        crc2.fillStyle = crc2Gradient;
        crc2.beginPath();
        crc2.arc(position.x, position.y, _radius, 0, 2 * Math.PI);
        crc2.fill();        
    }
    export function drawMountainBack(_start: Vector, _min: number, _max: number, _color: string): void {
        console.log("crc2s", _start, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        
        crc2.save();
        crc2.translate(_start.x, _start.y);
/*         crc2.lineCap = "round"; */
        crc2.lineJoin = "round";
        crc2.beginPath();
        
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();

        crc2.restore();
    }
    export function drawMountain(): void {
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.save();
        crc2.fillStyle =  "rgb(249, 249, 252)";
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(0, 180);
        crc2.lineTo(400, 200);
        crc2.lineTo(800, 180);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    export function drawTrees(_number: number): void {
        crc2.save();
        let yAxis: number = 240;
        for (let i: number = 0; i < _number; i++) {
            let position: Vector = new Vector(0, 0);
            position.random(800, 600, 0, 240);
            while (position.x < 650 && position.x > 240) {
                position.random(800, 600, 0, 240); 
            }
            crc2.fillStyle = "brown";
            crc2.fillRect(position.x, yAxis, 16, 40);
            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.moveTo(position.x - 25, yAxis);
            crc2.lineTo((position.x - 20) + 61, yAxis);
            crc2.lineTo(position.x + 8, yAxis - 50);
            crc2.lineTo(position.x - 25, yAxis);
            crc2.lineCap = "round";
            crc2.strokeStyle = "darkgreen";
            crc2.stroke();
            crc2.closePath();
            crc2.fill();
            
            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.moveTo(position.x - 20, yAxis - 30);
            crc2.lineTo((position.x - 20) + 56, yAxis - 30);
            crc2.lineTo(position.x + 8, yAxis - 80);
            crc2.lineTo(position.x - 20, yAxis - 30);
            crc2.lineCap = "round";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            yAxis += 15;
        }
    }   
    export function drawSlope(_start: Vector, _end: Vector): void {
        crc2.beginPath();
        crc2.moveTo(_start.x, _start.y + 50);
        crc2.bezierCurveTo(_start.x - 50, _start.y + 150, _start.x - 20, _start.y + 100, _end.x, _end.y + 50);
        crc2.lineTo(_end.x, 600);
        crc2.lineTo(_end.x - 300, 600);
        crc2.bezierCurveTo(_start.x - 200, _start.y + 200, _start.x - 220, _start.y + 150,  _start.x - 150, _start.y + 50);
        crc2.closePath();
        crc2.fillStyle = "#F5F6FD";
        crc2.fill();
    }
    export function randomColor(): string {
        let letter: string = "0123456789ABCDEF"; //chars for hexadezimal code
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)]; //16 weil 0-F 16 Zeichen sind
        }
        return color;
    }
}