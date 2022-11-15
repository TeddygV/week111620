// const greet = fuction (user) => 
function greet(user, time = 'day') 
{
    console.log(`Hello, ${time} ${user}!`);
}

greet("Neda");
greet("Neda", "morning", "evening");
