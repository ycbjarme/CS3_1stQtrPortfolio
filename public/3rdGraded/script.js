function plotPoint(x0, y0, x, y) {
    // Update the result table text
    document.getElementById('in1').innerHTML = x0 + " " + y0 + " " + x + " " + y;

    // Create the visual point
    var point = document.createElement('div');  
    point.className = 'point';
    
    // Positioning logic (200 is center of 400px div, -5 offsets the 10px point width)
    point.style.left = (x - x0 + 200 - 5) + 'px'; 
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; 
    
    document.getElementById('coordinatePlane').appendChild(point);

    // Nlogonia Quadrant Logic
    let result = "";
    if (x === x0 || y === y0) {
        result = "divisa";
    } else if (x > x0 && y > y0) {
        result = "NE";
    } else if (x < x0 && y < y0) {
        result = "SO";
    } else if (x > x0 && y < y0) {
        result = "SE";
    } else if (x < x0 && y > y0) {
        result = "NO";
    }

    document.getElementById('out1').innerHTML = result;
}
