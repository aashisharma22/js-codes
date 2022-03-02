// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const semi = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  semi * (semi - side1) * (semi - side2) * (semi - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);
