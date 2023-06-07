function circularCollision(circle1, circle2) {
    var
        x1 = circle1.x,
        y1 = circle1.y,
        r1 = circle1.r,
        x2 = circle2.x,
        y2 = circle2.y,
        r2 = circle2.r;
    var coreDistance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return coreDistance <= r1 + r2;
}