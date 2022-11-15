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
    return Math.PI * radius * radius;
}
let area = circleArea(r).toFixed(2);
alert(`The area of a circle with radius ${r} is ${area}`);