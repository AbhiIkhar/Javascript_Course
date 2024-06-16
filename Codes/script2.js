//  Windows and this
// var x = 10;

// function b(){
//     var t = 10;
// }

// console.log(window.x);
// console.log(x);
// console.log(this.x);

//  undefine vs not defined in js

// var a;
// console.log(a);
// a=100;
// console.log(a);
// a="abhi";
// console.log(a);

// var b = 1
// var c = "1"
// if(b===c) {
//     console.log("b and c are equal");
// }
// else{
//     console.log("b and c are not equal");
// }

// Scope Chain , Scope and Lexical Environment

// function a(){
//     var b=10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// a();

// // Let & const in js and Temporal Dead Zone

// // console.log(a);
// let a = 1900;
// var b = 180;

// const c=200;
// // let a = 2000; // SyntaxError
// // c=200;

// // a=10;
// console.log(a);

// // Block Scope and Shadowing

var a = 20;
let b = 20;
const c = 30;
function x() {
  a = 10;

  t();
  function t() {}
  console.log(a);
  // console.log(b);
  // console.log(c);
}
x();
console.log("a= " + a);
console.log("b=" + b);
console.log("c=" + c);

// // Closures in JS

// function x() {
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// const z = x();
// console.log(z);
// z(); // it will print a =100 because a reference to memory location

// let a = 10;
// function x(a){

//     function y(){
//         console.log(a);
//         return a++;
//     }
//     console.log(y());
// }

// for(var i=0;i<10;i++){
//       x(a);
// }

// setTimeout and Closures Interview Que

function x() {
  for (let i = 1; i <= 5; i++) {
    // console.log(i);
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  // console.log("Hello Abhishek");
}

x();

// output : 1 2 3 4 5

// Explanation

/*

Each and every time the callback function is called it is pointing to different 
memory location to access i varible as it is let (every iteration it is making new copy)
Using var:
When you use var to declare the loop variable i, it has function-level scope, not block-level scope. This means there's only one variable i shared across all iterations of the loop. When the setTimeout callbacks execute, they reference the same i, which, by the time they execute, has already been incremented to 6.

Using let:
When you use let to declare the loop variable i, it has block-level scope, meaning it's re-declared for each iteration of the loop. Therefore, each callback captures the value of i at the time the setTimeout was scheduled, resulting in the expected output.

*/

// What if you have to print 1 to 5 after every 1 second without using "let" ?

function x() {
  for (var i = 1; i <= 5; i++) {
    (function temp(j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

// Crazy interview question.
