let a = 10;
const b = 20;
var c = 30;

{
  var c = 300;
  const b = 200;
  let a = 100;
}

console.log(a);
console.log(b);
console.log(c);
