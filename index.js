/*Calculating Area of Square*/

function areaOfSquare(side){
    let area=side*side;
    return area;
}
const side=4;

console.log("Area of the square = "+ areaOfSquare (side));

/* Calculating Area of Rectangle*/

function areaRectangle(x,y){
    let area=x*y;
    return area;
}
let length=10;
let width=5;

console.log("Area of Rectangle = "+ areaRectangle(length,width));


/* Calculating Area of Triangle*/

function areaTriangle(x,y){
    let area=0.5*x*y;
    return area;
}
let height=10;
let base=5;
console.log("Area of Triangle = "+ areaTriangle(height,base));

/*Converting Celsius to Fahrenheit
T(F) = T(C)*9/5+32*/

function celToFahr(n){
   return ((n*9.0/5.0)+32.0);
}

const n=30;

console.log("Temperature in Fahrenheit = " +celToFahr(n));