"use strict";
var canvas;
(function (canvas_1) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    /* x Die Koordinate auf der x-Achse als horizontaler Startpunkt des Rechtecks.
    y Die Koordinate auf der y-Achse als vertikaler Startpunkt des Rechtecks. */
    let circle = canvas.getContext("2d");
    circle.beginPath();
    circle.arc(100, 100, 20, 0, 1.5 * Math.PI);
    circle.closePath(); // wenn die nicht da ist dann kann es sein das der Kreis nicht geschlossen wird
    circle.stroke();
    /*The arc() method creates a circular arc centered at (x, y) with a radius of radius.
    The path starts at startAngle, ends at endAngle,
    and travels in the direction given by anticlockwise (defaulting to clockwise). */
    let ellipse = canvas.getContext("2d");
    ellipse.fillStyle = "blue";
    ellipse.beginPath();
    ellipse.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    ellipse.stroke();
    ellipse.setLineDash([5, 5]);
    ellipse.moveTo(0, 200);
    ellipse.lineTo(200, 0);
    ellipse.stroke();
    let triangle = canvas.getContext("2d");
    triangle.fillStyle = "blue";
    triangle.beginPath();
    triangle.setLineDash([0, 0]);
    triangle.moveTo(100, 100);
    triangle.lineTo(200, 200);
    triangle.strokeStyle = "blue";
    triangle.stroke();
    triangle.lineTo(0, 200);
    triangle.stroke();
    triangle.lineTo(100, 100);
    triangle.stroke();
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas_script.js.map