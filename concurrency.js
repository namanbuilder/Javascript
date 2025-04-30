//callbacks-function pass as an argument 
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
 const promise = new Promise((resolve, reject) =>{
    reject("Success!");
})
.then(value => {
    console.log(value);
    return "we";
})
.then(value => {
    console.log(value);
    return"can";
})
.then(value => {
    console.log(value);
    return "chain";
})
.then(value => {
    console.log(value);
    return "promise";
})
.then(value => {
    console.log(value);
})   
    .catch(value => {
        console.log(value);
})