// //Trust issue with setTimeout

// console.log("Start");

// setTimeout(() => {
//     console.log("Callback");
// }, 5000);

// console.log("End");

// let startTime = new Date().getTime();
// let endTime = startTime;

// while(endTime <= startTime+10000){
//     endTime = new Date().getTime();
// }

// console.log("While loop finished");

// // Even if we set 0 milisecond in setTimeout
// console.log("Start");

// setTimeout(() => {
//     console.log("Callback");
// }, 0);

// console.log("End");

// // Modular Code

const radius = [4, 3, 2, 1];

let area = function (rad) {
  return Math.PI * rad * rad;
};
let circumference = function (rad) {
  return 2 * Math.PI * rad;
};
let diameter = function (rad) {
  return 2 * rad;
};

const calculate = function (arr, logic) {
  let n = arr.length;
  const output = [];
  for (let i = 0; i < n; i++) {
    output.push(logic(arr[i]));
  }
  return output;
}; // similar to map function (higher order function)

Array.prototype.calculate = function (logic) {
  let n = this.length;
  const output = [];
  for (let i = 0; i < n; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radius.calculate(area));
console.log(radius.map(area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log("Hello");
