let x = 'abhc';
if (typeof x === 'string' || x < 10) {
  console.log('Invalid Number !..');
} else {
  let z = Math.floor(x / 10);
  console.log(z % 10);
}
