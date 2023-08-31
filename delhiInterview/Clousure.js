// function call() {
//   var message = 'morning';
//   function display() {
//     console.log(message);
//   }
//   message = 'afternoon';
//   return display;
// }
// let x = call();
// console.log(x);
// x();

function returnFunction() {
  let value = 1;
  const a = () => {
    console.log(value);
    const b = () => {
      console.log(value);
      const c = () => {
        console.log(value);
      };
    };
    a = 99;
    b();
  };

  return a();
}
let x = returnFunction();
