// program to solve quadratic equation
let root1, root2;


let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

let D = b * b - 4 * a * c;

if (D > 0) {
    root1 = (-b + Math.sqrt(D)) / (2 * a);
    root2 = (-b - Math.sqrt(D)) / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else if (D == 0) {
    root1 = root2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-D) / (2 * a)).toFixed(2);

    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}