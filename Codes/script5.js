Function.prototype.mybind = function () {
  console.log("mybind");
};

let arr = [1, 2];
/*
when we try to access arr then we can see so many properties attach  
to arr but where it comes , whenever u create any arr, object and function a
object is attach to it which has this property */

let a = 19;

function func() {}
let obj = {
  1: "1",
  2: "2",
};

/*
arr.__proto__ ==>  Array.prototype
arr.__proto__.__proto__ ===> object

func.__proto.___ ==> function.prototype
func.double proto ==> object

Prototype chain ends at null
*/

// NOTE: whether it is array , function or object down the prototype
// chain it becomes object

function func2() {}
/*


polyfill is piece of code which is use to provide modern functionality to older browser 
if arr.map(logic);  Array.prototype.myfunc = function(){
  
}
polyfill is some sort of browser callback if browser doesn't have the 
particular function then we can create our own

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern 
functionality on older browsers that do not natively support it
*/
