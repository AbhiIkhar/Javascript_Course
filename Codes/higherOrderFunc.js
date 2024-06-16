// // Basics Example of Reduce

// // Functional Programming
// const arr = [5, 6, 7, 9, 10];

// //Reduce :Basics

// // find max outoff all arrays
// let ans = arr.reduce((acc, curr) => {
//   if (curr > acc) acc = curr;

//   return acc;
// }, 0);

// console.log(ans);

// // find sum of the elements
// ans = arr.reduce((acc, curr) => {
//   acc += curr;

//   return acc;
// }, 0);

// console.log(ans);

// // Real time example of Higher order Function

const users = [
  { firstName: "Abhishek", lastName: "Ikhar", age: 21 },
  { firstName: "Hrushabh", lastName: "Jadhav", age: 17 },
  { firstName: "Atharv", lastName: "Ikhar", age: 17 },
  { firstName: "Rohit", lastName: "Jadhav", age: 31 },
];

// // Map

// // Print the Full Name of the every user
// output = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output);

// // Print the first Name of the every user

// output = users.map((x) => x.firstName);

// console.log(output);

// // Chaining of filter and Map
// // Print the first Name of the user whose age is less than 30

// // From the left to right it will going to execute
// output = users.filter((x) => x.age < 30).map((x) => x.firstName);

// console.log(output);

// // Return the array of key:value pair of age:frequency of age : here we have to find the 1 value i.e 1 object from the array of object

// output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] += 1;
//   } else acc[curr.age] = 1;

//   return acc;
// }, {});
// console.log("Ages:Frequency");
// console.log(output);

// Print the sum of the ages of all user

Array.prototype.myreduce = function (cb, init) {
  let n = this.length;
  let ans = init;
  for (let i = 0; i < n; i++) {
    ans += cb(ans, this[i]);
  }
  return ans;
};

output = users.reduce(function (acc, curr) {
  acc = acc + curr.age;
  return acc;
}, 0);

output2 = users.reduce(function (acc, curr) {
  acc = acc + curr.age;
  return acc;
}, 0);

console.log("Sum of Ages: ");
console.log(output);

console.log("Sum of Ages: ");
console.log(output2);

// // Print the first Name of the user whose age is less than 30 using Reduce
// output = users.reduce(function (acc, curr) {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log("Print First Name whoes age is less than 30 using reduce: ");
// console.log(output);

// // Polyfill of Reduce
