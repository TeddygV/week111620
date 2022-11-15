// const greet = fuction (user) => 
// function greet(user, time = 'day') 
// {
//     console.log(`Hello, ${time} ${user}!`);
// }

// greet("Neda");
// greet("Neda", "morning", "evening");



let r = prompt("enter a radius");
console.log(r)
function circleArea(radius) {
    const radiusP = document.querySelector("#radius");
    const resultP = document.querySelector("#result");
    let area = circleArea(r).toFixed(2);
    radiusP.textContent = radius;
    let calculatedarea = Math.PI * radius * radius;
    resultP.textContent = calculatedarea;
    return calculatedarea;

    
    return Math.PI * radius * radius;
    
}
let area = circleArea(r).toFixed(2);
alert(`The area of a circle with radius ${r} is ${area}`);

