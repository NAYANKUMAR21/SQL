// let arr = [1, 2, 3, 4, 5];
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum > max) {
      max = sum;
    }
  }
}
console.log(max);
