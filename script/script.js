// const greet = fuction (user) => 
// function greet(user, time = 'day') 
// {
//     console.log(`Hello, ${time} ${user}!`);
// }

// greet("Neda");
// greet("Neda", "morning", "evening");

// let r = prompt("enter a radius");
// console.log(r)
// function circleArea(radius) {
//     const radiusP = document.querySelector("#radius");
//     const resultP = document.querySelector("#result");
//     radiusP.textContent = radius;
//     let calculatedArea = Math.PI * radius * radius;
//     resultP.textContent = calculatedArea;
//     return calculatedArea;

    
//     return Math.PI * radius * radius;
    
// }
// let area = circleArea(r).toFixed(2);
// alert(`The area of a circle with radius ${r} is ${area}`);


const unorderedList = document.querySelector(".shopping");
console.log(unorderedList);
function populateList(list){
    for (let i = 0 ; i < list.length; i++) 
    {
      let listItem =   document.createElement("li");
      listItem.textContent = list[i];
      unorderedList.appendChild(listItem);
      console.log(list[i]);
    }
}

const shoppingList = ["cheese", "bread", "green pepper"];
populateList(shoppingList);

function changeListStyle() {
    unorderedList.classList.remove("circleList");
    unorderedList.classList.add("squareList");
}

changeListStyle();