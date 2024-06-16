// const cart = [];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart);
// /* What is promise ?
// --> It is just a empty object which will filled after some time
//     {data:undefine}
//     when it will filled that object then further function will execute
//     as we attach our function to promise object.
// */
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// /*
// What is the difference between above 2?
// --> 1. Difference is of guarranty.
//     2. In case promises we attach our callback fucntion  to
//     the promise object and it will call only once after createOrder
//     execution.
// */

// // Example of Promises

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);

// // There could be only 3 states of Promises
// // (Pending ,FullFilled and Rejected)

// // Promise object are immutable
// console.log(user);
// user.then(function (data) {
//   console.log(data);
// });     

// Interview Question:
/*
  1. What is Promises ?
-->  a.Promise object is like a placeholder for certain period of time which will
be filled later once async operation is happened.
     
    b.Container to fill future value.
    c. mdn defn: Promise is an object representing eventual completion or failure
    of an asynchronous operation.

*/

//Promise Chaining : To handle callback hell

/* while writing a chain of promises we return one promise object to other 
otherwise we may fall to error of while promise chaining */

// we can use arrow function in this which make more readable
/*
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
  If not use return then we may loose data
*/

// Creation  of Promise

const cart = ["Apple", "Cloth", "Kurta"];

// const promise = createOrder(cart);
// console.log(promise);

// promise
//   .then(function (orderId) {
//     console.log("order is created " + orderId);
//     //proceedToPayment(orderId)
//   })
//   .catch(function (error) {
//     console.log(error);
//   }); // Catch will handle all types of error

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch((error) => console.log(error));
// Only take the error ocurring the top of it

//Promise API is written in such a way that it grows vertically
// Promise chaining

// Consumer Code

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // create Order
//     // Validate Order
//     // Order Id

//     if (!validateOrder(cart)) {
//       const error = new Error("Cart is not validated");
//       reject(error);
//     }

//     // logic for creating the order
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }

// function proceedToPayment(orderId) {
//   /// Logic to proceed

//   return new Promise((resolve, reject) => {
//     resolve("Payment is successfull");
//   });
// }

// function validateOrder(cart) {
//   return true;
// }

// HomeWork
// createOrder, proceedToPayment, showOrderSummary, updateWallet;

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch((error) => console.log(error))
  .then(function (orderId) {
    console.log("Payment is processing");
    return proceedToPayment(orderId);
  })
  .catch((error) => console.log(error))
  .then(function (paymentInfo) {
    console.log("Your Order Summary");
    return showOrderSummary(paymentInfo);
  })
  .catch((error) => console.log(error))
  .then(function () {
    console.log("Wallet is Updating");
    return updateWallet();
  })
  .catch((error) => console.log(error))
  .then(() => console.log("All operation get completed succesfully"));

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateOrder(cart)) {
      const error = new Error("Cart is not validated");
      reject(error);
    }

    // logic for creating the order
    const orderId = "1111";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  /// Logic to proceed

  return new Promise((resolve, reject) => {
    resolve("Payment is successfull");
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise((resolve, reject) => {
    resolve("Order Summary ");
  });
}

function updateWallet() {
  return new Promise((resolve, reject) => {
    resolve("Wallet is Updated");
  });
}

function validateOrder(cart) {
  return true;
}
