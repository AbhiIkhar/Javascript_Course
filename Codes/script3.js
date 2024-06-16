// Function statement aka Func Declaration
// function a() {
//     console.log("a is called");
// }
// a();
// // Func Expression
// var b = function () {
//     console.log("B is called");
// }
// b();

/* Note: The difference between these above 2 function is hoisting
when i call both function before initialization the function expression
throw the error i.e TypeError.
*/
// Anonymous Function: Func without name

// function () {
    
// } // it will throw Syntax error 

// What is the use of this function ?
// --> It will use at a place where function is use like a value.


// Named Function Expression
// var b = function xy() {
//     console.log("B is called");
// }
// b();
// xy(); // This will throw Reference error because xy here will act like a local varible 


// Difference between Parameters and Arguments ?
// ---> things which we pass to function are arguments and variable which accept
// it are parameters


// First Class Functions -- First Class Citizens in Javascript
/* --> A programming language is said to have 
First-class functions when functions in that language are treated like any other variable.
For example, in such a language, a function can be passed as an argument to other functions, 
can be returned by another function and can be assigned as a value to a variable.*/


// Arrow Functions -- Part of ES6 

function f1(para) {
    return para;
}


var b=f1(()=>{
    console.log("Hello");
})
b();


// What is a Callback Functions in Javascript
function x(y) {
    
}
x(function y() {
    
}) 
/* After certain time y will be called
this y will depend on x when x will be called then y get called .. call back function. 

callback function gives js power of asyncronity 



*/

function x() {
    let count = 0;
    document.getElementById("clickMe").addEventListener('click',function a(){
        console.log("Clicked",count);
        count++;
    });
}

x();
