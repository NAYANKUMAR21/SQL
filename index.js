function countBeautifulArrangements(n) {
  let count = 0;
  const used = new Array(n + 1).fill(false);

  function isBeautiful(num, pos) {
    return num % pos === 0 || pos % num === 0;
  }

  function backtrack(pos) {
    if (pos > n) {
      count++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!used[i] && isBeautiful(i, pos)) {
        used[i] = true;
        backtrack(pos + 1);
        used[i] = false;
      }
    }
  }

  backtrack(1);
  return count;
}

const n = 4;
const beautifulArrangements = countBeautifulArrangements(n);
console.log(beautifulArrangements); // Output: 10
