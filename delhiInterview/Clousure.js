function call() {
  var message = 'morning';
  function display() {
    console.log(message);
  }
  message = 'afternoon';
  return display;
}
let x = call();
console.log(x);
x();

// function returnFunction() {
//   let value = 1;
//   console.log(value);
//   const a = () => {
//     console.log(value);
//     const b = () => {
//       console.log(value);
//       const c = () => {
//         console.log(value);
//       };
//       return c();
//     };
//     value = 99;
//     b();
//   };

//   return a();
// }
// let x = returnFunction();
