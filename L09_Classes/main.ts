namespace L09_Classes {
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d"); 
    canvas.width = 800;
    canvas.height = 600;
    //#region draw 
    let skiline1: Vector = new Vector (450 + 7, 200 + 15); //oben links
    let skiline2: Vector = new Vector (650 + 10, 500 + 20);  //unten links
    let skiline3: Vector = new Vector (450 + 45, 200 + 15); // oben rechts
    let skiline4: Vector = new Vector (650 + 60, 500 + 20); //unten rechts
    let mountain: Vector = new Vector(0, 230);
    let mountainEnd: Vector = new Vector (0, 260);
    let slopeStart: Vector = new Vector (450, 200);
    let slopeEnd: Vector = new Vector (650, 500);
    let skiLiftBack: Vector = new Vector (450 / 0.75, 200 / 0.75);
    let skiLiftFront: Vector = new Vector (650, 500);
    let snow: Snow[] = [];
    let humans: Human[] = [];
    let gondelUP: SkiLift[] = [];
    let gondelDOWN: SkiLift[] = [];
    drawBackground();
    drawSun(50);
    drawMountainBack(mountain, 50, 170, "rgb(243, 243, 250)");
    drawMountainBack(mountainEnd, 50, 170, "rgb(247, 247, 250)");
    drawMountain();
    drawSlope(slopeStart, slopeEnd);
    drawTrees(20);
    drawSkiLift(skiLiftBack, 0.75);
    drawSkiLiftLine(skiline1, skiline2, true);
    drawSkiLiftLine(skiline3, skiline4, false);      
    drawSkiLift(skiLiftFront, 1); 
    drawStandingHumans(3);
    let imageData: ImageData = crc2.getImageData(0, 0, 800, 600);
    drawGondel(4, Math.random(), skiline1, skiline2, true);
    drawGondel(4, Math.random(), skiline3, skiline4, false);  
    drawHumans(5);
    drawSnowflakes(200);
    //#endregion
    window.setInterval(animation, 20);     
    //#region SNOW
    function drawSnowflakes(_number: number): void {
        crc2.fillStyle = "rgb(255, 255, 255)";
        for (let i: number = 0; i < _number; i ++) {
            let snowflake: Snow = new Snow();
            snowflake.draw();
            snow.push(snowflake);
        }      
    }   
    function animation(): void {
        crc2.putImageData(imageData, 0, 0);
        for (let human of humans) {
            human.move(1 / 20);
            human.draw(25);
        }
      //  Snow
        for (let snowflake of snow) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        //Lift
        for (let gondel of gondelDOWN) {
            gondel.move(false);
            gondel.draw();
        }
        for (let gondel of gondelUP) {
            gondel.move(true);
            gondel.draw();
        }
        let house: SkiLiftHouse = new SkiLiftHouse(skiLiftFront, 1);
        house.draw(); 
    }
    //#region HUMAN
    function drawHumans(_number: number): void {
        let yAxis: number = 250;
        for (let i: number = 0; i < _number; i++) {
            let v: Vector = new Vector(450, 550);
            v.random(450, 550, 250, 250);
            v.y = yAxis;
            let s: string = randomColor();
            let human: Human = new Human(s, v);
            human.draw(25);
            humans.push(human);
            yAxis += 50;
        }
    }
    function drawStandingHumans(_number: number): void {
        let x: number = 640 - 40 * _number;
        for (let i: number = 0; i < _number; i++) {
            debugger;
            let v: Vector = new Vector(x, 570);
            let s: string = randomColor();
            let human: Human = new Human(s, v);
            human.draw(25);
            x += 50;
        }
    }
    function drawSkiLift(_house: Vector, _scale: number): void {
        let house: SkiLiftHouse = new SkiLiftHouse(_house, _scale);
        house.draw();
    }
    function drawSkiLiftLine(_start: Vector, _end: Vector, _up: boolean, _drawn?: boolean): void {   
        let line: SkiLift = new SkiLift(skiline1, skiline2);
        line.drawLine(); 
        let line2: SkiLift = new SkiLift(skiline3, skiline4);
        line2.drawLine();  
    }
    function drawGondel(_number: number, _space: number, _start: Vector, _end: Vector, _up: boolean): void {
        for (let i: number = _space; i <= _number; i++) {
            let gondel: SkiLift = new SkiLift(_start, _end, i);
            gondel.draw();
            if (_up)
                gondelUP.push(gondel);
            else
                gondelDOWN.push(gondel);
        }
        let line: SkiLift = new SkiLift(skiline1, skiline2);
        line.drawLine(); 
        let line2: SkiLift = new SkiLift(skiline3, skiline4);
        line2.drawLine(); 
    }
    /* function shootSnowball(_event: MouseEvent): void {
        let hotspot: Vector = new Vector (_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let hit: Vector | null = getHit(hotspot);
        if(hit)
            humanFall(hit);
    }
    function getHit(_hotspot: Vector): Vector {
        let v: Vector = new Vector(100, 100);
        return v;
    }
    function humanFall(_vector: Vector): void {

    } */
}