const p1 = new Promise((resolve, reject) => {
  var v = "hello";
  // setTimeout(() => {
  resolve(v);
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

async function waitHandler() {
  console.log("Hare Krishna");
  const val = await p1;
  console.log("hari bol");
  console.log(val);

  const val2 = await p2;
  console.log("hari bol");
  console.log(val2);
}

waitHandler();
