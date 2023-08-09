let arr = [5, 4, -1, 7, 8];
let maxSum = arr[0];
let currentSum = arr[0];
for (let i = 1; i < arr.length; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  maxSum = Math.max(maxSum, currentSum);
}
console.log(maxSum);
currentSum = arr[0];
maxSum = arr[0];

for (let i = 1; i < arr.length; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);
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
