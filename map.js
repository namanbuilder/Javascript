// const Fruits = new Map([
//     ["Apples",500],
//     ["Bananas",300],
//     ["Oranges",200]
// ]);
// console.log(fruits);

// //Create a Map
// const fruits = new Map();

//     //Set Map values
//     fruits.set("Apples",500);
//     fruits.set("Bananas",300);
//     fruits.set("Oranges",200);
//     //the set() methi can be used to change existing map values
    
//     fruits.get("Apples");

//toosley coupled language

//Return Object
//type of fruits;
//instanceof Map returns true;
//Return true
//fruits instanceof Map

// const apples={name:'Apples'};
// const bananas={name:'bananas'};
// const oranges={name:'oranges'};
// const fruit=new Map();
// fruit.set(apples,500);
// fruit.set(bananas,300);
// fruit.set(oranges,300);
// console.log(fruits);
// console.log(fruits.get("apple"));

//create an array

// const fruits = [
//     {name:'apples',quantity:300},
//     {name:'bananas',quantity:500},
//     {name:'oranges',quantity:200},
//     {name:'kiwi',quantity:150},
// ];

// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);

//---------------javascript destucturing-------------
//
// const person={
//     firstName:"John",
//     lastName:"Doe",
// age:50
// };
// // let{lastName,firstName} = person;
// // console.log(firstName)

// //note-Destru is not destructive 

// let{lastName,firstName,country="us"} = person;
// console.log(country)

// //rename
// let{lastName:name} = person;
// console.log(name)

// create an array
// const fruit=["Bananas","Oranges","Apples","Mangoes"];
// //  let[fruit1,,,fruit2] = fruit;
// //  console.log(fruit1);
// //  console.log(fruit2);
// let{[0]:fruit1,[1]:fruit2} = fruit;
// console.log(fruit2)

// const numbers = [10,20,30,40,50,60,70];
// const[a,b, ...rest] = numbers
// console.log(a,b,rest)

// const fruits= new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200],
// ])

//  let text="";
//  for(const[key,value]of fruits){
//     text += key + "is" +value;
//  }
// console.log(text)

//exponentiation
// let x=5;
// // let z =x**2;

// let z =Math.pow(x,2);

// const fruit=["Bananas","Oranges","Apples","Mangoes"];
// fruit.includes("Mango");

//--------trailing commas---------
//
//what trailing commas does is trailing commas have been legal in array literals.later,objects literals joined arrays.

// const arr = [
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr.length);
// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray.length)
const person = {
    firstName:"John",
    lastName:"Davies",
    age:30,
};
console.log(person)














































































