var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// Rektangler
c.fillStyle = "blue";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "green";
c.fillRect(350, 200, 100, 50);
c.fillStyle = "red";
c.fillRect(500, 400, 250, 100);
c.fillStyle = "yellow";
c.fillRect(700, 675, 135, 150);

// Linjer
c.beginPath();
c.moveTo(150, 150);
c.lineTo(230,230);
c.lineTo(400, 230);
c.lineTo(150, 150);
c.strokeStyle = "red";
c.fillStyle = "rgba(0, 0, 255, 0.4)";
c.fill();
c.stroke();

// Sirkler (Arcs)
c.beginPath();
c.arc(230, 230, 45, 0, 2*Math.PI, false);
c.strokeStyle = "pink";
c.fillStyle = "rgba(100, 23, 5, 0.4)";
c.fill();
c.stroke();

// Sirkler (Mange)

// Mønster
for(var i = 1; i<8; i++){
    c.beginPath();
    c.arc(625-i*3, 450+i*5, 5+i*5, 0, 2*Math.PI, false);
    c.strokeStyle = "pink";
    c.stroke();
}

// Tilfeldig
    for (var i = 1; i < 100; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        c.beginPath();
        c.arc(x, y, g/10, 0, 2 * Math.PI, false);
        c.strokeStyle = "rgba(" + r + ", " + g + ", " + b + ", 1)";
        c.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", 0.4)";
        c.fill();
        c.stroke();
    }