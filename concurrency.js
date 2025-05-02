//callbacks-its just a fucntion which takes another function as an argument
// which is then called when the rest of the initial function as an argument.function pass as an argument 
// function doSomething(callback) {
//     callback();
// }

// fucntion sayHi() {
//     console.log("Hi");
// }

//  doSomething(sayHi);

//  function judge(grade) {
//     switch(true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing");
//             break;
//             case grade == "B":
//             console.log("You got an", grade, ": well done!");
//             break;
//             case grade == "C":
//             console.log("You got an", grade, ": alright.");
//             break;
//             case grade == "D":
//             console.log("You got an", grade, ": hmm...");
//             break;
//             default:
//                 console.log("An", grade, "! What?!");
//     }
//  }

//   function getGrade(score, callback) {
//     let grade:
//     switch(true) {
//         case score >= 90:
//             grade = "A";
//             break;
//             case score >= 80:
//             grade = "B";
//             break;
//             case score >= 70:
//             grade = "C";
//             break;
//             case score >= 60:
//             grade = "D";
//             break;
//             default:
//             grade = "F";
//     }
  
// callback(grade);
// }
// getGrade(85, judge);

//  let promise = new Promise(function (resolve, reject) {
//     let x=20;
//     if(x>10) {
//         resolve(x);
//     } else {
//         reject("Too low");
//     }
//  });
//   promise.then(
//     function (value) {
//         console.log("success:", value);
//     },
//     function (error) {
//         console.log("Error:", error);
//     }
//   );
//  const promise = new Promise((resolve, reject) =>{
//     reject("Success!");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return"can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// })
// .then(value => {
//     console.log(value);
//     return "promise";
// })
// .then(value => {
//     console.log(value);
// })   
//     .catch(value => {
//         console.log(value);
// })

// function doSomething(callback) {
//     callback();
// }
// function sayHi(){
//     console.log("Hi!");
// }
// doSomething(sayHi);
 
//async and await

// with the async keyword we can make a function return a promise, this makes the promises nicer to read and look a lot like synchronous (non-concurrent code)

// function saySomething(x) {
//     return new Promise(() =>{
//         setTimeout(() => {
//             resolve("something"+x);
//         },2000);
//     });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);

//     }
//      talk (2);
//      talk (4);
//      talk (8);

//event loop - it is a single-threaded language. a thread in this context means a  path of execution. 
// if there is only a single path, this means that tasks will hve to wait for another and only one thing canhappen at a time.
 //call stack and callback queue- the event loop is a process that is constantly monitoring this call stack, and whenever
// there are to do, the event loop does them one by one and the task from the top gets executed first.
 
// console.log("Hi there")
// add(4,5);
// console.log(add)
// function add(x,y){
//     return x+y
// }
console.log("Hi there")
setTimeout(( => console.log("sorry I'm late" 100)));
console.log(add(4,5));
function add(x,y){1
    return x+y
}