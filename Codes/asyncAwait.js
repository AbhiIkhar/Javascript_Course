// What is Async?

const p1 = new Promise((resolve, reject) => {
  const obj = {
    Promise: 1,
  };
  // setTimeout(() => {
  resolve(obj);
  // }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  const obj = {
    Promise: 2,
  };
  // setTimeout(() => {
  resolve(obj);
  // }, 5000);
});

// // Traditional way to resolve promises

// function promiseHandler() {
//   // Here js will not wait untill the promise get resolve
//   p1.then((res) => console.log(res));
//   console.log("Executed before promise resolve");
// }

// // promiseHandler();
// // Asyn-await way to resolve promises

// function tempFunc() {
//   console.log("Printing before async function");
// }
async function waitHandler() {
  /* here js engine will wait at await line so that promise get resolve
   Is above statement true or not ? --> No, This async function will not wait
   in call stack when it encounter await keyword it will first check is the
   promise get resolve if not then it will be suspend for while and call stack will
   be free for other function. after it resolve it will start its execution
   from where it left.
  */

  /*
   Will it wait 2 times ?
   --> No , why ? -->
  */
  console.log("Hare Krishna");
  const val = await p1;
  console.log("hari bol");
  console.log(val);

  const val2 = await p2;
  console.log("hari bol");
  console.log(val2);
}

waitHandler();
// tempFunc();

// Real World Example using async and await
/* How fetch works ? (Learn about it )
--> It gives response , fetch return a response object(readable stream)
fetch() ==> response ===> to convert it into  json that will again return a promise

const data = await fetch(API);
const res = await data.json();

*/

// const API_URL = "https://api.github.com/users/AbhiIkhar";

// async function handlePromise() {
//   try {
//     const response = await fetch(API_URL);
//     const val = await response.json();
//     console.log(val);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handlePromise();
