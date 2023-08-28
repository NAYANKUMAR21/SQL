function generateSubsets(set, index = 0, currentSubset = [], allSubsets = []) {
  if (index === set.length) {
    allSubsets.push([...currentSubset]);
    return;
  }

  // Include the current element in the subset
  currentSubset.push(set[index]);
  generateSubsets(set, index + 1, currentSubset, allSubsets);

  // Exclude the current element from the subset
  currentSubset.pop();
  generateSubsets(set, index + 1, currentSubset, allSubsets);
}

const originalSet1 = [1, 2, 3];
const subsets2 = [];
// generateSubsets(originalSet, 0, [], subsets);

// console.log(subsets);

function generateSubsets(set) {
  const subsets = [];
  const n = set.length;

  for (let i = 0; i < 1 << n; i++) {
    const currentSubset = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        currentSubset.push(set[j]);
      }
    }
    subsets.push(currentSubset);
  }

  return subsets;
}

const originalSet = [1, 2, 3];
const subsets = generateSubsets(originalSet);

console.log('here', subsets);
