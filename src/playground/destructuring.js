const person = (
    {   
        name:"Andrew",
        age:23,
        location:{
            city:"Udaipur",
            temp:30
        }
    }
);
//Destructuring
const {name : firstname = "Anonymous", age} = person;
console.log(`${firstname} is ${age}`);

const {city, temp} = person.location;
console.log(`It's ${temp} in ${city}`);

//Renaming the variables
const {city: Name, temp: temperature } = person.location;
console.log(`It's ${temperature} in ${Name}`);

console.log("=======================================================");
//Array Destructurig

const item = ['Chicken Burger',"Large","Rs.120","10"];
const [ name, size, price, time] = item;
console.log(`Your ${name} of ${size} size is ready which cost ${price} will get ready in ${time} mins`);
